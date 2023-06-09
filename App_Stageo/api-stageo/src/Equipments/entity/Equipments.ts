import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Equipments {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    nome:string;
    
    @Column()
    description:string;

    @Column()
    status:boolean;
    
    @CreateDateColumn()
    create_at:Date;
    
    @UpdateDateColumn()
    update_at:Date;
    
    
}  

