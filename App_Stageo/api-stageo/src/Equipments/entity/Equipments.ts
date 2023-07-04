import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Equipments {
    @PrimaryGeneratedColumn()
    equipmentId:number;
    
    @Column({nullable:false})
    nome:string;
    
    @Column()
    description:string;

 
}  

