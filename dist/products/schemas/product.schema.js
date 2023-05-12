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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const comment_schema_1 = require("../../comments/schemas/comment.schema");
const item_schema_1 = require("../../items/schemas/item.schema");
const rate_schema_1 = require("../../rates/schemas/rate.schema");
let Product = class Product {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Product.prototype, "thumbImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Product.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: [comment_schema_1.CommentSchema] }),
    __metadata("design:type", Array)
], Product.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [item_schema_1.ItemSchema],
        validate: {
            validator: (value) => value.length >= 1,
            message: 'The items should contains at least 1 item',
        },
    }),
    __metadata("design:type", Array)
], Product.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: rate_schema_1.RateSchema }),
    __metadata("design:type", rate_schema_1.Rate)
], Product.prototype, "rates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: mongoose.Schema.Types.Array }),
    __metadata("design:type", Array)
], Product.prototype, "notAvailableDAtes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Product.prototype, "ownerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now, type: mongoose.Schema.Types.Date }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)()
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map