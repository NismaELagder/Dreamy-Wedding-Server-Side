import { PaymentRepository } from './repositories/payment.repository';
import { AuthType } from 'src/helpers/types/auth.type';
import { OrdersService } from 'src/orders/orders.service';
import { Payment } from './schemas/payment.schema';
import { StripePaymentDto } from './dto/stripe-payment.dto';
export declare class PaymentsService {
    private readonly paymentRepository;
    private readonly ordersService;
    private stripe;
    constructor(paymentRepository: PaymentRepository, ordersService: OrdersService);
    create(user: AuthType, orderId: string): Promise<void>;
    intentStripe(stripePaymentDto: StripePaymentDto): Promise<string>;
    findAll(): Promise<Payment[]>;
    findUserPayments(user: AuthType): Promise<Payment[]>;
    findOne(id: string): Promise<Payment>;
}
