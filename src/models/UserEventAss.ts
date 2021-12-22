import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"; 
import { User } from "./User";
import { Event } from "./Event";
import 'reflect-metadata'
export enum statusType{
    ACCEPTED=1,
    PENDING=2,
    DENIED=3
}
@Entity() 
export  class UserEventAss{   
    
   @Column({primary:true,})
   @OneToOne(()=> User)
   @JoinColumn()
   userId: number; 

   @Column({primary:true,})
   @OneToOne(()=> Event)
   @JoinColumn()
   eventId: number; 
   
   @Column('timestamp', { nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    expireDate: Date;
   
   @Column({type:"enum",enum:statusType,default:statusType.PENDING}) 
   status: statusType; 
   @Column({nullable:true})
   canDoPosts:boolean
   
}