import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { CommentUser } from 'src/helpers/types/comment.type';
export type CommentDocument = Comment & Document;
export declare class Comment {
    user: CommentUser;
    comment: string;
    createdAt: Date;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, Document<unknown, any, Comment> & Omit<Comment & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, Document<unknown, {}, mongoose.FlatRecord<Comment>> & Omit<mongoose.FlatRecord<Comment> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
