import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { Config } from './config'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false })

  const configService = app.get<ConfigService<Config>>(ConfigService)
  const port = configService.get('port', { infer: true })! // port has a default in config, so non-null assertion

  await app.listen(port)
  console.log(`\nApp running on port: ${port}\n`)
}
bootstrap()
