import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
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
    show(@Param('apartmentId', ParseIntPipe) apartmentId: number) {
        return this.apartmentService.show(apartmentId);
    }

    @Post()
    store(@Body() createApartmentDto: CreateApartmentDto) {
        return this.apartmentService.store(createApartmentDto);
    }

    @Patch('/:apartmentId')
    update(@Body() updateApartmentDto: CreateApartmentDto, @Param('apartmentId', ParseIntPipe) apartmentId: number) {
        return this.apartmentService.update(apartmentId, updateApartmentDto);
    }

    @Delete('/:apartmentId')
    delete(@Param('apartmentId', ParseIntPipe) apartmentId: number) {
        return this.apartmentService.delete(apartmentId);
    }

    // @Req | La richiesta è ciò che manda il frontend. 
    // @Body | Il body della richiesta.
    // @Param | Le query ( detti Params ) contengono quei dati passati nell'URL: http://localhost:3000/apartments?user=palo
    // L'header viene usato per inviare chiavi, token etc. (XSRF-TOKEN su LARAVEL)

}
