import { Model } from 'mongoose';
import { OrderDocument } from '../schemas/order.schema';
import { EntityRepository } from 'src/helpers/db/entity.repository';
export declare class OrderRepository extends EntityRepository<OrderDocument> {
    constructor(orderModel: Model<OrderDocument>);
}
