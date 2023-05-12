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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const jwt_auth_guard_1 = require("../users/auth/guards/jwt-auth.guard");
const auth_decorator_1 = require("../helpers/decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const update_order_swagger_dto_1 = require("../helpers/swagger_dto/update-order-swagger.dto");
const roles_decorator_1 = require("../users/auth/role/roles.decorator");
const enum_values_1 = require("../helpers/enums/enum.values");
const role_guard_1 = require("../users/auth/role/role.guard");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(auth, createOrderDto) {
        return this.ordersService.create(auth, createOrderDto);
    }
    findAll() {
        return this.ordersService.findAll();
    }
    finOne(auth, orderId) {
        return this.ordersService.findOne(auth, orderId);
    }
    findUserOrders(auth) {
        return this.ordersService.findUserOrders(auth);
    }
    requestsOrders(auth) {
        return this.ordersService.requestsOrders(auth);
    }
    update(auth, orderId, updateOrderDto) {
        return this.ordersService.update(auth, orderId, updateOrderDto);
    }
    remove(auth, orderId) {
        return this.ordersService.remove(auth, orderId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        description: 'Create new order',
        type: create_order_dto_1.CreateOrderDto,
    }),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('order/:orderId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "finOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("myOrders"),
    __param(0, (0, auth_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findUserOrders", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("requestsOrders"),
    __param(0, (0, auth_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "requestsOrders", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'Update order',
        type: update_order_swagger_dto_1.UpdateOrderSwaggerDto,
    }),
    (0, common_1.Patch)(':orderId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('orderId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':orderId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "remove", null);
OrdersController = __decorate([
    (0, swagger_1.ApiTags)("orders"),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map