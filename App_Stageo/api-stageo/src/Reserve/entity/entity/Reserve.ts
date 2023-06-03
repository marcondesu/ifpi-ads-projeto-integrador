import { PrimaryColumn, Column, Entity , ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../../../User/entity/User";
import { Exemplary } from "../../../Exemplary/entity/Exemplary";


@Entity()
export class Reserve {
    @PrimaryColumn({ type: "varchar" })
    id:string;

    @ManyToOne(type => User)
    @JoinColumn({ name: "id" })
    user: User;

    @OneToMany(type => Exemplary, mappedBy => "reserve")
    @JoinColumn({ name: "tombo" })
    exemplary: Exemplary[];
    

    @Column()
    data:Date;
    
    @Column()
    data_devolucao:Date;


    @Column()
    situacao:boolean;

}