import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Equipments {
    @PrimaryColumn({ type: 'varchar' })
    id:string;
    
    @Column()
    nome:string;
    
    @Column()
    description:string;
    
    
    @CreateDateColumn()
    create_at:Date;
    
    @UpdateDateColumn()
    update_at:Date;
    
    
}  

