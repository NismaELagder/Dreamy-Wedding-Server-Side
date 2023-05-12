import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthType } from 'src/helpers/types/auth.type';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../schemas/user.schema").User[]>;
    profile(id: string): Promise<import("../schemas/user.schema").UserDocument>;
    findOne(userId: string): Promise<import("../schemas/user.schema").UserDocument>;
    update(auth: AuthType, updateUserDto: UpdateUserDto, filePath?: string): Promise<import("mongodb").UpdateResult>;
    remove(userId: string): Promise<void>;
}
