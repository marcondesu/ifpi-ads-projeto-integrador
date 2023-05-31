import { Column, ManyToOne , Entity, PrimaryColumn, JoinColumn } from "typeorm";
import {Equipments} from "../../Equipments/entity/Equipments"

@Entity ()
export class Exemplary {
    @PrimaryColumn({type:'varchar'})
    tombo:string;

    @ManyToOne(type => Equipments)
    @JoinColumn({name:"id"})
    equipments: Equipments;
    

    @Column()
    status:string;


    @Column({nullable:false})
    image:string;
   
}