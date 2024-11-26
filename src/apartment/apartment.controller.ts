import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/apartment-create.dto';

@Controller('apartments')
export class ApartmentController {

    constructor(private apartmentService: ApartmentService) {}

    @Get()
    index() {
        return this.apartmentService.index();
    }

    @Get('/:apartmentId')
    show(@Param() param: { apartmentId: number }) {
        return this.apartmentService.show(param.apartmentId);
    }

    @Post()
    store(@Body() createApartmentDto: CreateApartmentDto) {
        return this.apartmentService.store(createApartmentDto);
    }

    @Patch('/:apartmentId')
    update(@Body() updateApartmentDto: CreateApartmentDto, @Param() param: { apartmentId: number }) {
        return this.apartmentService.update(param.apartmentId, updateApartmentDto);
    }

    @Delete('/:apartmentId')
    delete(@Param() param: { apartmentId: number }) {
        return this.apartmentService.delete(param.apartmentId);
    }

    // @Req | Il body è ciò che manda il frontend. 
    // @Param | Le query ( detti Params ) contengono quei dati passati nell'URL: http://localhost:3000/apartments?user=palo
    // L'header viene usato per inviare chiavi, token etc. (XSRF-TOKEN su LARAVEL)

}
