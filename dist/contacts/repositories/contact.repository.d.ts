import { Model } from 'mongoose';
import { ContactDocument } from '../schemas/contact.schema';
import { EntityRepository } from 'src/helpers/db/entity.repository';
export declare class ContactRepository extends EntityRepository<ContactDocument> {
    constructor(contactModel: Model<ContactDocument>);
}
