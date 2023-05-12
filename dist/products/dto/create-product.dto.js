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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_item_dto_1 = require("../../items/dto/create-item.dto");
class CreateProductDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(50),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Default title to the products',
        name: 'title',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(400),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: `Default description to the productsLorem ipsum dolor sit amet, consectetur dolor sint, sed do exercitation nisi ex ut labore et sint magna minim. Ut enim ad minim veniam, quis nostrud exercitation.`,
        name: 'description',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Cairo',
        name: 'location',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_item_dto_1.CreateItemDto),
    (0, swagger_1.ApiProperty)({
        type: [create_item_dto_1.CreateItemDto],
        name: 'items',
        description: 'Each items the the products offers, at least should have one item',
        example: [
            {
                description: 'Default description to the item',
                quantity: 1,
                minQuantity: 0,
                maxQuantity: 1,
            },
            {
                name: 'Ticket to paris',
                description: 'Another ticket to an amazing destination',
                quantity: 2,
                minQuantity: 1,
                maxQuantity: 5,
            },
        ],
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiPropertyOptional)({
        type: [Date],
        name: 'notAvailableDates',
        example: ['2022-05-01', '2022-05-02'],
        default: '2022-05-01',
        description: 'An array of dates when the object is not available',
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "notAvailableDAtes", void 0);
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map