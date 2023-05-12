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
exports.CreateItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateItemDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Ticket to hawaii',
        name: 'name',
    }),
    __metadata("design:type", String)
], CreateItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        default: 'Default description to the item',
        name: 'description',
    }),
    __metadata("design:type", String)
], CreateItemDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => +value.value),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        default: 1,
        description: 'The available price for one item',
        name: 'price',
    }),
    __metadata("design:type", Number)
], CreateItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)((value) => +value.value),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        default: 1,
        description: 'The available quantity that this item have',
        name: 'quantity',
    }),
    __metadata("design:type", Number)
], CreateItemDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)((value) => +value.value),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        default: 0,
        description: 'The minimum amount of this item that the user should choose to have the product, make it 0 to make this item optional',
        name: 'minQuantity',
    }),
    __metadata("design:type", Number)
], CreateItemDto.prototype, "minQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)((value) => +value.value),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        default: 1,
        description: 'The maximum amount of this item that the user can choose, the default is 1',
        name: 'maxQuantity',
    }),
    __metadata("design:type", Number)
], CreateItemDto.prototype, "maxQuantity", void 0);
exports.CreateItemDto = CreateItemDto;
//# sourceMappingURL=create-item.dto.js.map