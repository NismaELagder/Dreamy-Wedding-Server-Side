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
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const enum_values_1 = require("../../helpers/enums/enum.values");
let Order = class Order {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Order.prototype, "ownerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Order.prototype, "sellerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        default: enum_values_1.EnumStatues.PENDING,
        type: mongoose.Schema.Types.String,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 1, type: mongoose.Schema.Types.Map }),
    __metadata("design:type", Object)
], Order.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.Number }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.Date, required: true }),
    __metadata("design:type", Date)
], Order.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now, type: mongoose.Schema.Types.Date }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map