import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm"; 
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
   
    @PrimaryGeneratedColumn() 
    id: number; 
   
    @ManyToOne(() => User, user => user.userEventAss)@JoinColumn()
   user: User; 
   
   @ManyToOne(() => Event, event => event.userEventAss)@JoinColumn()
   event: Event; 
   
   @Column('timestamp', { nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    expireDate: Date;
   
   @Column({type:"enum",enum:statusType,default:statusType.PENDING}) 
   status: statusType; 
   @Column({nullable:true})
   canDoPosts:boolean
   
}