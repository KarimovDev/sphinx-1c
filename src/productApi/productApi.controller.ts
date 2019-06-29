import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductApi } from './productApi.entity';
import { ProductApiService } from './productApi.service';

@Controller('product')
export class ProductApiController {
    constructor(private readonly productApiService: ProductApiService) {}

    @Get()
    async getAll(): Promise<ProductApi[]> {
        return this.productApiService.getAll();
    }

    @Post()
    async create(@Body() productApi: ProductApi): Promise<ProductApi> {
        return this.productApiService.create(productApi);
    }
}
