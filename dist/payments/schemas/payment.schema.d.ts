import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { AuthType } from 'src/helpers/types/auth.type';
import { Order } from 'src/orders/schemas/order.schema';
export type PaymentDocument = Payment & Document;
export declare class Payment {
    user: AuthType;
    order: Order;
    createdAt: Date;
}
export declare const PaymentSchema: mongoose.Schema<Payment, mongoose.Model<Payment, any, any, any, Document<unknown, any, Payment> & Omit<Payment & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Payment, Document<unknown, {}, mongoose.FlatRecord<Payment>> & Omit<mongoose.FlatRecord<Payment> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
