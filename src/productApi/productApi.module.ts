import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductApiService } from './productApi.service';
import { ProductApiController } from './productApi.controller';
import { ProductApi } from './productApi.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductApi])],
    providers: [ProductApiService],
    controllers: [ProductApiController],
})
export class ProductApiModule {}
