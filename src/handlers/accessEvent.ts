import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, entryGlobalParam, entryGuestParam, entryAddUser, entryResponse} from '../proto/eventApp_pb';
import {AccessEventServiceService,IAccessEventServiceServer } from '../proto/eventApp_grpc_pb';
import { getConnection, getConnectionManager, getRepository } from 'typeorm';
import  {Person} from './../models/Person'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import crypto from 'crypto'
import { User } from '../models/User';
import { statusType, UserEventAss } from '../models/UserEventAss';
import { UserCredentials } from '../models/UserCredentials';
import { isUndefined } from 'util';
import { Event } from '../models/Event';
class AccessEventHandler implements IAccessEventServiceServer{
    //addUserToEvent: grpc.handleUnaryCall<entryAddUser, entryResponse>;
    //getUserInviteLink: grpc.handleUnaryCall<entryGuestParam, entryInfo>;
    //getGlobalinviteLink: grpc.handleUnaryCall<entryGlobalParam, entryInfo>;
/**
 * @param call
 * @param callback
 *  */   
    
    //  falta fazer isto tmb
    getEntryCode =async (call:grpc.ServerUnaryCall<entryParam,entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        try{
            const reply:entryInfo =new entryInfo();
            if(await getRepository(User).count({where:{id:call.request.getUserid()}})!=1 || await getRepository(Event).count({where:{id:call.request.getEventid()}})!=1){
                reply.setStatus(false)
                reply.setStatusmsg("User or Event does not exists!")
                callback(null,reply);
            }else{
                if(await getRepository(UserEventAss).count({where:{userId:call.request.getUserid(),eventId:call.request.getEventid(),status:statusType.ACCEPTED}})!=1)
                {
                    reply.setStatus(false)
                    reply.setStatusmsg("User cannot access event!")
                    callback(null,reply);
                }else
                {
                    const secret=call.request.getUserid().toString()+'appevent'+call.request.getEventid().toString()
                    const keycode= crypto.createHash('sha256').update(secret).digest('base64')
                    var newUC=new UserCredentials()
                    newUC.date=new Date()
                    newUC.eventId=call.request.getEventid();
                    newUC.userId=call.request.getUserid();
                    newUC.keySecret=keycode;
                    newUC=await getRepository(UserCredentials).save(newUC);

                    reply.setStatus(true)
                    const expDate=new Timestamp();
                    expDate.fromDate(newUC.date)
                    reply.setExpiredate(expDate)
                    reply.setKeycode(keycode)
                    reply.setStatusmsg("OK")
                    callback(null,reply);


                    const newUE=new UserEventAss()
                    newUE.canDoPosts=false
                    newUE.eventId=call.request.getEventid();
                    newUE.userId=call.request.getUserid();
                    newUE.status=statusType.ACCEPTED
                }
                
            }
        }catch (e){
            const reply=new entryInfo();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setStatus(false);
            callback(null,reply);
        }
    }

     getGlobalinviteLink =async (call:grpc.ServerUnaryCall<entryGlobalParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        try{
            const reply:entryInfo =new entryInfo();
            if(await getRepository(Event).count({where:{ownerId:call.request.getUserid(),id:call.request.getEventid()}})!=1){
                reply.setStatusmsg("Access denied!")
                reply.setStatus(false);
                callback(null,reply);
                return
            }else{
                const secret=call.request.getUserid().toString()+'appevent'+call.request.getEventid().toString()
                const keycode= crypto.createHash('sha256').update(secret).digest('base64')
                
                const event= await getRepository(Event).findOne({where:{ownerId:call.request.getUserid(),id:call.request.getEventid()}})
                if(event!=undefined)
                {
                    event.publicKey=keycode;
                    await getRepository(Event).update(event.id,event);
                    var expDate=new Timestamp()
                    expDate.fromDate(event.endDate);
                    reply.setExpiredate(expDate)
                    reply.setKeycode(keycode)
                    reply.setStatus(true)
                    reply.setStatusmsg("OK")
                    callback(null,reply);
                    return
                }else{
                    reply.setStatusmsg("Event not found!")
                    reply.setStatus(false);
                    callback(null,reply);
                    return
                }

            }
        }catch(e){
            const reply=new entryInfo();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setStatus(false);
            callback(null,reply);
        }
        //verificar se o user é owner do evento
        //gerar codigo 
        //guardar codigo na db
        //enviar mensagem
    }
    getUserInviteLink =async (call:grpc.ServerUnaryCall<entryGuestParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        //verificar se o userid é owner do evento
        //verificar se guestid está nos participantes do evento
        //guardar o pending na tabela apropriada
        //gerar link
        //guardar link na tabela temp
        //enviar mensagem

    }
    addUserToEvent =async (call:grpc.ServerUnaryCall<entryAddUser, entryResponse>,callback:grpc.sendUnaryData<entryResponse>):Promise<void> =>{
        //verificar se existem os ids
        //adicionar ás tabelas
        try{
            const reply =new entryResponse();
            if(await getRepository(User).count({where:{id:call.request.getGuestid()}})!=1 || await getRepository(Event).count({where:{id:call.request.getEventid()}})!=1){
                reply.setStatus(false)
                reply.setStatusmsg("User or Event does not exists!")
                callback(null,reply);
            }else{

                    var newUE=new UserEventAss()
                    newUE.canDoPosts=false
                    newUE.eventId=call.request.getEventid();
                    newUE.userId=call.request.getGuestid();
                    newUE.status=statusType.ACCEPTED
                    var date=call.request.getExpiredate()?.toDate() 
                    if(date!=undefined)
                    {
                        newUE.expireDate=date;
                        newUE=await getRepository(UserEventAss).save(newUE);
                        reply.setStatus(true)
                        reply.setStatusmsg("OK")
                        callback(null,reply);
                    }else{
                        reply.setStatus(false)
                        reply.setStatusmsg("Invalid Date!")
                        callback(null,reply);
                    }     
            }
        }catch (e){
            const reply=new entryResponse();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setStatus(false);
            callback(null,reply);
        }
    }

}   
export default{
    service:AccessEventServiceService,
    handler:new AccessEventHandler(),
}