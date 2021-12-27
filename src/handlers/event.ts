import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, createEventInfo, eventAdminInfo, eventStateMsg, eventUserInfo, infoId, ocupationResponse, updateEventInfo, user, ocupation} from '../proto/eventApp_pb';
import {EventServiceService,IEventServiceServer } from '../proto/eventApp_grpc_pb';

import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Event } from '../models/Event';
import { getRepository } from 'typeorm';
import { start } from 'repl';

class EventHandler implements IEventServiceServer
{
    //getUserEventInfo: grpc.handleUnaryCall<infoId, eventUserInfo>;
   // getAdminEventInfo: grpc.handleUnaryCall<infoId, eventAdminInfo>;
    //getStatisticsInfo: grpc.handleUnaryCall<infoId, ocupationResponse>;
    //createEvent: grpc.handleUnaryCall<createEventInfo, eventStateMsg>;
   // updateEvent: grpc.handleUnaryCall<updateEventInfo, eventStateMsg>;
/**
 * @param call
 * @param callback
 *  */   
    
    createEvent =async (call:grpc.ServerUnaryCall<createEventInfo, eventStateMsg>,callback:grpc.sendUnaryData<eventStateMsg>):Promise<void> =>{
        try{
            var newE=new Event();
            newE.name=call.request.getName();
            newE.imageUrl=call.request.getImgurl();
            newE.description=call.request.getDescription();
            newE.latitude=call.request.getLatitude();
            newE.longitude=call.request.getLongitude();
            newE.eventLocal=call.request.getEventplace();
            newE.eventType=call.request.getEventtype();
            newE.AgeRestrition=call.request.getAgerestriction()
            var startDate=call.request.getStartdate()?.toDate()
            var endDate=call.request.getEnddate()?.toDate()
            if(startDate!=undefined && endDate!=undefined)
            {
                newE.startDate=startDate;
                newE.endDate=endDate;
            }else{
                newE.startDate=new Date()
                newE.endDate=new Date()
            }
            
           
   
            newE= await getRepository(Event).save(newE);
   
           // newP.Name=call.request.getName();
           // newP.age=10
           // newP=await getRepository(Person).save(newP);
           const reply:eventStateMsg=new eventStateMsg();

           reply.setId(newE.id)
           reply.setState(true);
           reply.setStatusmsg("OK")
           callback(null,reply);
        }catch(e){
            const reply:eventStateMsg=new eventStateMsg();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }

            reply.setId(0)
            reply.setState(false);
            callback(null,reply);
        }
         
    }
    updateEvent =async (call:grpc.ServerUnaryCall<updateEventInfo, eventStateMsg>,callback:grpc.sendUnaryData<eventStateMsg>):Promise<void> =>{
        try{
            var newE=new Event();
            newE.id=call.request.getId();
            newE.name=call.request.getName();
            newE.imageUrl=call.request.getImgurl();
            newE.description=call.request.getDescription();
            newE.latitude=call.request.getLatitude();
            newE.longitude=call.request.getLongitude();
            newE.eventLocal=call.request.getEventplace();
            newE.eventType=call.request.getEventtype();
            newE.AgeRestrition=call.request.getAgerestriction();
            var startDate=call.request.getStartdate()?.toDate()
            var endDate=call.request.getEnddate()?.toDate()
            if(startDate!=undefined && endDate!=undefined)
            {
                newE.startDate=startDate;
                newE.endDate=endDate;
            }else{
                newE.startDate=new Date()
                newE.endDate=new Date()
            }
           
   
            var res= await getRepository(Event).update(newE.id,newE);
            if(res &&res.affected)
            {
                if(res.affected>0)
                {
                    const reply:eventStateMsg=new eventStateMsg();
                    reply.setId(newE.id)
                    reply.setStatusmsg("OK")
                    reply.setState(true);
                    callback(null,reply);
                }
            }else{
                const reply:eventStateMsg=new eventStateMsg();
                    reply.setId(newE.id)
                    reply.setState(false);
                    reply.setStatusmsg(res.raw)
                    callback(null,reply);
            }
        }catch(e){
            const reply:eventStateMsg=new eventStateMsg();


            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setId(0)
            reply.setState(false);
            callback(null,reply);
        }
    }
    getUserEventInfo =async (call:grpc.ServerUnaryCall<infoId, eventUserInfo>,callback:grpc.sendUnaryData<eventUserInfo>):Promise<void> =>{
        try{
            var event=await getRepository(Event).findOne(call.request.getIdevento())
            if(event!=undefined)
            {
                const statDate=new Timestamp();
                statDate.fromDate(new Date())
                const reply:eventUserInfo=new eventUserInfo();
                reply.setState(true);
                reply.setName(event.name);
                reply.setImgurl(event.imageUrl);
                reply.setDescription(event.description);
                reply.setLatitude(event.latitude);
                reply.setLongitude(event.longitude);
                reply.setEventplace(event.eventLocal);
                reply.setEventtype(event.eventType);
                reply.setStatisticsdate(statDate);
                reply.setOcupationpercentage((event.nParticipants*event.nActiveParticipants)*100);
                reply.setAgerestriction(event.AgeRestrition)
                var startDate=new Timestamp()
                startDate.fromDate(event.startDate)
                var endDate= new Timestamp()
                endDate.fromDate(event.endDate)
                reply.setStartdate(startDate)
                reply.setEnddate(endDate)
                reply.setStatusmsg('OK')
                reply.setEventid(event.id)
                callback(null,reply);
            }else{
                const reply:eventUserInfo=new eventUserInfo();
                reply.setState(false);
                reply.setStatusmsg("Event not found!")
                callback(null,reply);
            }
        }catch(e){
            const reply:eventUserInfo=new eventUserInfo();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setState(false);
            callback(null,reply);
        }
    }
    getAdminEventInfo =async (call:grpc.ServerUnaryCall<infoId, eventAdminInfo>,callback:grpc.sendUnaryData<eventAdminInfo>):Promise<void> =>{
        try{
            var event=await getRepository(Event).findOne(call.request.getIdevento())
            if(event!=undefined)
            {
                const statDate=new Timestamp();
                statDate.fromDate(new Date())
                const reply:eventAdminInfo=new eventAdminInfo();
                reply.setState(true);
                reply.setName(event.name);
                reply.setImgurl(event.imageUrl);
                reply.setDescription(event.description);
                reply.setLatitude(event.latitude);
                reply.setLongitude(event.longitude);
                reply.setEventplace(event.eventLocal);
                reply.setEventtype(event.eventType);
                //criar user exemplo
                var exuser=new user;
                exuser.setUsername("rodrigo")
                exuser.setName("Rodrigo Pereira")
                //exuser.setOrganization("UTAD")
                //exuser.setJob("student")
                exuser.setImgurl("https://avatars.githubusercontent.com/u/66921613?v=4")
                reply.setParticipantsList([exuser])
                reply.setStatisticsdate(statDate);
                reply.setNguests(event.nGuests);
                reply.setNparticipants(event.nParticipants);
                reply.setStatisticsdate(statDate);
                reply.setOcupationpercentage((event.nParticipants*event.nActiveParticipants)*100);
                reply.setAgerestriction(event.AgeRestrition)
                var startDate=new Timestamp()
                startDate.fromDate(event.startDate)
                var endDate= new Timestamp()
                endDate.fromDate(event.endDate)
                reply.setStartdate(startDate)
                reply.setEnddate(endDate)
                reply.setStatusmsg('OK')
                reply.setEventid(event.id)
                callback(null,reply);
            }else{
                const reply:eventAdminInfo=new eventAdminInfo();
                reply.setState(false);
                reply.setStatusmsg("Event not found!")
                callback(null,reply);
            }
        }catch(e){
            const reply:eventAdminInfo=new eventAdminInfo();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setState(false);
            callback(null,reply);
        }
    }
    getStatisticsInfo =async (call:grpc.ServerUnaryCall<infoId, ocupationResponse>,callback:grpc.sendUnaryData<ocupationResponse>):Promise<void> =>{
        try{
            const statDate=new Timestamp();
                statDate.fromDate(new Date())
            var event=await getRepository(Event).findOne(call.request.getIdevento())
            if(event!=undefined)
            {
                const reply:ocupationResponse=new ocupationResponse()
                reply.setState(true);
                //exepmlo ocup stats
                var ocupationstat=new ocupation()
                ocupationstat.setStatisticsdate(statDate)
                ocupationstat.setOcupationpercentage(80);
                ocupationstat.setNparticipants(100)
                ocupationstat.setNactiveparticipants(80);
                ocupationstat.setNinvites(200)

                reply.setOcupationstatsList([ocupationstat]);
                reply.setStatusmsg("OK")
                callback(null,reply)
            }else
            {   
                const reply:ocupationResponse=new ocupationResponse()
                reply.setState(false);
                reply.setStatusmsg("Event not found!")
                callback(null,reply)
            }

        }catch(e){
            const reply:ocupationResponse=new ocupationResponse()

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setState(false);
            callback(null,reply)
        }
    }
}   
export default{
    service:EventServiceService,
    handler:new EventHandler(),
}