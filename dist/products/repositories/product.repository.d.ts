import { Model } from 'mongoose';
import { ProductDocument } from '../schemas/product.schema';
import { EntityRepository } from 'src/helpers/db/entity.repository';
export declare class ProductRepository extends EntityRepository<ProductDocument> {
    constructor(productModel: Model<ProductDocument>);
}
