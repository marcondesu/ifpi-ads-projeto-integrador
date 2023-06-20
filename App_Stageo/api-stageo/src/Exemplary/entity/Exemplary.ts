import { Column, ManyToOne , Entity, PrimaryColumn, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import {Equipments} from "../../Equipments/entity/Equipments"

@Entity ()
export class Exemplary {
    @PrimaryGeneratedColumn()
    tombo:number;

    @ManyToOne(type => Equipments)
    @JoinColumn({name:"equipmentId"})
    equipments: Equipments;

    @Column()
    status:boolean;

    @Column()
    image:string;
   
}