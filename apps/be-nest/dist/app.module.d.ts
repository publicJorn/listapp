import { MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config';
export declare class AppModule {
    private configService;
    constructor(configService: ConfigService<Config>);
    configure(consumer: MiddlewareConsumer): void;
}
