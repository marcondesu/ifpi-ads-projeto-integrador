import { Column, ManyToOne , Entity, PrimaryColumn, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import {Equipments} from "../../Equipments/entity/Equipments"

@Entity ()
export class Exemplary {
    @PrimaryGeneratedColumn()
    tombo:number;

    @ManyToOne(type => Equipments)
    @JoinColumn({name:"id"})
    equipments: Equipments;


    @Column({nullable:false})
    image:string;
   
}