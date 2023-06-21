import { PrimaryGeneratedColumn,CreateDateColumn,PrimaryColumn, Column, Entity , ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../../User/entity/User";
import { Exemplary } from "../../Exemplary/entity/Exemplary";


@Entity()
export class Reserve {
    @PrimaryGeneratedColumn()
    reserveId:number;

    @ManyToOne(type => User, {nullable:false})
    @JoinColumn({ name: "userId" })
    user: User;

    @CreateDateColumn()
    data:Date;
    
    @Column({nullable:false})
    data_devolucao:Date;
}