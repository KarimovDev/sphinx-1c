import { Injectable, OnModuleInit } from '@nestjs/common';
import { createConnection } from 'mysql';
import { ProductApi } from 'src/productApi/productApi.entity';
import { Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import config = require('config');
import shell = require('shelljs');
const configSphinx = config.get('configSphinx');

@Injectable()
export class SphinxService implements OnModuleInit {
    constructor(
        @InjectRepository(ProductApi)
        private readonly productRepository: Repository<ProductApi>,
    ) {}

    sphinxConn: any;
    sphinxQuery(queryString: string): Promise<any> {
        return new Promise((res, rej) => {
            this.sphinxConn.query(queryString, (error, result) => {
                if (error) {
                    rej(error);
                }
                res(result);
            });
        });
    }

    async onModuleInit() {
        this.sphinxConn = createConnection(configSphinx);
    }

    async index(): Promise<any> {
        return await new Promise((res, rej) => {
            try {
                shell.exec('sudo indexer --all --rotate', { silent: true });
                res({ result: 'ok' });
            } catch (error) {
                rej({ result: 'error', error });
            }
        });
    }

    async search(value: string, isSimple: boolean): Promise<ProductApi[]> {
        const table: string = isSimple
            ? config.get('sphinxSimpleTable')
            : config.get('sphinxFullTable');

        return await this.sphinxQuery(`SET NAMES 'UTF-8'`)
            .then(res => {
                return this.sphinxQuery(
                    `select * from ${table} where match('${value}') limit 0,100 ;`,
                );
            })
            .then(res => {
                let result: Promise<ProductApi[]> = Promise.resolve([]);
                const ids: string[] = [];
                res.forEach(el => ids.push(el.id));
                if (ids.length !== 0) {
                    result = this.productRepository.find({
                        id: In(ids),
                    });
                }
                return result;
            });
    }
}
