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
exports.RateSchema = exports.Rate = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Rate = class Rate {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0, type: mongoose.Schema.Types.Number }),
    __metadata("design:type", Number)
], Rate.prototype, "numberOfRates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0, type: mongoose.Schema.Types.Number }),
    __metadata("design:type", Number)
], Rate.prototype, "totalRates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: [], type: mongoose.Schema.Types.Array }),
    __metadata("design:type", Array)
], Rate.prototype, "users", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now, type: mongoose.Schema.Types.Date }),
    __metadata("design:type", Date)
], Rate.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now, type: mongoose.Schema.Types.Date }),
    __metadata("design:type", Date)
], Rate.prototype, "updatedAt", void 0);
Rate = __decorate([
    (0, mongoose_1.Schema)()
], Rate);
exports.Rate = Rate;
exports.RateSchema = mongoose_1.SchemaFactory.createForClass(Rate);
//# sourceMappingURL=rate.schema.js.map