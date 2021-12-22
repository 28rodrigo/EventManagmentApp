import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double} from "typeorm"; 
import { Event } from "./Event";
import 'reflect-metadata'

@Entity() 
export  class EventStats {   
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column({primary:true,})
   @OneToOne(()=> Event)
   @JoinColumn()
   eventId: number; 
   
   @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    date: Date;
   
   @Column({default:0}) 
   nGuests: number;

   @Column({default:0}) 
   nParticipants: number;

   @Column({default:0}) 
   nActiveParticipants: number;

   @Column({default:0})
   percentage:number
   
}