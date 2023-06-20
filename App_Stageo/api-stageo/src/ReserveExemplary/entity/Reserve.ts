import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "../../User/entity/User";
import { Exemplary } from "../../Exemplary/entity/Exemplary";
import { Reserve } from "../../Reserve/entity/Reserve";

@Entity()
export class ReserveExemplary {
  @ManyToOne(() => Reserve, { nullable: false })
  @JoinColumn({ name: "reserveId" })
  reserve: Reserve;

  @OneToMany(() => Exemplary, exemplary => exemplary.reserve, { nullable: false })
  exemplaries: Exemplary[];
}
