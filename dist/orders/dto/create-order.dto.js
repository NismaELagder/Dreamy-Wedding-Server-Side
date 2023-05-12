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
exports.CreateOrderDto = void 0;
const class_validator_1 = require("class-validator");
const enum_values_1 = require("../../helpers/enums/enum.values");
const class_transformer_1 = require("class-transformer");
const validate_order_product_dto_1 = require("./validate-order-product.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, default: enum_values_1.EnumStatues.PENDING, name: "status", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_values_1.EnumStatues),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: validate_order_product_dto_1.ValidatedOrderProduct, name: "product" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => validate_order_product_dto_1.ValidatedOrderProduct),
    __metadata("design:type", validate_order_product_dto_1.ValidatedOrderProduct)
], CreateOrderDto.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, name: "sellerId", required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "sellerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, name: "date", required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateOrderDto.prototype, "date", void 0);
exports.CreateOrderDto = CreateOrderDto;
//# sourceMappingURL=create-order.dto.js.map