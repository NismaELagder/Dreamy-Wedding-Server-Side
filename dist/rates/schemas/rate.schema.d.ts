import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { RateUser } from 'src/helpers/types/rate.type';
export type RateDocument = Rate & Document;
export declare class Rate {
    numberOfRates: number;
    totalRates: number;
    users: RateUser[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const RateSchema: mongoose.Schema<Rate, mongoose.Model<Rate, any, any, any, Document<unknown, any, Rate> & Omit<Rate & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Rate, Document<unknown, {}, mongoose.FlatRecord<Rate>> & Omit<mongoose.FlatRecord<Rate> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
