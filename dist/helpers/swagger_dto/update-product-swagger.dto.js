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
exports.UpdateProductSwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateProductSwaggerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'binary', required: false }),
    __metadata("design:type", Object)
], UpdateProductSwaggerDto.prototype, "file", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(50),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Default title to the products',
        name: 'title',
        required: false
    }),
    __metadata("design:type", String)
], UpdateProductSwaggerDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(400),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: `Default description to the productsLorem ipsum dolor sit amet, consectetur dolor sint, sed do exercitation nisi ex ut labore et sint magna minim. Ut enim ad minim veniam, quis nostrud exercitation.`,
        name: 'description',
        required: false
    }),
    __metadata("design:type", String)
], UpdateProductSwaggerDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Cairo',
        name: 'location',
        required: false
    }),
    __metadata("design:type", String)
], UpdateProductSwaggerDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiPropertyOptional)({
        type: [Date],
        name: 'notAvailableDates',
        example: ['2022-05-01', '2022-05-02'],
        default: '2022-05-01',
        description: 'An array of dates when the object is not available',
        required: false
    }),
    __metadata("design:type", Array)
], UpdateProductSwaggerDto.prototype, "notAvailableDAtes", void 0);
exports.UpdateProductSwaggerDto = UpdateProductSwaggerDto;
//# sourceMappingURL=update-product-swagger.dto.js.map