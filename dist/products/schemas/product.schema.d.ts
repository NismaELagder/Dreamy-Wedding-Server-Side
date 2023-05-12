import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comments/schemas/comment.schema';
import { Item } from 'src/items/schemas/item.schema';
import { Rate } from 'src/rates/schemas/rate.schema';
export type ProductDocument = Product & Document;
export declare class Product {
    title: string;
    description: string;
    thumbImage: string;
    location: string;
    comments: Comment[];
    items: Item[];
    rates: Rate;
    notAvailableDAtes: Date[];
    ownerId: string;
    createdAt: Date;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, Document<unknown, any, Product> & Omit<Product & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, Document<unknown, {}, mongoose.FlatRecord<Product>> & Omit<mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
