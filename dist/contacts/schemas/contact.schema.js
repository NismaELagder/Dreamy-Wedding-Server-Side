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
exports.ContactSchema = exports.Contact = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Contact = class Contact {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.String }),
    __metadata("design:type", String)
], Contact.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now, type: mongoose.Schema.Types.Date }),
    __metadata("design:type", Date)
], Contact.prototype, "createdAt", void 0);
Contact = __decorate([
    (0, mongoose_1.Schema)()
], Contact);
exports.Contact = Contact;
exports.ContactSchema = mongoose_1.SchemaFactory.createForClass(Contact);
//# sourceMappingURL=contact.schema.js.map