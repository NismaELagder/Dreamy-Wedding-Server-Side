import { Document, FilterQuery, Model, QueryOptions, UpdateQuery, UpdateWriteOpResult } from 'mongoose';
export declare abstract class EntityRepository<T extends Document> {
    protected readonly entityModel: Model<T>;
    constructor(entityModel: Model<T>);
    findOne(entityFilterQuery: FilterQuery<T>, projection?: any, options?: QueryOptions): Promise<T | null>;
    findOneById(_id: string, projection?: any, options?: QueryOptions): Promise<T | null>;
    findAll(entityFilterQuery?: FilterQuery<T>, projection?: any, options?: QueryOptions): Promise<T[]>;
    count(entityFilterQuery?: FilterQuery<T>, projection?: any, options?: QueryOptions): Promise<number>;
    create(entity: unknown): Promise<T>;
    findOneAndUpdate(entityFilterQuery: FilterQuery<T>, updatedEntity: UpdateQuery<T>, options?: QueryOptions): Promise<T>;
    findByIdAndUpdate(entityId: string, updatedEntity: UpdateQuery<T>, options?: QueryOptions): Promise<T>;
    updateOne(entityFilterQuery: FilterQuery<T>, updatedEntity: UpdateQuery<T>, options?: QueryOptions): Promise<UpdateWriteOpResult>;
    findOneAndDelete(entityFilterQuery: FilterQuery<T>, options?: QueryOptions): Promise<T>;
    findByIdAndDelete(entityId: string, options?: QueryOptions): Promise<T>;
    deleteOne(entityFilterQuery: FilterQuery<T>, options?: QueryOptions): Promise<boolean>;
}
