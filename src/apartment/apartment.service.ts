import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentService {

    public index() {
        return 'Endpoint to get all apartments';
    }

    public show(apartmentId: number) {
        return 'Endpoint to get single apartment at ID: ' + apartmentId;
    }

    public store(body: string) {
        return body; // Request body
    }

    public update(apartmentId: number, body: string) {
        return 'Endpoint to update ' + apartmentId + ' with body: ' + body;
    }

    public delete(apartmentId: number) {
        return 'Endpoint to delete ' + apartmentId;
    }
}
