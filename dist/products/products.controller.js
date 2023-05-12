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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const jwt_auth_guard_1 = require("../users/auth/guards/jwt-auth.guard");
const role_guard_1 = require("../users/auth/role/role.guard");
const roles_decorator_1 = require("../users/auth/role/roles.decorator");
const enum_values_1 = require("../helpers/enums/enum.values");
const auth_decorator_1 = require("../helpers/decorators/auth.decorator");
const custom_upload_file_multer_1 = require("../helpers/files/custom_upload_file.multer");
const uploaded_decorator_1 = require("../helpers/decorators/uploaded.decorator");
const swagger_1 = require("@nestjs/swagger");
const create_product_swagger_dto_1 = require("../helpers/swagger_dto/create-product-swagger.dto");
const update_product_swagger_dto_1 = require("../helpers/swagger_dto/update-product-swagger.dto");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(auth, createProductDto, filePath) {
        if (!filePath) {
            throw new exceptions_1.NotAcceptableException('Thumb image is required, please upload the file');
        }
        createProductDto.thumbImage = filePath;
        return this.productsService.create(auth, createProductDto);
    }
    findAll() {
        return this.productsService.findAll();
    }
    findMyProducts(auth) {
        return this.productsService.findMyProducts(auth);
    }
    findOne(productId) {
        return this.productsService.findOne(productId);
    }
    update(auth, productId, updateProductDto, filePath) {
        if (filePath) {
            updateProductDto.thumbImage = filePath;
        }
        return this.productsService.update(auth, productId, updateProductDto);
    }
    remove(auth, productId) {
        return this.productsService.remove(auth, productId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ deprecated: true, description: "Test this endpoint with postman" }),
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN, enum_values_1.UserRole.SELLER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.UseInterceptors)((0, custom_upload_file_multer_1.default)({ type: enum_values_1.EnumFileType.IMAGE, path: 'product/thumbImage' })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Create new product',
        type: create_product_swagger_dto_1.CreateProductSwaggerDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, uploaded_decorator_1.Uploaded)({
        option: enum_values_1.EnumUploadedOptions.FULL_PATH,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("myProducts"),
    __param(0, (0, auth_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findMyProducts", null);
__decorate([
    (0, common_1.Get)(':productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ deprecated: true, description: "Test this endpoint with postman" }),
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN, enum_values_1.UserRole.SELLER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Update product',
        type: update_product_swagger_dto_1.UpdateProductSwaggerDto,
    }),
    (0, common_1.UseInterceptors)((0, custom_upload_file_multer_1.default)({ type: enum_values_1.EnumFileType.IMAGE, path: 'product/thumbImage' })),
    (0, common_1.Patch)(':productId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, uploaded_decorator_1.Uploaded)({
        option: enum_values_1.EnumUploadedOptions.FULL_PATH,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_product_dto_1.UpdateProductDto, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN, enum_values_1.UserRole.SELLER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Delete)(':productId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
ProductsController = __decorate([
    (0, swagger_1.ApiTags)("products"),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map