import { APP_PIPE } from '@nestjs/core'
import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import config, { Config } from './config'

import { ListsModule } from './modules/lists/lists.module'
import { ItemsModule } from './modules/items/items.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { requestLogger } from './common/loggers/request-logger.middleware'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'listapp',
      autoLoadEntities: true,
      // Indicates if database should be re-created on every application launch.
      // Be careful with this option and don't use this in production
      // TODO: remove when done playing :)
      synchronize: true,
    }),
    ListsModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {
  constructor(private configService: ConfigService<Config>) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(requestLogger).forRoutes('*')
  }
}
