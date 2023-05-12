import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserRepository } from 'src/users/repositories/user.repository';
import { CreateUserDto } from 'src/users/auth/dto/create-user.dto';
import { Response } from 'express';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    private create;
    private hashPassword;
    private isMatchPass;
    private validateUser;
    private createToken;
    login(loginAuthDto: LoginAuthDto, res: Response): Promise<void>;
    register(createUserDto: CreateUserDto, res: Response): Promise<void>;
}
