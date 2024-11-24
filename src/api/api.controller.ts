import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller('api')
export class ApiController {
  @Get('date') // Route GET /api/date
  getDate(): Date {
    const currentDate = new Date();
    return currentDate;
  }

  @Get('test/:id')
  getTest(@Param() params: any, @Res() res: Response) {
    res.status(HttpStatus.OK).json(['ID:' + params.id]);
  }

  @Get('query')
  getQuery(@Query('type') type: string) {
    console.log(type);
  }
}
