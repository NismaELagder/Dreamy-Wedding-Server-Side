import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserRole } from 'src/helpers/enums/enum.values';
export type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    bio: string;
    role: UserRole;
    avatar?: string;
    createdAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
