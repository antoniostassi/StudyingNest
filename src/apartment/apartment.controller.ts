import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApartmentService } from './apartment.service';

@Controller('apartments')
export class ApartmentController {

    constructor(private apartmentService: ApartmentService) {}

    @Get()
    index() {
        return this.apartmentService.index();
    }

    @Get('/:apartmentId')
    show(@Param() params: { apartmentId: number }) {
        return this.apartmentService.show(params.apartmentId);
    }

    @Post()
    store(@Body() body: string) {
        return this.apartmentService.store(body);
    }

    @Patch('/:apartmentId')
    update(@Body() body: string, @Param() params: { apartmentId: number }) {
        return this.apartmentService.update(params.apartmentId, body);
    }

    @Delete('/:apartmentId')
    delete(@Param() params: { apartmentId: number }) {
        return this.apartmentService.delete(params.apartmentId);
    }

    // @Req | Il body è ciò che manda il frontend. 
    // @Param | Le query ( detti Params ) contengono quei dati passati nell'URL: http://localhost:3000/apartments?user=palo
    // L'header viene usato per inviare chiavi, token etc. (XSRF-TOKEN su LARAVEL)

}
