"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port', { infer: true });
    await app.listen(port);
    console.log(`\nApp running on port: ${port}\n`);
}
bootstrap();
//# sourceMappingURL=main.js.map