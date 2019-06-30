import { Controller, Get, Post, Param } from '@nestjs/common';
import { SphinxService } from './sphinx.service';
import { SearchValueParams } from './sphinx.dto';

@Controller('product')
export class SphinxController {
    constructor(private readonly sphinxService: SphinxService) {}

    @Get('simple:searchValue')
    async searchSimple(@Param() params: SearchValueParams): Promise<any> {
        return this.sphinxService.search(params.searchValue, true);
    }

    @Get('full:searchValue')
    async searchFull(@Param() params: SearchValueParams): Promise<any> {
        return this.sphinxService.search(params.searchValue, false);
    }

    @Post('index')
    async index(): Promise<any> {
        return this.sphinxService.index();
    }
}
