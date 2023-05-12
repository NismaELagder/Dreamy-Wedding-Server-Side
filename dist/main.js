"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require('cors');
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use('/uploads', express.static((0, path_1.join)(__dirname, '..', 'uploads')));
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('ITI graduation project')
        .setDescription('The is documentation for our Dreamy Weddings project')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map