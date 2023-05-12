"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../helpers/decorators/auth.decorator");
const rates_service_1 = require("./rates.service");
const jwt_auth_guard_1 = require("../users/auth/guards/jwt-auth.guard");
const create_rate_dto_1 = require("./dto/create-rate.dto");
const swagger_1 = require("@nestjs/swagger");
let RatesController = class RatesController {
    constructor(rateService) {
        this.rateService = rateService;
    }
    create(auth, productId, createRateDto) {
        return this.rateService.create(auth, productId, createRateDto);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: 'Add rate to product',
        type: create_rate_dto_1.CreateRateDto,
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':productId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_rate_dto_1.CreateRateDto]),
    __metadata("design:returntype", void 0)
], RatesController.prototype, "create", null);
RatesController = __decorate([
    (0, swagger_1.ApiTags)("rates"),
    (0, common_1.Controller)('rates'),
    __metadata("design:paramtypes", [rates_service_1.RatesService])
], RatesController);
exports.RatesController = RatesController;
//# sourceMappingURL=rates.controller.js.map