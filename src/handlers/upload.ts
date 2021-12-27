import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, createEventInfo, eventAdminInfo, eventStateMsg, eventUserInfo, infoId, ocupationResponse, updateEventInfo, user, ocupation, fileUploadRequest, fileUploadResponse} from '../proto/eventApp_pb';
import {EventServiceService,FileUploaderServiceService,IEventServiceServer, IFileUploaderServiceServer } from '../proto/eventApp_grpc_pb';
import uuid from 'uuid'
import fs from 'fs'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Event } from '../models/Event';
import { getRepository } from 'typeorm';

class FileUploaderHandler implements IFileUploaderServiceServer
{
   // uploadFile: grpc.handleClientStreamingCall<fileUploadRequest, fileUploadResponse>;
    
/**
 * @param call
 * @param callback
*  */   
uploadFile =async (call:grpc.ServerReadableStream<createEventInfo, eventStateMsg>,callback:grpc.sendUnaryData<fileUploadResponse>):Promise<void> =>{
    let name:any, chunk;
    const tempFilePath = `/tmp/test.txt`;
    
    call.on('data', async (payload) => {
        console.log(payload)
        console.log("helloo")
        if(payload.data && payload.data=='name' && payload[payload.data]) {
            name = payload[payload.data];
        }
        else if(payload.data && payload.data=='chunk' && payload[payload.data]) {
            chunk = payload[payload.data];
            fs.appendFileSync(tempFilePath, chunk);
        }
    });

    call.on('end', async () => {
        const reply= new fileUploadResponse();
        reply.setId('test')
        reply.setName(name)
        callback(null, reply);
    });
}
}
export default{
    service:FileUploaderServiceService,
    handler:new FileUploaderHandler(),
}