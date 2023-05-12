import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateUserDto } from 'src/users/auth/dto/create-user.dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginAuthDto, res: Response): Promise<void>;
    register(body: CreateUserDto, res: Response): Promise<void>;
}
