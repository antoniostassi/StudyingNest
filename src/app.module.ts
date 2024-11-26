import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Apartment
import { ApartmentController } from './apartment/apartment.controller';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
  imports: [ApartmentModule],
  controllers: [AppController, ApartmentController],
  providers: [AppService],
})
export class AppModule {}
