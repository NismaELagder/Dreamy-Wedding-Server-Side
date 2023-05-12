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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../products/repositories/product.repository");
let RatesService = class RatesService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(auth, productId, createRateDto) {
        var _a;
        const product = await this.productRepository.findOneById(productId);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        const user = (_a = product.rates) === null || _a === void 0 ? void 0 : _a.users.find(e => e.id == auth.userId);
        const rates = product.rates;
        if (!rates) {
            return await this.productRepository.updateOne({ _id: productId }, {
                rates: {
                    numberOfRates: 1,
                    totalRates: createRateDto.rate,
                    users: [{ id: auth.userId, rate: createRateDto.rate }],
                },
            });
        }
        if (user) {
            rates.totalRates -= user.rate;
            rates.totalRates += createRateDto.rate;
            rates.users = rates.users.map(e => e.id == auth.userId ? { id: auth.userId, rate: createRateDto.rate } : e);
        }
        else {
            rates.numberOfRates++;
            rates.totalRates += createRateDto.rate;
            rates.users.push({ id: auth.userId, rate: createRateDto.rate });
        }
        return await this.productRepository.updateOne({ _id: productId }, {
            rates: rates,
        });
    }
};
RatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], RatesService);
exports.RatesService = RatesService;
//# sourceMappingURL=rates.service.js.map