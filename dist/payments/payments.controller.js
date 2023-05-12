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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const payments_service_1 = require("./payments.service");
const jwt_auth_guard_1 = require("../users/auth/guards/jwt-auth.guard");
const auth_decorator_1 = require("../helpers/decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../users/auth/role/roles.decorator");
const enum_values_1 = require("../helpers/enums/enum.values");
const role_guard_1 = require("../users/auth/role/role.guard");
const stripe_payment_dto_1 = require("./dto/stripe-payment.dto");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    create(auth, orderId) {
        return this.paymentsService.create(auth, orderId);
    }
    intentStripe(stripePaymentDto) {
        return this.paymentsService.intentStripe(stripePaymentDto);
    }
    findAll() {
        return this.paymentsService.findAll();
    }
    findUserPayments(auth) {
        return this.paymentsService.findUserPayments(auth);
    }
    findOne(id) {
        return this.paymentsService.findOne(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create/:orderId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'Create stripe intent client secrete',
        type: stripe_payment_dto_1.StripePaymentDto,
    }),
    (0, common_1.Post)('intentStripe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stripe_payment_dto_1.StripePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "intentStripe", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("my_Payments"),
    __param(0, (0, auth_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findUserPayments", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findOne", null);
PaymentsController = __decorate([
    (0, swagger_1.ApiTags)("payment"),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
exports.PaymentsController = PaymentsController;
//# sourceMappingURL=payments.controller.js.map