import { Controller, Get } from '@nestjs/common';
import { SphinxService } from './sphinx.service';

@Controller('product')
export class SphinxController {
    constructor(private readonly sphinxService: SphinxService) {}
}
