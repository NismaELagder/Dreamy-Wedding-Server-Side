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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const auth_decorator_1 = require("../helpers/decorators/auth.decorator");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const jwt_auth_guard_1 = require("../users/auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../users/auth/role/roles.decorator");
const enum_values_1 = require("../helpers/enums/enum.values");
const role_guard_1 = require("../users/auth/role/role.guard");
let CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    create(auth, productId, createCommentDto) {
        return this.commentService.create(auth, productId, createCommentDto);
    }
    delete(productId, commentId) {
        return this.commentService.delete(productId, commentId);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: 'Create new comment',
        type: create_comment_dto_1.CreateCommentDto,
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':productId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Delete)(':productId?commentId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Query)("commentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "delete", null);
CommentsController = __decorate([
    (0, swagger_1.ApiTags)("comments"),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map