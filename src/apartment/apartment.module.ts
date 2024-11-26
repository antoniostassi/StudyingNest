import { Module } from '@nestjs/common';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';
import { Apartment } from './entity/apartment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Apartment])],
    controllers:[ApartmentController],
    providers:[ApartmentService],
})

export class ApartmentModule {}
