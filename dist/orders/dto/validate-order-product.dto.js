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
exports.ValidatedOrderProduct = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const validated_order_item_dto_1 = require("./validated-order-item.dto");
const swagger_1 = require("@nestjs/swagger");
class ValidatedOrderProduct {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '643fcb037a8263a9e0976225',
        name: 'id',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidatedOrderProduct.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, default: 'Product name', name: 'name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidatedOrderProduct.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'https://iti-kareem-test.s3.amazonaws.com/product/thumbImage/NaN/1-45959a63-d20d-4d25-b2df-68e1c8debccf.jpg',
        name: 'thumbImage',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidatedOrderProduct.prototype, "thumbImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [validated_order_item_dto_1.ValidatedOrderItem],
        name: 'items',
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => validated_order_item_dto_1.ValidatedOrderItem),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], ValidatedOrderProduct.prototype, "items", void 0);
exports.ValidatedOrderProduct = ValidatedOrderProduct;
//# sourceMappingURL=validate-order-product.dto.js.map