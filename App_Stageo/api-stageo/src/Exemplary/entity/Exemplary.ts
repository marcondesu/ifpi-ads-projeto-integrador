import { Column, ManyToOne, Entity, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Equipments } from "../../Equipments/entity/Equipments";
import { Reserve } from "../../Reserve/entity/Reserve";


@Entity()
export class Exemplary {
  @PrimaryGeneratedColumn()
    tombo: number;
    @ManyToOne(type => Equipments)
    @JoinColumn({name:"equipmentId"})
    equipments: Equipments;

    @ManyToOne(() => Reserve, { nullable: false })
    @JoinColumn({ name: "reserveId" })
    reserve: Reserve;

    @Column()
    status:boolean;

   
}
