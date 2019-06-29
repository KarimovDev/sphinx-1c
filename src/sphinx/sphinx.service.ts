import { Injectable, OnModuleInit } from '@nestjs/common';
import { createConnection } from 'mysql';

const configSphinx = {
    host: '10.10.0.137',
    port: '9306',
    user: '',
    password: '',
    database: '',
};
@Injectable()
export class SphinxService implements OnModuleInit {
    sphinxConn: any;

    async onModuleInit() {
        this.sphinxConn = createConnection(configSphinx);
    }
}
