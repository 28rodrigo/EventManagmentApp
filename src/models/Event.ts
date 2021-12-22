import {Entity, PrimaryGeneratedColumn, Column, Double, ColumnTypeUndefinedError,} from "typeorm"; 
import 'reflect-metadata'
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
   imageUrl: string; 
   @Column() 
   descricao: string;

   @Column() 
   latitude: number; 
   @Column() 
   longitude: number; 
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

}   