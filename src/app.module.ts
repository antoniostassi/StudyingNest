import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Apartment
import { ApartmentModule } from './apartment/apartment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartments } from './apartment/entity/apartment.entity';

@Module({
  imports: [ApartmentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [Apartments],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
