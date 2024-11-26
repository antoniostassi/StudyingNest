import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/apartment-create.dto';

@Injectable()
export class ApartmentService {

    public index() {
        return 'Endpoint to get all apartments';
    }

    public show(apartmentId: number) {
        return 'Endpoint to get single apartment at ID: ' + apartmentId;
    }

    public store(createApartmentDto: CreateApartmentDto) {
        return createApartmentDto; // Request body
    }

    public update(apartmentId: number, updateApartmentDto: CreateApartmentDto) {
        return 'Endpoint to update ' + apartmentId + ' with body: ' + updateApartmentDto;
    }

    public delete(apartmentId: number) {
        return 'Endpoint to delete ' + apartmentId;
    }
}
