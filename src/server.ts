import 'dotenv/config';
import * as grpc from 'grpc';
import { getConnectionManager } from 'typeorm';

import connection from './db/config';
import 'reflect-metadata'

import greeterHandler from './handlers/greeter';
import { protoIndex } from './proto';


protoIndex();

const port:string|number =process.env.PORT || 50051;

type StartServerType=()=>void;



export const startServer:StartServerType=():void =>{
    const server:grpc.Server =new grpc.Server();
    //registar aqui todo os handlers
    server.addService(greeterHandler.service,greeterHandler.handler)

    server.bindAsync(`0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err:Error|null,port:number)=>{
        if(err!=null)
        {
            return console.error(err);
        }
        console.log(`gRPC listening in ${port}`);
    });
    server.start();
}
(async () => {
    await connection();
    startServer();
  })();
