import { PrimaryColumn, Column, Entity , ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../../../User/entity/User";
import { Equipments } from "../../../Equipments/entity/Equipments";


@Entity()
export class Reserve {
    @PrimaryColumn({ type: "varchar" })
    id:string;

    @ManyToOne(type => User)
    @JoinColumn({ name: "id" })
    user: User;

    @OneToMany(type => Equipments, mappedBy => "reserve")
    @JoinColumn({ name: "id" })
    equipment: Equipments[];
    

    @Column()
    data:Date;
    
    @Column()
    data_devolucao:Date;


    @Column()
    situacao:boolean;

}