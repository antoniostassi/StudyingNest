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

    public show(apartmentId: number): Promise<Apartment> {
        return this.apartmentRepository.findOne({ where: { id: apartmentId } });
    }

    public store(createApartmentDto: CreateApartmentDto) {
        this.apartmentRepository.save(createApartmentDto); // Save the apartment
        return { message: 'success', status: 'ok' }
    }

    public update(apartmentId: number, updateApartmentDto: CreateApartmentDto) {
        return this.apartmentRepository.update(apartmentId, updateApartmentDto);
    }

    public delete(apartmentId: number) {
        return this.apartmentRepository.delete(apartmentId);
    }
}
