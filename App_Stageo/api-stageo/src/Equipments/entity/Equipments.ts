import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, JoinColumn } from "typeorm";

@Entity()
export class Equipments {
    @PrimaryColumn({ type: 'varchar' })
    id:string;
    
    @Column()
    nome:string;
    
    @Column()
    description:string;
    
    @Column({nullable:false})
    image:string;
    
    @CreateDateColumn()
    create_at:Date;
    
    @UpdateDateColumn()
    update_at:Date;
    
    
}  

