import { CommentsService } from './comments.service';
import { AuthType } from 'src/helpers/types/auth.type';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsController {
    private readonly commentService;
    constructor(commentService: CommentsService);
    create(auth: AuthType, productId: string, createCommentDto: CreateCommentDto): Promise<void>;
    delete(productId: string, commentId: string): Promise<import("mongodb").UpdateResult>;
}
