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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const auth_decorator_1 = require("../../helpers/decorators/auth.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const uploaded_decorator_1 = require("../../helpers/decorators/uploaded.decorator");
const custom_upload_file_multer_1 = require("../../helpers/files/custom_upload_file.multer");
const enum_values_1 = require("../../helpers/enums/enum.values");
const roles_decorator_1 = require("../auth/role/roles.decorator");
const role_guard_1 = require("../auth/role/role.guard");
const swagger_1 = require("@nestjs/swagger");
const update_user_swagger_dto_1 = require("../../helpers/swagger_dto/update-user-swagger.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    findAll() {
        return this.usersService.findAll();
    }
    profile(id) {
        return this.usersService.findOne(id);
    }
    findOne(userId) {
        return this.usersService.findOne(userId);
    }
    update(auth, updateUserDto, filePath) {
        if (filePath) {
            updateUserDto.avatar = filePath;
        }
        return this.usersService.update(auth.userId, updateUserDto);
    }
    remove(userId) {
        return this.usersService.delete(userId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, auth_decorator_1.Auth)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "profile", null);
__decorate([
    (0, common_1.Get)(':userId'),
    (0, swagger_1.ApiParam)({
        name: 'userId',
        required: true,
        description: 'Should be an id of a user that exists in the database',
        type: String
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, custom_upload_file_multer_1.default)({ type: enum_values_1.EnumFileType.IMAGE, path: "users/avatar" })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'A new avatar for the user',
        type: update_user_swagger_dto_1.UpdateUserSwaggerDto,
    }),
    (0, swagger_1.ApiBody)({ type: update_user_swagger_dto_1.UpdateUserSwaggerDto }),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, uploaded_decorator_1.Uploaded)({
        option: enum_values_1.EnumUploadedOptions.FULL_PATH,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_values_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, swagger_1.ApiParam)({
        name: 'userId',
        required: true,
        description: 'Should be an id of a user that exists in the database',
        type: String
    }),
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map