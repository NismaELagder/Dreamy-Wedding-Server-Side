import { PaymentsService } from './payments.service';
import { AuthType } from 'src/helpers/types/auth.type';
import { StripePaymentDto } from './dto/stripe-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(auth: AuthType, orderId: string): Promise<void>;
    intentStripe(stripePaymentDto: StripePaymentDto): Promise<string>;
    findAll(): Promise<import("./schemas/payment.schema").Payment[]>;
    findUserPayments(auth: AuthType): Promise<import("./schemas/payment.schema").Payment[]>;
    findOne(id: string): Promise<import("./schemas/payment.schema").Payment>;
}
