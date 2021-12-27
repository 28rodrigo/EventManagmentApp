import * as grpc from '@grpc/grpc-js';
import { entryParam,entryInfo, entryGlobalParam, entryGuestParam, entryAddUser, entryResponse, createUserInfo, updateUserInfo, userStateMsg} from '../proto/eventApp_pb';
import {AccessEventServiceService,IAccessEventServiceServer, IUserServiceServer, UserServiceService } from '../proto/eventApp_grpc_pb';
import { getConnection, getConnectionManager, getRepository } from 'typeorm';
import  {Person} from './../models/Person'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { User } from '../models/User';

class UserHandler implements IUserServiceServer{
    //createUser: grpc.handleUnaryCall<createUserInfo, userStateMsg>;
    //updateUser: grpc.handleUnaryCall<updateUserInfo, userStateMsg>;
    createUser =async (call:grpc.ServerUnaryCall<createUserInfo, userStateMsg>,callback:grpc.sendUnaryData<userStateMsg>):Promise<void> =>{
        try{
            var newU=new User();
            newU.username=call.request.getUsername();
            newU.name=call.request.getName();
            newU.imageUrl=call.request.getImageurl();
            newU.age=call.request.getAge();
            newU.password="123456";
            newU.organization=call.request.getOrganization();
            newU.job=call.request.getJob();
            newU= await getRepository(User).save(newU);
   
           // newP.Name=call.request.getName();
           // newP.age=10
           // newP=await getRepository(Person).save(newP);
           const reply:userStateMsg=new userStateMsg();

           reply.setId(newU.id)
           reply.setState(true);
           reply.setStatusmsg("OK")
           callback(null,reply);
        }catch(e){
            const reply=new userStateMsg();

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
updateUser =async (call:grpc.ServerUnaryCall<updateUserInfo, userStateMsg>,callback:grpc.sendUnaryData<userStateMsg>):Promise<void> =>{
    try{
        if(await getRepository(User).count({where:{id:call.request.getId()}})!=1)
        {
            const reply=new userStateMsg();
            reply.setId(0)
            reply.setState(false);
            reply.setStatusmsg("User does not exist!")
            callback(null,reply);
        }else{
            var newU=new User();
            newU.id=call.request.getId();
            newU.username=call.request.getUsername();
            newU.name=call.request.getName();
            newU.password="123456";
            newU.imageUrl=call.request.getImageurl();
            newU.age=call.request.getAge();
            newU.organization=call.request.getOrganization();
            newU.job=call.request.getJob();
            var res= await getRepository(User).update(newU.id,newU);
            if(res &&res.affected)
            {
                if(res.affected>0)
                {
                    const reply:userStateMsg=new userStateMsg();
    
                    reply.setId(newU.id)
                    reply.setState(true);
                    reply.setStatusmsg("OK")
                    callback(null,reply);
                }
            }else{
                const reply:userStateMsg=new userStateMsg();
                    reply.setId(newU.id)
                    reply.setState(false);
                    reply.setStatusmsg(res.raw)
                    callback(null,reply);
            }
          
        }
        
    }catch(e){
        const reply=new userStateMsg();

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
}
export default{
    service:UserServiceService,
    handler:new UserHandler(),
}