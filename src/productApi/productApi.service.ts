import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductApi } from './productApi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductApiService {
    constructor(
        @InjectRepository(ProductApi)
        private readonly productRepository: Repository<ProductApi>,
    ) {}

    async getAll(): Promise<ProductApi[]> {
        return await this.productRepository.find({
            take: 100,
        });
    }
}
