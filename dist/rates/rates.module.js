"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesModule = void 0;
const common_1 = require("@nestjs/common");
const rates_service_1 = require("./rates.service");
const product_schema_1 = require("../products/schemas/product.schema");
const mongoose_1 = require("@nestjs/mongoose");
const product_repository_1 = require("../products/repositories/product.repository");
const rates_controller_1 = require("./rates.controller");
let RatesModule = class RatesModule {
};
RatesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema }])],
        providers: [rates_service_1.RatesService, product_repository_1.ProductRepository],
        controllers: [rates_controller_1.RatesController]
    })
], RatesModule);
exports.RatesModule = RatesModule;
//# sourceMappingURL=rates.module.js.map