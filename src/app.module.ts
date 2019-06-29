import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductApiModule } from './productApi/productApi.module';
import { SphinxModule } from './sphinx/sphinx.module';

@Module({
    imports: [
        ProductApiModule,
        SphinxModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '10.10.0.137',
            port: 3306,
            username: 'root',
            password: '123qweASD',
            database: 'burgaz',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            charset: 'utf8mb4',
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
