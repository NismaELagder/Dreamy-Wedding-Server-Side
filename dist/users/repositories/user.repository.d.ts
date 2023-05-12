import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';
import { EntityRepository } from 'src/helpers/db/entity.repository';
export declare class UserRepository extends EntityRepository<UserDocument> {
    constructor(userModel: Model<UserDocument>);
}
