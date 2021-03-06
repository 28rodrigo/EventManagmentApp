import {Entity, PrimaryGeneratedColumn, Column, Double, ColumnTypeUndefinedError, OneToOne, JoinColumn, OneToMany,} from "typeorm"; 
import 'reflect-metadata'
import { User } from "./User";
import { UserEventAss } from "./UserEventAss";
import { UserCredentials } from "./UserCredentials";
import { EventStats } from "./EventStats";
export enum localType{
    PLACE=1,
    ONLINE=2
}
export enum eventType{
    PRIVATE=1,
    PUBLIC=2
}
@Entity() 
export  class Event {   
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   name: string; 

   @Column()
   ownerId: number; 
   
   @Column() 
   imageUrl: string; 
   @Column() 
   description: string;

   @Column() 
   latitude: string; 
   @Column() 
   longitude: string; 
   @Column({type:"enum",enum:localType,default:localType.PLACE}) 
   eventLocal: localType;

   @Column({type:"enum",enum:eventType,default:eventType.PRIVATE}) 
   eventType: eventType;

   @Column({nullable:true}) 
   publicKey: string;

   @Column({default:0}) 
   nGuests: number;

   @Column({default:0}) 
   nParticipants: number;

   @Column({default:0}) 
   nActiveParticipants: number;

   @Column({nullable:true}) 
    AgeRestrition: number;

    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    startDate: Date;

    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    endDate: Date;
    @OneToMany(() => UserEventAss, userEventAss => userEventAss.event)
    userEventAss: UserEventAss[];
    @OneToMany(() => UserCredentials, userCredentials => userCredentials.event)
    userCredentials: UserCredentials[];
    @OneToMany(() => EventStats, eventStats => eventStats.event)
    eventStats: EventStats[];

}   