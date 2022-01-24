import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, entryGlobalParam, entryGuestParam, entryAddUser, entryResponse, entryInfoRequest, entryValidation, publicRegisterInfo, publicInviteInfo, QRentry} from '../proto/eventApp_pb';
import {AccessEventServiceService,IAccessEventServiceServer } from '../proto/eventApp_grpc_pb';
import { getConnection, getConnectionManager, getRepository, Not } from 'typeorm';
import  {Person} from './../models/Person'
import * as date from'date-and-time';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import crypto from 'crypto'
import { User } from '../models/User';
import { statusType, UserEventAss } from '../models/UserEventAss';
import { UserCredentials } from '../models/UserCredentials';
import { isUndefined } from 'util';
import { Event } from '../models/Event';
class AccessEventHandler implements IAccessEventServiceServer{
   // registerQREvent: grpc.handleUnaryCall<QRentry, entryResponse>;
    //getGlobalinviteLink: grpc.handleUnaryCall<entryGlobalParam, entryInfo>;
   // registerInviteEvent: grpc.handleUnaryCall<publicRegisterInfo, entryResponse>;
    //registerPublicEvent: grpc.handleUnaryCall<publicRegisterInfo, entryValidation>;
    //validateKeycode: grpc.handleUnaryCall<entryInfoRequest, entryValidation>;
    //addUserToEvent: grpc.handleUnaryCall<entryAddUser, entryResponse>;
    //getUserInviteLink: grpc.handleUnaryCall<entryGuestParam, entryInfo>;
    //getGlobalinviteLink: grpc.handleUnaryCall<entryGlobalParam, entryInfo>;
/**
 * @param call
 * @param callback
 *  */   
registerQREvent =async (call:grpc.ServerUnaryCall<QRentry, entryResponse>,callback:grpc.sendUnaryData<entryResponse>):Promise<void> =>{
    try{
        const reply =new entryResponse();
        var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
        var events=await getRepository(Event).find({where:{publicKey:Not("")}})

        if(!user || !events){
            reply.setStatus(false)
                reply.setStatusmsg("Error User / Event!")
                callback(null,reply);
        }else{
            if(user.token!=call.request.getToken())
            {
                reply.setStatus(false)
                reply.setStatusmsg("Access denied!")
                callback(null,reply);
            }
            //var event=new Event();
            for(var i=0;i<events.length;i++)
            {
                var auxevent=events[i];
                if(auxevent.publicKey==call.request.getKeycode())
                {
                    var newUE=new UserEventAss()
                    newUE.canDoPosts=false
                    newUE.status=statusType.ACCEPTED
                    auxevent.nParticipants+=1;
                    await getRepository(Event).update(auxevent.id,auxevent);
                    newUE.event=auxevent;
                    newUE.user=user;
                    newUE=await getRepository(UserEventAss).save(newUE);
                    reply.setStatus(true);
                    reply.setStatusmsg("OK")
                    callback(null,reply);
                }

            }
            reply.setStatus(false);
                    reply.setStatusmsg("Event key not working")
                    callback(null,reply);
                    
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
getGlobalinviteLink= async (call:grpc.ServerUnaryCall<entryGlobalParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
    try{
        const reply=new entryInfo();
        var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
        var event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}})
        if(!user || !event){
            reply.setStatus(false)
                reply.setStatusmsg("Error User / Event!")
                callback(null,reply);
        }else{
            if(user.token!=call.request.getToken())
            {
                reply.setStatus(false)
                reply.setStatusmsg("Access denied!")
                callback(null,reply);
            }
            const secret=user.username.toString()+'appevent'+call.request.getEventid().toString()
            const keycode= crypto.createHash('sha256').update(secret).digest('base64')
            event.publicKey=keycode;
            await getRepository(Event).update(event.id,event);
            reply.setKeycode(keycode);
            reply.setStatus(true);
            reply.setStatusmsg('OK')
            callback(null,reply);
            
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
registerInviteEvent=async (call:grpc.ServerUnaryCall<publicInviteInfo, entryResponse>,callback:grpc.sendUnaryData<entryResponse>):Promise<void> =>{
    try{
        const reply =new entryResponse();
        var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
        var event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}})
        if(!user || !event){
            reply.setStatus(false)
                reply.setStatusmsg("Error User / Event!")
                callback(null,reply);
        }else{
            if(user.token!=call.request.getToken())
            {
                reply.setStatus(false)
                reply.setStatusmsg("Access denied!")
                callback(null,reply);
            }
                var newUE=await getRepository(UserEventAss).findOne({where:{event:event,user:user}})
                if(newUE){
                    if(call.request.getAccept())
                    {
                        newUE.canDoPosts=false
                        newUE.status=statusType.ACCEPTED
                        event.nParticipants=event.nGuests-1;
                            event.nParticipants=event.nParticipants+1;
                            newUE=await getRepository(UserEventAss).save(newUE);
                            await getRepository(Event).update(event.id,event)
                            reply.setStatus(true)
                            reply.setStatusmsg("OK")
                            callback(null,reply);
                    }else{
                        newUE.canDoPosts=false
                        newUE.status=statusType.DENIED
                        event.nParticipants=event.nGuests+1;
                        
                            newUE=await getRepository(UserEventAss).save(newUE);
                            await getRepository(Event).update(event.id,event)
                            reply.setStatus(true)
                            reply.setStatusmsg("OK")
                            callback(null,reply);
                    }
                    
                }else{
                    reply.setStatus(false)
                    reply.setStatusmsg("User not registed in the event!")
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
registerPublicEvent=async (call:grpc.ServerUnaryCall<publicRegisterInfo, entryResponse>,callback:grpc.sendUnaryData<entryResponse>):Promise<void> =>{
    try{
        const reply =new entryResponse();
        var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
        
        var event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}})
        if(!user || !event){
            reply.setStatus(false)
            reply.setStatusmsg("User or Event does not exists!")
            callback(null,reply);
        }else{
            if(user.token!=call.request.getToken())
            {
                reply.setStatus(false)
                reply.setStatusmsg("Access denied!")
                callback(null,reply);
            }
                var newUE=new UserEventAss()
                newUE.canDoPosts=false
                newUE.event=event
                newUE.user=user
                newUE.status=statusType.ACCEPTED
                    event.nParticipants=event.nParticipants+1;
                    newUE=await getRepository(UserEventAss).save(newUE);
                    await getRepository(Event).update(event.id,event)
                    reply.setStatus(true)
                    reply.setStatusmsg("OK")
                    callback(null,reply);
                    
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
 validateKeycode =async (call:grpc.ServerUnaryCall<entryInfoRequest, entryValidation>,callback:grpc.sendUnaryData<entryValidation>):Promise<void> =>{
    try{
        const reply =new entryValidation()
        var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}});
        if(!user)
        {
            reply.setStatus(false)
            reply.setStatusmsg("Without User!");
            callback(null,reply)
        }else{
            var event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}});
            if(!event)
            {
                reply.setStatus(false)
                reply.setStatusmsg("Event not found!");
                callback(null,reply)
            }
            if(user.token!=call.request.getToken())
            {
                reply.setStatus(false)
                reply.setStatusmsg("Accesse denied!");
                callback(null,reply)
            }
            var UserCred=await getRepository(UserCredentials).find({where:{event:event},order:{date:"DESC"}})
            for(var i=0;i<UserCred.length;i++)
            {
                var cred=UserCred[i];
                if(cred.keySecret==call.request.getKeycode())
                {
                    if(cred.date<date.addMinutes(cred.date,10))
                    {
                        reply.setStatus(true);
                        reply.setValidating(true);
                        reply.setStatusmsg('OK');
                    }
                }
                reply.setStatus(false)
                reply.setStatusmsg("Accesse denied!");
                callback(null,reply)
            }
            reply.setStatus(false)
                reply.setStatusmsg("Sem acesso!");
                callback(null,reply)
        }
            
            

            
        
        
    
    }catch (e){
            const reply=new entryValidation();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setStatus(false);
            callback(null,reply);
        }
 }
    //  falta fazer isto tmb
    getEntryCode =async (call:grpc.ServerUnaryCall<entryParam,entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
        try{
            const reply:entryInfo =new entryInfo();
            var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}});
            var event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}})
            if(!user || !event){
                reply.setStatus(false)
                reply.setStatusmsg("User or Event does not exists!")
                callback(null,reply);
            }else{
                if(user.token!= call.request.getToken())
                {
                    reply.setStatus(false)
                    reply.setStatusmsg("Access denied");
                    callback(null,reply);
                }

                if(await getRepository(UserEventAss).count({where:{user:user,event:event,status:statusType.ACCEPTED}})!=1)
                {
                    reply.setStatus(false)
                    reply.setStatusmsg("User cannot access event!")
                    callback(null,reply);
                }else
                {

                    const secret=user.username.toString()+'appevent'+call.request.getEventid().toString()
                    const keycode= crypto.createHash('sha256').update(secret).digest('base64')
                    var newUC=new UserCredentials()
                    newUC.date=new Date()
                    newUC.event=event
                    newUC.user=user
                    newUC.keySecret=keycode;
                    newUC=await getRepository(UserCredentials).save(newUC);

                    reply.setStatus(true)
                    const expDate=new Timestamp();
                    expDate.fromDate(newUC.date)
                    reply.setKeycode(keycode)
                    reply.setStatusmsg("OK")
                    callback(null,reply);
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

    //  getGlobalinviteLink =async (call:grpc.ServerUnaryCall<entryGlobalParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
    //     try{
    //         const reply:entryInfo =new entryInfo();
    //         if(await getRepository(Event).count({where:{ownerId:call.request.getUserid(),id:call.request.getEventid()}})!=1){
    //             reply.setStatusmsg("Access denied!")
    //             reply.setStatus(false);
    //             callback(null,reply);
    //             return
    //         }else{
    //             const secret=call.request.getUserid().toString()+'appevent'+call.request.getEventid().toString()
    //             const keycode= crypto.createHash('sha256').update(secret).digest('base64')
                
    //             const event= await getRepository(Event).findOne({where:{ownerId:call.request.getUserid(),id:call.request.getEventid()}})
    //             if(event!=undefined)
    //             {
    //                 event.publicKey=keycode;
    //                 await getRepository(Event).update(event.id,event);
    //                 var expDate=new Timestamp()
    //                 expDate.fromDate(event.endDate);
    //                 reply.setExpiredate(expDate)
    //                 reply.setKeycode(keycode)
    //                 reply.setStatus(true)
    //                 reply.setStatusmsg("OK")
    //                 callback(null,reply);
    //                 return
    //             }else{
    //                 reply.setStatusmsg("Event not found!")
    //                 reply.setStatus(false);
    //                 callback(null,reply);
    //                 return
    //             }

    //         }
    //     }catch(e){
    //         const reply=new entryInfo();

    //         if (typeof e === "string") {
    //            reply.setStatusmsg(e.toUpperCase())
    //         } else if (e instanceof Error) {
    //             reply.setStatusmsg(e.message)  
    //         }
    //         reply.setStatus(false);
    //         callback(null,reply);
    //     }
    //     //verificar se o user é owner do evento
    //     //gerar codigo 
    //     //guardar codigo na db
    //     //enviar mensagem
    // }
    // getUserInviteLink =async (call:grpc.ServerUnaryCall<entryGuestParam, entryInfo>,callback:grpc.sendUnaryData<entryInfo>):Promise<void> =>{
    //     try{
    //         const reply:entryInfo =new entryInfo();
    //         if(await getRepository(Event).count({where:{ownerId:call.request.getUserid(),id:call.request.getEventid()}})!=1 ||
    //         await getRepository(UserEventAss).count({where:{userId:call.request.getGuestid(),eventId:call.request.getEventid()}})!=1){
    //             reply.setStatusmsg("Access denied!")
    //             reply.setStatus(false);
    //             callback(null,reply);
    //             return
    //         }else{
    //             const secret=call.request.getUserid().toString()+'appevent'+call.request.getEventid().toString()
    //             const keycode= crypto.createHash('sha256').update(secret).digest('base64')
    //             var newuserCredentials= new UserCredentials();
    //             newuserCredentials.date=new Date();
    //             newuserCredentials.event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}}) as Event;
    //             newuserCredentials.keySecret=keycode;
    //             newuserCredentials.user=await getRepository(User).findOne({where:{id:call.request.getUserid()}}) as User;
    //             newuserCredentials= await getRepository(UserCredentials).save(newuserCredentials)
    //             var expDate=new Timestamp()
    //             expDate.fromDate(newuserCredentials.date)
    //             reply.setExpiredate(expDate)
    //             reply.setKeycode(keycode)
    //             reply.setStatus(true);
    //             reply.setStatusmsg("OK")
    //             callback(null,reply);
    //             return

    //         }
    //     }catch(e){
    //         const reply=new entryInfo();

    //         if (typeof e === "string") {
    //         reply.setStatusmsg(e.toUpperCase())
    //         } else if (e instanceof Error) {
    //             reply.setStatusmsg(e.message)  
    //         }
    //         reply.setStatus(false);
    //         callback(null,reply);
    //     }
    //     //verificar se o userid é owner do evento
    //     //verificar se guestid está nos participantes do evento
    //     //guardar o pending na tabela apropriada
    //     //gerar link
    //     //guardar link na tabela temp
    //     //enviar mensagem

    // }
    addUserToEvent =async (call:grpc.ServerUnaryCall<entryAddUser, entryResponse>,callback:grpc.sendUnaryData<entryResponse>):Promise<void> =>{
        //verificar se existem os ids
        //adicionar ás tabelas
        try{
            const reply =new entryResponse();
            var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
            var guestUser=await getRepository(User).findOne({where:{username:call.request.getGuestusername()}})
            var event=await getRepository(Event).findOne({where:{id:call.request.getEventid()}})
            console.log("user"+user)
            console.log("guest"+guestUser)
            console.log("event"+event)
            if(!user || !guestUser||!event ){
                
                reply.setStatus(false)
                reply.setStatusmsg("Users or Event does not exists!")
                callback(null,reply);
            }else{
               
                if(event.ownerId!=user.id)
                {
                    reply.setStatus(false)
                    reply.setStatusmsg("Users does not have access!")
                    callback(null,reply);
                }
                    var newUE=new UserEventAss()
                    newUE.canDoPosts=false
                    newUE.event=event
                    newUE.user=guestUser
                    newUE.status=statusType.PENDING                    
                        
                        event.nParticipants=event.nGuests+1;
                        newUE=await getRepository(UserEventAss).save(newUE);
                        await getRepository(Event).update(event.id,event)
                        reply.setStatus(true)
                        reply.setStatusmsg("OK")
                        callback(null,reply);
                   
                        reply.setStatus(false)
                        reply.setStatusmsg("Invalid Date!")
                        callback(null,reply);
                     
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