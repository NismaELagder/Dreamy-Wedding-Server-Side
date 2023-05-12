import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../schemas/user.schema';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<import("../schemas/user.schema").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongodb").UpdateResult>;
    delete(id: string): Promise<void>;
}
