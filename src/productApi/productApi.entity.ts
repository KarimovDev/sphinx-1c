import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('productApiNest')
export class ProductApi {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    id1c: string;

    @IsString()
    @IsNotEmpty()
    @Column({ length: 500 })
    title: string;

    @IsString()
    @IsNotEmpty()
    @Column({ length: 500 })
    parent: string;
}
