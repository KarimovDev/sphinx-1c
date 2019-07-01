import { Controller, Post, Body } from '@nestjs/common';
import { SphinxService } from './sphinx.service';
import { SearchValueParams } from './sphinx.dto';

@Controller('sphinx')
export class SphinxController {
    constructor(private readonly sphinxService: SphinxService) {}

    @Post('simple')
    async searchSimple(@Body() body: SearchValueParams): Promise<any> {
        return this.sphinxService.search(body.searchValue, true);
    }

    @Post('full')
    async searchFull(@Body() body: SearchValueParams): Promise<any> {
        return this.sphinxService.search(body.searchValue, false);
    }

    @Post('index')
    async index(): Promise<any> {
        return this.sphinxService.index();
    }
}
