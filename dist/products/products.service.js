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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("./repositories/product.repository");
const enum_values_1 = require("../helpers/enums/enum.values");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(auth, createProductDto) {
        createProductDto.ownerId = auth.userId;
        try {
            return await this.productRepository.create(createProductDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error while trying to create new product');
        }
    }
    async findAll() {
        try {
            return await this.productRepository.findAll();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error while trying to find all products');
        }
    }
    async findMyProducts(auth) {
        try {
            return await this.productRepository.findAll({ ownerId: auth.userId });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error while trying to find all products');
        }
    }
    async findOne(id) {
        try {
            return await this.productRepository.findOneById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('This product is not exist');
        }
    }
    async update(auth, id, updateProductDto) {
        await this.checkIfCanAccessProduct(auth, id);
        try {
            return await this.productRepository.updateOne({ _id: id }, updateProductDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error while trying to update this product');
        }
    }
    async remove(auth, id) {
        await this.checkIfCanAccessProduct(auth, id);
        try {
            return await this.productRepository.deleteOne({ _id: id });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error while trying to remove this product');
        }
    }
    async checkIfCanAccessProduct(auth, id) {
        const product = await this.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException();
        }
        if (auth.role != enum_values_1.UserRole.ADMIN && (product === null || product === void 0 ? void 0 : product.ownerId) !== auth.userId) {
            throw new common_1.ForbiddenException('You are not allowed to access this product');
        }
        else {
            return product;
        }
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map