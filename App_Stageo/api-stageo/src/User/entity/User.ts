import { PrimaryColumn, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId:number;

    @Column()
    tipo_user:string;

    @Column()
    nome:string;

    @Column()
    email:string;

}