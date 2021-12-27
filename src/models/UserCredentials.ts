import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"; 
import { Event } from "./Event";
import { User } from "./User";
import 'reflect-metadata'

@Entity() 
export  class UserCredentials {   

    @PrimaryGeneratedColumn() 
    id: number; 
    
    @OneToOne(()=> Event)
    @JoinColumn()
    eventId: number; 


   @OneToOne(()=> User)
   @JoinColumn()
   userId: number; 
   
   @Column() 
    keySecret: string; 
   
    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    date: Date;

}