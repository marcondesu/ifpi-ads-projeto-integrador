import { PrimaryColumn, Column, Entity } from "typeorm";


@Entity()
export class User {
    @PrimaryColumn({ type: "varchar"})
    id:string;

    @Column()
    tipo_user:string;

    @Column()
    nome:string;

    @Column()
    email:string;

}