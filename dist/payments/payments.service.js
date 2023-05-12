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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const payment_repository_1 = require("./repositories/payment.repository");
const orders_service_1 = require("../orders/orders.service");
const create_payment_dto_1 = require("./dto/create-payment.dto");
const stripe_1 = require("stripe");
let PaymentsService = class PaymentsService {
    constructor(paymentRepository, ordersService) {
        this.paymentRepository = paymentRepository;
        this.ordersService = ordersService;
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });
    }
    async create(user, orderId) {
        const order = await this.ordersService.findOrder(orderId);
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        const createPaymentDto = new create_payment_dto_1.CreatePaymentDto();
        createPaymentDto.user = user;
        createPaymentDto.order = order;
        try {
            await this.paymentRepository.create(createPaymentDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error while creating payment");
        }
    }
    async intentStripe(stripePaymentDto) {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: stripePaymentDto.amount * 100,
                currency: stripePaymentDto.currency || "usd",
                payment_method_types: ['card'],
            });
            return paymentIntent.client_secret;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error while creating payment intent");
        }
    }
    async findAll() {
        try {
            return await this.paymentRepository.findAll();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findUserPayments(user) {
        try {
            return await this.paymentRepository.findAll({
                "user.userId": user.userId
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOne(id) {
        try {
            return await this.paymentRepository.findOneById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
};
PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository,
        orders_service_1.OrdersService])
], PaymentsService);
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map