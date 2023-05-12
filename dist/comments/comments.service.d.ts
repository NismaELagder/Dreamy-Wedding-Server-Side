import { CreateCommentDto } from './dto/create-comment.dto';
import { ProductRepository } from 'src/products/repositories/product.repository';
import { UsersService } from 'src/users/user/users.service';
import { AuthType } from 'src/helpers/types/auth.type';
export declare class CommentsService {
    private readonly productRepository;
    private readonly userService;
    constructor(productRepository: ProductRepository, userService: UsersService);
    create(auth: AuthType, productId: string, createCommentDto: CreateCommentDto): Promise<void>;
    delete(productId: string, commentId: string): Promise<import("mongodb").UpdateResult>;
}
