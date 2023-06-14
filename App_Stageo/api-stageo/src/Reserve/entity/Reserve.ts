import { PrimaryGeneratedColumn,CreateDateColumn,PrimaryColumn, Column, Entity , ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../../User/entity/User";
import { Equipments } from "../../Equipments/entity/Equipments";


@Entity()
export class Reserve {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => User)
    @JoinColumn({ name: "userId" })
    user: User;

    @OneToMany(type => Equipments, mappedBy => "reserve")
    @JoinColumn({ name: "equipmentId" })
    equipment: Equipments[];


    @CreateDateColumn()
    data:Date;
    
    @Column()
    data_devolucao:Date;
}