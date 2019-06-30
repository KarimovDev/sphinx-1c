import { Module } from '@nestjs/common';
import { SphinxService } from './sphinx.service';
import { SphinxController } from './sphinx.controller';
import { ProductApi } from 'src/productApi/productApi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ProductApi])],
    providers: [SphinxService],
    controllers: [SphinxController],
})
export class SphinxModule {}
