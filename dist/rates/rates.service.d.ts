import { CreateRateDto } from './dto/create-rate.dto';
import { ProductRepository } from 'src/products/repositories/product.repository';
import { AuthType } from 'src/helpers/types/auth.type';
export declare class RatesService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    create(auth: AuthType, productId: string, createRateDto: CreateRateDto): Promise<import("mongodb").UpdateResult>;
}
