import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, entryGlobalParam, entryGuestParam} from '../proto/eventApp_pb';
import {AccessEventServiceService,IAccessEventServiceServer } from '../proto/eventApp_grpc_pb';
import { getConnection, getConnectionManager, getRepository } from 'typeorm';
import  {Person} from './../models/Person'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

class AccessEventHandler implements IAccessEventServiceServer{
    //getUserInviteLink: grpc.handleUnaryCall<entryGuestParam, entryInfo>;
    //getGlobalinviteLink: grpc.handleUnaryCall<entryGlobalParam, entryInfo>;
/**
 * @param call
 * @param callback
 *  */   
    
    //  falta fazer isto tmb
    getEntryCode =async (call:grpc.ServerUnaryCall<entryParam,entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        
        // var newP=new Person()
        // newP.Name=call.request.getName();
        // newP.age=10
        // newP=await getRepository(Person).save(newP);
        const reply:entryInfo =new entryInfo();

        const expDate=new Timestamp();
        expDate.fromDate(new Date())
        reply.setExpiredate(expDate);
        reply.setKeycode("123456");
        callback(null,reply);
    }

     getGlobalinviteLink =async (call:grpc.ServerUnaryCall<entryGlobalParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        //verificar se o user é owner do evento
        //gerar codigo 
        //guardar codigo na db
        //enviar mensagem
    }
    getUserInviteLink =async (call:grpc.ServerUnaryCall<entryGuestParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        //verificar se o userid é owner do evento
        //verificar se guestid está nos participantes do evento
        //gerar link
        //guardar link na tabela temp
        //enviar mensagem

    }

}   
export default{
    service:AccessEventServiceService,
    handler:new AccessEventHandler(),
}