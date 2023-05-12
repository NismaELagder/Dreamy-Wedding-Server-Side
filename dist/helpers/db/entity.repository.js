"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRepository = void 0;
class EntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    async findOne(entityFilterQuery, projection, options) {
        return await this.entityModel
            .findOne(entityFilterQuery, Object.assign({ __v: 0 }, projection), options)
            .exec();
    }
    async findOneById(_id, projection, options) {
        return await this.entityModel
            .findOne({ _id }, Object.assign({ __v: 0 }, projection), options)
            .exec();
    }
    async findAll(entityFilterQuery = {}, projection, options) {
        return await this.entityModel
            .find(entityFilterQuery, Object.assign({ __v: 0 }, projection), options)
            .exec();
    }
    async count(entityFilterQuery = {}, projection, options) {
        return await this.entityModel
            .find(entityFilterQuery, Object.assign({ __v: 0 }, projection), options)
            .count();
    }
    async create(entity) {
        const createdEntity = new this.entityModel(entity);
        return await createdEntity.save();
    }
    async findOneAndUpdate(entityFilterQuery, updatedEntity, options) {
        return await this.entityModel
            .findOneAndUpdate(entityFilterQuery, updatedEntity, Object.assign({ new: true }, options))
            .exec();
    }
    async findByIdAndUpdate(entityId, updatedEntity, options) {
        return await this.entityModel
            .findByIdAndUpdate(entityId, updatedEntity, Object.assign({ new: true }, options))
            .exec();
    }
    async updateOne(entityFilterQuery, updatedEntity, options) {
        return await this.entityModel
            .updateOne(entityFilterQuery, updatedEntity, Object.assign({}, options))
            .exec();
    }
    async findOneAndDelete(entityFilterQuery, options) {
        return await this.entityModel.findOneAndDelete(entityFilterQuery, options).exec();
    }
    async findByIdAndDelete(entityId, options) {
        return await this.entityModel.findByIdAndDelete(entityId, Object.assign({}, options)).exec();
    }
    async deleteOne(entityFilterQuery, options) {
        const deleteResult = await this.entityModel.deleteOne(entityFilterQuery, Object.assign({}, options));
        return deleteResult.deletedCount >= 1;
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entity.repository.js.map