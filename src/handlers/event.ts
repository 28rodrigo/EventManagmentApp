import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, createEventInfo, eventAdminInfo, eventStateMsg, eventUserInfo, infoId, ocupationResponse, updateEventInfo, user, ocupation, infoUserId, upcomingReturn, eventOverview} from '../proto/eventApp_pb';
import {EventServiceService,IEventServiceServer } from '../proto/eventApp_grpc_pb';
import * as date from'date-and-time';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Event } from '../models/Event';
import { getRepository, Not } from 'typeorm';
import { start } from 'repl';
import { User } from '../models/User';
import { UserEventAss } from '../models/UserEventAss';


class EventHandler implements IEventServiceServer
{
    //getInviteEvents: grpc.handleUnaryCall<infoUserId, upcomingReturn>;
    //getExploreEvents: grpc.handleUnaryCall<infoUserId, upcomingReturn>;
    //getExploreEvents: grpc.handleUnaryCall<infoUserId, upcomingReturn>;
    //getOtherEvents: grpc.handleUnaryCall<infoUserId, upcomingReturn>;
    // getMyEvents: grpc.handleUnaryCall<infoUserId, upcomingReturn>;
    //getUpcomingEvents: grpc.handleUnaryCall<infoUserId, upcomingReturn>;
    //getUserEventInfo: grpc.handleUnaryCall<infoId, eventUserInfo>;
   // getAdminEventInfo: grpc.handleUnaryCall<infoId, eventAdminInfo>;
    //getStatisticsInfo: grpc.handleUnaryCall<infoId, ocupationResponse>;
    //createEvent: grpc.handleUnaryCall<createEventInfo, eventStateMsg>;
   // updateEvent: grpc.handleUnaryCall<updateEventInfo, eventStateMsg>;

/**
 * @param call
 * @param callback
 *  */   
    getInviteEvents= async (call: grpc.ServerUnaryCall<infoUserId, upcomingReturn>, callback: grpc.sendUnaryData<upcomingReturn>): Promise<void> => {
        try {
            const reply = new upcomingReturn();

            var user = await getRepository(User).findOne({ where: { username: call.request.getUsername() } });
            if (!user) {
                reply.setState(false);
                reply.setStatusmsg("User não existe!");
                callback(null, reply);
            } else {
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                var Useraccevents = await getRepository(UserEventAss).find({ where: { user: user ,status:2}, relations: ['event'] });
                var events: Event[] = []


                for (var i = 0; i < Useraccevents.length; i++) {
                    events.push(Useraccevents[i].event);
                }
                
                if (events.length > 0) {

                    var outgoingEvents: eventOverview[] = [];
                for (var i = 0; i < (events.length<3?events.length:3); i++) {
                    
                        var eventaux1=events[i];
                        var outeve = new eventOverview();
                        outeve.setEventid(eventaux1.id);
                        outeve.setImgurl(eventaux1.imageUrl);
                        outeve.setName(eventaux1.name);
                        outeve.setEventid(eventaux1.id);
                        outeve.setEventplace(eventaux1.eventLocal)
                        outeve.setEventtype(eventaux1.eventType)

                        const statDate = new Timestamp();
                        statDate.fromDate(eventaux1.startDate);
                        outeve.setStartdate(statDate);

                        outgoingEvents.push(outeve);
                        reply.setEventsList(outgoingEvents);
                        reply.setState(true);
                        reply.setStatusmsg('OK');
                        callback(null, reply);
                }
               
                }
                if (events.length < 1) {
                    reply.setState(false);
                    reply.setStatusmsg("Sem eventos!");
                    callback(null, reply);
                    return;
                }
            }
        } catch (e) {
            const reply = new upcomingReturn();

            if (typeof e === "string") {
                reply.setStatusmsg(e.toUpperCase());
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message);
            }
            reply.setState(false);
            callback(null, reply);
        }
    }
    getExploreEvents = async (call: grpc.ServerUnaryCall<infoUserId, upcomingReturn>, callback: grpc.sendUnaryData<upcomingReturn>): Promise<void> => {
        
        try {
            const reply = new upcomingReturn();

            var user = await getRepository(User).findOne({ where: { username: call.request.getUsername() } });
            if (!user) {
                reply.setState(false);
                reply.setStatusmsg("User não existe!");
                callback(null, reply);
            } else {
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                var events: Event[] = await getRepository(Event).find({ where: { ownerId: Not(user.id) ,eventType:1} });
                console.log(events);
                
                if(events.length<1)
                {
                    reply.setState(false);
                    reply.setStatusmsg("Sem eventos!");
                    callback(null, reply);
                }
                var explorerEvents=[]
                var outgoingEvents: eventOverview[] = [];

                for (var i = 0; i < events.length; i++) {
                    
                        var eventaux1=events[i];
                        console.log(await getRepository(UserEventAss).count({where:{event:eventaux1}}))
                        if(await getRepository(UserEventAss).count({where:{event:eventaux1}})!=1){
                            var outeve = new eventOverview();
                            outeve.setEventid(eventaux1.id);
                            outeve.setImgurl(eventaux1.imageUrl);
                            outeve.setName(eventaux1.name);
                            outeve.setEventid(eventaux1.id);
                            outeve.setEventplace(eventaux1.eventLocal)
                            outeve.setEventtype(eventaux1.eventType)
    
                            const statDate = new Timestamp();
                            statDate.fromDate(eventaux1.startDate);
                            outeve.setStartdate(statDate);
                            
                            outgoingEvents.push(outeve);
                        }
                }
                reply.setEventsList(outgoingEvents);
                reply.setState(true);
                reply.setStatusmsg('OK');
                callback(null, reply);
                
        
            }
        } catch (e) {
            const reply = new upcomingReturn();

            if (typeof e === "string") {
                reply.setStatusmsg(e.toUpperCase());
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message);
            }
            reply.setState(false);
            callback(null, reply);
        }
    };

    getOtherEvents=async (call:grpc.ServerUnaryCall<infoUserId, upcomingReturn>,callback:grpc.sendUnaryData<upcomingReturn>):Promise<void> =>{
        try{
            const reply=new upcomingReturn();
            var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
            if(!user)
            {
                
                
                reply.setState(false);
                reply.setStatusmsg("User não existe!")
                callback(null,reply);
            }else{
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                var Useraccevents= await getRepository(UserEventAss).find({where:{user:user,status:1},relations:['event']});
                var events:Event[]=[];
                if(Useraccevents.length<1)
                {
                    reply.setState(false);
                    reply.setStatusmsg("Utilizador sem acesso a eventos!")
                    callback(null,reply);
                    return
                }
                console.info(Useraccevents)
                for(var i=0;i<Useraccevents.length;i++)
                {
                    var eventass=Useraccevents[i];
                    var event= await getRepository(Event).findOne({where:{id:eventass.event.id}});
                    console.info(event)
                    if(event!=undefined)
                    events.push(event);
                }
    
    
                var outgoingEvents:eventOverview[]=[]
                for(var i=0;i<events.length;i++){
                    var eventaux=events[i];
                    if(eventaux.startDate<date.addYears(eventaux.startDate,2))
                    {
                        var outeve= new eventOverview()
                        outeve.setEventid(eventaux.id)
                        outeve.setImgurl(eventaux.imageUrl);
                        outeve.setName(eventaux.name);
                        outeve.setEventid(eventaux.id);
                        
                        const statDate=new Timestamp();
                statDate.fromDate(eventaux.startDate)
                        outeve.setStartdate(statDate)

                        outgoingEvents.push(outeve)
                    }
                }
                
                console.info(outgoingEvents)
                reply.setEventsList(outgoingEvents)
                reply.setState(true);
                reply.setStatusmsg('OK')
                callback(null,reply);
            }
        }catch(e){
            const reply=new upcomingReturn();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setState(false);
            callback(null,reply);
        }
    }
    getMyEvents=async (call:grpc.ServerUnaryCall<infoUserId, upcomingReturn>,callback:grpc.sendUnaryData<upcomingReturn>):Promise<void> =>{
        try{
            const reply=new upcomingReturn();
            var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
            if(!user)
            {
                
                
                reply.setState(false);
                reply.setStatusmsg("User não existe!")
                callback(null,reply);
            }else{
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                var events= await getRepository(Event).find({where:{ownerId:user.id}});
                if(events.length<0){
                    reply.setState(false);
                    reply.setStatusmsg("User não tem eventos!")
                    callback(null,reply);
                }
                var outgoingEvents:eventOverview[]=[]
                for(var i=0;i<events.length;i++){
                    var eventaux=events[i];
                    
                        var outeve= new eventOverview()
                        outeve.setEventid(eventaux.id)
                        outeve.setImgurl(eventaux.imageUrl);
                        outeve.setName(eventaux.name);
                        outeve.setEventid(eventaux.id);
                        outeve.setEventplace(eventaux.eventLocal);
                        outeve.setEventtype(eventaux.eventType);
                    
                        
                        const statDate=new Timestamp();
                statDate.fromDate(eventaux.startDate)
                        outeve.setStartdate(statDate)

                        outgoingEvents.push(outeve)
                    
                }
                
                console.info(outgoingEvents)
                reply.setEventsList(outgoingEvents)
                reply.setState(true);
                reply.setStatusmsg('OK')
                callback(null,reply);
            }
        }catch(e){
            const reply=new upcomingReturn();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setState(false);
            callback(null,reply);
        }
    }
    getUpcomingEvents=async (call:grpc.ServerUnaryCall<infoUserId, upcomingReturn>,callback:grpc.sendUnaryData<upcomingReturn>):Promise<void> =>{
        try{
            const reply=new upcomingReturn();
            var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}})
            if(!user)
            {
                
                
                reply.setState(false);
                reply.setStatusmsg("User não existe!")
                callback(null,reply);
            }else{
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                var Useraccevents= await getRepository(UserEventAss).find({where:{user:user},relations:['event']});
                var events:Event[]=[];
                if(Useraccevents.length<1)
                {
                    reply.setState(false);
                    reply.setStatusmsg("Utilizador sem acesso a eventos!")
                    callback(null,reply);
                    return
                }
                console.info(Useraccevents)
                for(var i=0;i<Useraccevents.length;i++)
                {
                    var eventass=Useraccevents[i];
                    var event= await getRepository(Event).findOne({where:{id:eventass.event.id}});
                    console.info(event)
                    if(event!=undefined)
                    events.push(event);
                }
    
    
                var outgoingEvents:eventOverview[]=[]
                for(var i=0;i<events.length;i++){
                    var eventaux=events[i];
                    if(eventaux.startDate<date.addYears(eventaux.startDate,2))
                    {
                        var outeve= new eventOverview()
                        outeve.setEventid(eventaux.id)
                        outeve.setImgurl(eventaux.imageUrl);
                        outeve.setName(eventaux.name);
                        outeve.setEventid(eventaux.id);
                        
                        const statDate=new Timestamp();
                statDate.fromDate(eventaux.startDate)
                        outeve.setStartdate(statDate)

                        outgoingEvents.push(outeve)
                    }
                }
                
                console.info(outgoingEvents)
                reply.setEventsList(outgoingEvents)
                reply.setState(true);
                reply.setStatusmsg('OK')
                callback(null,reply);
            }
        }catch(e){
            const reply=new upcomingReturn();

            if (typeof e === "string") {
               reply.setStatusmsg(e.toUpperCase())
            } else if (e instanceof Error) {
                reply.setStatusmsg(e.message)  
            }
            reply.setState(false);
            callback(null,reply);
        }
         
    }
    createEvent =async (call:grpc.ServerUnaryCall<createEventInfo, eventStateMsg>,callback:grpc.sendUnaryData<eventStateMsg>):Promise<void> =>{
        try{
            var newE=new Event();
            const reply=new eventStateMsg();
            var user=await getRepository(User).findOne({where:{username:call.request.getUsername()}});
            if(user){
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                newE.ownerId=user.id ;
            }
            
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
            const reply:eventStateMsg=new eventStateMsg();
            var user= await getRepository(User).findOne({where:{username:call.request.getUsername()}});
            if(user){
                if(user.token!=call.request.getToken())
                {
                    reply.setState(false)
                    reply.setStatusmsg("Access denied!")
                    callback(null,reply);
                }
                if(await getRepository(Event).count({where:{id:call.request.getId(),ownerId:user.id}})!=1)
                {
                    const reply=new eventStateMsg();
                    reply.setId(0)
                    reply.setState(false);
                    reply.setStatusmsg("Event does not exist or access denied!")
                    callback(null,reply);
                }else{
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
                            
                            reply.setId(newE.id)
                            reply.setStatusmsg("OK")
                            reply.setState(true);
                            callback(null,reply);
                        }
                    }else{
                        
                            reply.setId(newE.id)
                            reply.setState(false);
                            reply.setStatusmsg(res.raw)
                            callback(null,reply);
                    }
                }
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