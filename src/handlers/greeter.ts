import * as grpc from 'grpc';

import { HelloRequest,HelloReply } from '../proto/hello_pb';
import { GreeterService,IGreeterServer } from '../proto/hello_grpc_pb';
import { getConnection, getConnectionManager, getRepository } from 'typeorm';
import  {Person} from './../models/Person'

class GreeterGandler implements IGreeterServer{
/**
 * @param call
 * @param callback
 *  */   
    
    //  sayHello: grpc.handleUnaryCall<HelloRequest, HelloReply>;
    sayHello =async (call:grpc.ServerUnaryCall<HelloRequest>,callback:grpc.sendUnaryData<HelloReply>):Promise<void> =>{
        
        var newP=new Person()
        newP.Name=call.request.getName();
        newP.age=10
        newP=await getRepository(Person).save(newP);
        const reply:HelloReply =new HelloReply();


        reply.setMessage(`Hello Mr, ${call.request.getName()} with id: ${newP.id}`);
        callback(null,reply);
    }
 


}   
export default{
    service:GreeterService,
    handler:new GreeterGandler(),
}