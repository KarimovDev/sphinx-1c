import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productApiNest')
export class ProductApi {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id1c: string;

    @Column({ length: 500 })
    title: string;

    @Column({ length: 500 })
    parent: string;
}
