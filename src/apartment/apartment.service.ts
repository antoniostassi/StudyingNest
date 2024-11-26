import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/apartment-create.dto';
import { Repository } from 'typeorm';
import { Apartment } from './entity/apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApartmentService {

    constructor(
        @InjectRepository(Apartment)
        private apartmentRepository: Repository<Apartment>
    ) { }

    public index(): Promise<Apartment[]> {
        return this.apartmentRepository.find();
    }

    public show(apartmentId: number) {
        return 'Endpoint to get single Apartment ID: ' + apartmentId;
    }

    public store(createApartmentDto: CreateApartmentDto) {
        return createApartmentDto; // Request body
    }

    public update(apartmentId: number, updateApartmentDto: CreateApartmentDto) {
        return 'Endpoint to update Apartment ID:' + apartmentId + ' with body: ' + updateApartmentDto;
    }

    public delete(apartmentId: number) {
        return 'Endpoint to delete Apartment ID: ' + apartmentId;
    }
}
