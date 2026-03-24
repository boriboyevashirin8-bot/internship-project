import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity('fields')
export class Fields {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    name: string

    @Column({ type: "jsonb", nullable: true })
    boundary: any

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt:Date
}