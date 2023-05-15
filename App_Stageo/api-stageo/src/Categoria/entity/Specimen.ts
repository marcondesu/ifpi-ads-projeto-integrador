import { Column, ManyToOne , Entity, PrimaryColumn } from "typeorm";
import {Equipments} from "../../Equipments/entity/Equipments"

@Entity ()
export class Specimen {
    @PrimaryColumn({type:'varchar'})
    tombo:string;

    @ManyToOne(type => Equipments)
    equipments: Equipments;
    

    @Column()
    status:string;

}