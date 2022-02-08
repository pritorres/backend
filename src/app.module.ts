import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'priscilatorres',
      password: 'panconqueso1',
      database: 'backend-practic',
      entities: ['entities/*.ts'],
      synchronize: true, // actualiza la db con las entidades del proyecto en cada start-up
      dropSchema: true, // elimina el schema en cada start-up
      autoLoadEntities: true, // carga las entidades en el startup
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
