import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm"; 
import { Event } from "./Event";
import { User } from "./User";
import 'reflect-metadata'

@Entity() 
export  class UserCredentials {   

    @PrimaryGeneratedColumn() 
    id: number; 
    
    @ManyToOne(() => Event, event => event.userCredentials)@JoinColumn()
    event: Event; 


    @ManyToOne(() => User, user => user.userCredentials)@JoinColumn()
   user: User; 
   
   @Column() 
    keySecret: string; 
   
    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    date: Date;

}