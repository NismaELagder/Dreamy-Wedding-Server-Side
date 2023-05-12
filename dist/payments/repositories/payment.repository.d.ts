import { Model } from 'mongoose';
import { PaymentDocument } from '../schemas/payment.schema';
import { EntityRepository } from 'src/helpers/db/entity.repository';
export declare class PaymentRepository extends EntityRepository<PaymentDocument> {
    constructor(paymentModel: Model<PaymentDocument>);
}
