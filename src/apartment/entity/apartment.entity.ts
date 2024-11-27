import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // It represents the Migration 
export class Apartments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    address: string;

    @Column({ default: '' })
    image: string;

    @Column({ default: 1 })
    rooms: number;

    @Column({ default: 1 })
    beds: number;

    @Column({ default: 3 })
    bathrooms: number;

    @Column({ default: 3 })
    apartment_size: number;

    @Column('decimal', { precision: 11, scale: 5, default: 3.3 })
    latitude: number;

    @Column('decimal', { precision:11, scale:5, default: 3.5 })
    longitude: number;

    @Column({ default: true })
    is_visible: string;
}