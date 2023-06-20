import { Column, ManyToOne, Entity, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Equipments } from "../../Equipments/entity/Equipments";

@Entity()
export class Exemplary {
  @PrimaryGeneratedColumn()
  tombo: number;

  @ManyToOne(() => Equipments, { nullable: false })
  @JoinColumn({ name: "equipmentId" })
  equipments: Equipments;

  @Column({ nullable: false })
  status: boolean;
}
