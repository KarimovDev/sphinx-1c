import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductApiModule } from './productApi/productApi.module';
import { SphinxModule } from './sphinx/sphinx.module';
import config = require('config');
const configMySql = config.get('configMySql');

@Module({
    imports: [
        ProductApiModule,
        SphinxModule,
        TypeOrmModule.forRoot({
            ...configMySql,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
