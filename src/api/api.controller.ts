import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('date') // Route GET /api/date
  getDate(): Date {
    const currentDate = new Date();
    console.log(currentDate);
    return currentDate;
  }

  @Get('test/:id')
  getTest(@Param() params: any): string {
    return `Il parametro è ${params.id}`;
  }

  @Get('query')
  getQuery(@Query('type') type: string) {
    console.log(type);
  }
}
