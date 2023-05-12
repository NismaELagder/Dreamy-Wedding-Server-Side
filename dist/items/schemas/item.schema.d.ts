import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ItemDocument = Item & Document;
export declare class Item {
    name: string;
    description?: string;
    price: number;
    quantity: number;
    minQuantity: number;
    maxQuantity: number;
}
export declare const ItemSchema: mongoose.Schema<Item, mongoose.Model<Item, any, any, any, Document<unknown, any, Item> & Omit<Item & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Item, Document<unknown, {}, mongoose.FlatRecord<Item>> & Omit<mongoose.FlatRecord<Item> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
