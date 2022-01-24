import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 
import 'reflect-metadata'
import { UserEventAss } from "./UserEventAss";
import { UserCredentials } from "./UserCredentials";

@Entity() 
export  class User {   
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column({unique:true}) 
   username: string; 

   @Column() 
   name: string; 
   @Column() 
   password: string; 
   @Column() 
   email: string; 
   @Column() 
   age: number; 

   @Column() 
   imageUrl: string; 

   @Column({nullable:true}) 
   organization: string; 
   @OneToMany(() => UserEventAss, userEventAss => userEventAss.user)
    userEventAss: UserEventAss[];
    @OneToMany(() => UserCredentials, userCredentials => userCredentials.user)
    userCredentials: UserCredentials[];
   @Column({nullable:true}) 
   job: string; 
}