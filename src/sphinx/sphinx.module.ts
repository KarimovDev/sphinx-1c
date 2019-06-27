import { Module } from '@nestjs/common';
import { SphinxService } from './sphinx.service';
import { SphinxController } from './sphinx.controller';

@Module({
    imports: [],
    providers: [SphinxService],
    controllers: [SphinxController],
})
export class SphinxModule {}
