import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateApartmentDto {
    @IsString()
    title: string;

    @IsString()
    address: string;

    @IsString()
    image: string;

    @IsNumber()
    rooms: number;

    @IsNumber()
    beds: number;

    @IsNumber()
    bathrooms: number;

    @IsNumber()
    apartment_size: number;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

    @IsBoolean()
    is_visible: boolean;
}