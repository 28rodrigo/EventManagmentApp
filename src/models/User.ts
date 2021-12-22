import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"; 
import 'reflect-metadata'

@Entity() 
export  class User {   
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column({unique:true}) 
   username: string; 
   
   @Column() 
   age: number; 

   @Column() 
   imageUrl: string; 

   @Column({nullable:true}) 
   organization: string; 

   @Column({nullable:true}) 
   job: string; 
}