import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Equipments {
    @PrimaryColumn({ type: 'varchar' })
    id:string;
    
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

