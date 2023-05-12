"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const product_repository_1 = require("../products/repositories/product.repository");
const users_service_1 = require("../users/user/users.service");
let CommentsService = class CommentsService {
    constructor(productRepository, userService) {
        this.productRepository = productRepository;
        this.userService = userService;
    }
    async create(auth, productId, createCommentDto) {
        const user = await this.userService.findOne(auth.userId);
        createCommentDto.user = {
            id: auth.userId,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        };
        try {
            await this.productRepository.updateOne({ _id: productId }, {
                $push: {
                    comments: createCommentDto
                }
            });
        }
        catch (error) {
            throw new exceptions_1.InternalServerErrorException();
        }
    }
    async delete(productId, commentId) {
        try {
            return await this.productRepository.updateOne({ _id: productId }, {
                $pull: {
                    comments: {
                        _id: commentId
                    }
                }
            });
        }
        catch (error) {
            throw new exceptions_1.InternalServerErrorException();
        }
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        users_service_1.UsersService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map