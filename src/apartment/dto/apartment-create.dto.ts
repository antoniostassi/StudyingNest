export class CreateApartmentDto {
    title: string;
    rooms: number;
    beds: number;
    bathrooms: number;
    apartment_size: number;
    address: string;
    latitude: number;
    longitude: number;
    image: string;
    is_visible: boolean;
}