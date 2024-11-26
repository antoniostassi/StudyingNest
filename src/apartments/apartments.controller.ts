import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';

@Controller('apartments')
export class ApartmentsController {

    @Get()
    index() {
        return 'Endpoint to get all apartments';
    }

    /* @Get('/:apartmentId')
    show(@Param() apartmentId:number) {
        return {message:'Ciao!', apartmentId};
    } */

    @Get('/:apartmentId')
    show(@Param() params: { apartmentId: number }) {
        return 'Endpoint to get single apartment at ID: ' + params.apartmentId; // oppure return params
    }

    @Post()
    store(@Req() req: Request) {
        console.log(req.headers);
        return req.body; // The body of the request
    }

    @Patch('/:apartmentId')
    update(@Req() req: Request, @Param() params: { apartmentId: number }) {
        return 'Endpoint to update ' + params.apartmentId + ' with body:' + req.body;
    }

    @Delete('/:apartmentId')
    delete(@Param() params: { apartmentId: number }) {
        return 'Endpoint to delete ' + params.apartmentId;
    }

    // @Req | Il body è ciò che manda il frontend. 
    // @Param | Le query ( detti Params ) contengono quei dati passati nell'URL: http://localhost:3000/apartments?user=palo
    // L'header viene usato per inviare chiavi, token etc. (XSRF-TOKEN su LARAVEL)

}
