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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("./repositories/order.repository");
const enum_values_1 = require("../helpers/enums/enum.values");
let OrdersService = class OrdersService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(auth, createOrderDto) {
        createOrderDto.ownerId = auth.userId;
        try {
            createOrderDto.price = 0;
            createOrderDto.product.items.forEach(e => {
                createOrderDto.price += e.price;
            });
            return await this.orderRepository.create(createOrderDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error creating order. Please try again later.");
        }
    }
    async findAll() {
        try {
            return await this.orderRepository.findAll();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error fetching orders. Please try again later.");
        }
    }
    async findUserOrders(auth) {
        try {
            return await this.orderRepository.findAll({ ownerId: auth.userId });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error fetching orders. Please try again later.");
        }
    }
    async requestsOrders(auth) {
        try {
            return await this.orderRepository.findAll({ sellerId: auth.userId });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error fetching orders. Please try again later.");
        }
    }
    async findOne(auth, orderId) {
        try {
            const order = await this.orderRepository.findOneById(orderId);
            if (auth.role == enum_values_1.UserRole.ADMIN || order.sellerId == auth.userId || order.ownerId == auth.userId) {
                return order;
            }
            else {
                throw new common_1.ForbiddenException();
            }
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async findOrder(id) {
        try {
            return await this.orderRepository.findOneById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async update(auth, id, updateOrderDto) {
        await this.checkIfCanAccessOrder(auth, id);
        try {
            updateOrderDto.price = 0;
            updateOrderDto.product.items.forEach(e => {
                updateOrderDto.price += e.price;
            });
            return await this.orderRepository.findOneAndUpdate({ _id: id }, updateOrderDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error updating order. Please try again later.");
        }
    }
    async remove(auth, id) {
        await this.checkIfCanAccessOrder(auth, id);
        try {
            return await this.orderRepository.deleteOne({ _id: id });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error deleting order. Please try again later.");
        }
    }
    async checkIfCanAccessOrder(auth, id) {
        const order = await this.findOrder(id);
        if (!order) {
            throw new common_1.NotFoundException();
        }
        if (order.ownerId == auth.userId || order.sellerId == auth.userId || auth.role == enum_values_1.UserRole.ADMIN) {
            return order;
        }
        throw new common_1.ForbiddenException();
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map