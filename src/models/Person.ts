import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"; 

@Entity() 
export  class Person {   
    
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   Name: string; 
   
   @Column() 
   age: number; 
   
}