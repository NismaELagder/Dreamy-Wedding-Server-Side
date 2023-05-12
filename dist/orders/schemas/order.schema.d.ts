import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { EnumStatues } from 'src/helpers/enums/enum.values';
import { OrderProduct } from 'src/helpers/types/product.types';
export type OrderDocument = Order & Document;
export declare class Order {
    ownerId: string;
    sellerId: string;
    status: EnumStatues;
    product: OrderProduct;
    price: number;
    date: Date;
    createdAt: Date;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, Document<unknown, any, Order> & Omit<Order & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, Document<unknown, {}, mongoose.FlatRecord<Order>> & Omit<mongoose.FlatRecord<Order> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
