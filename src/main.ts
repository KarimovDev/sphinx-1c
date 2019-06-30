import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import bodyParser = require('body-parser');
import config = require('config');
const queryMaxSize = config.get('queryMaxSize');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(bodyParser.json({ limit: `${queryMaxSize}mb` }));
    app.use(
        bodyParser.urlencoded({ limit: `${queryMaxSize}mb`, extended: true }),
    );
    await app.listen(3000);
}
bootstrap();
