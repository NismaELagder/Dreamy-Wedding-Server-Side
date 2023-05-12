import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ContactDocument = Contact & Document;
export declare class Contact {
    name: string;
    email: string;
    phone?: string;
    message: string;
    createdAt: Date;
}
export declare const ContactSchema: mongoose.Schema<Contact, mongoose.Model<Contact, any, any, any, Document<unknown, any, Contact> & Omit<Contact & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Contact, Document<unknown, {}, mongoose.FlatRecord<Contact>> & Omit<mongoose.FlatRecord<Contact> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
