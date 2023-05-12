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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_repository_1 = require("../repositories/user.repository");
let AuthService = class AuthService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        try {
            return await this.userRepository.create(createUserDto);
        }
        catch (error) {
            throw new exceptions_1.BadRequestException();
        }
    }
    async hashPassword(pass) {
        const saltOrRounds = 10;
        return await bcrypt.hash(pass, saltOrRounds);
    }
    async isMatchPass(pass, hash) {
        return bcrypt.compare(pass, hash);
    }
    async validateUser(loginAuthDto) {
        const user = await this.userRepository.findOne({
            email: loginAuthDto.email,
        });
        if (user &&
            (await this.isMatchPass(loginAuthDto.password, user.password))) {
            return user;
        }
        return null;
    }
    async createToken(user, res) {
        const payload = {
            userId: user['_id'],
            email: user.email,
            role: user.role,
        };
        const access_token = this.jwtService.sign(payload);
        res.cookie('access_token', access_token, {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        }).json({
            access_token: this.jwtService.sign(payload),
            user,
        });
    }
    async login(loginAuthDto, res) {
        const user = await this.validateUser(loginAuthDto);
        if (!user) {
            throw new exceptions_1.UnauthorizedException('Error in credentials');
        }
        return this.createToken(user, res);
    }
    async register(createUserDto, res) {
        const user = await this.userRepository.findOne({
            email: createUserDto.email,
        });
        if (user) {
            throw new exceptions_1.NotAcceptableException('This user already exists');
        }
        else {
            createUserDto.password = await this.hashPassword(createUserDto.password);
            let response = await this.create(createUserDto);
            if (response) {
                return await this.createToken(response, res);
            }
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_repository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map