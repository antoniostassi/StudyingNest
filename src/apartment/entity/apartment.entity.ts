import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Apartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    address: string;

    @Column()
    image: string;

    @Column()
    rooms: number;

    @Column()
    beds: number;

    @Column()
    bathrooms: number;

    @Column()
    apartment_size: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    is_visible: boolean;
}