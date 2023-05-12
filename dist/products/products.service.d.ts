import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';
import { AuthType } from 'src/helpers/types/auth.type';
import { Product } from './schemas/product.schema';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    create(auth: AuthType, createProductDto: CreateProductDto): Promise<import("./schemas/product.schema").ProductDocument>;
    findAll(): Promise<Product[]>;
    findMyProducts(auth: AuthType): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(auth: AuthType, id: string, updateProductDto: UpdateProductDto): Promise<import("mongodb").UpdateResult>;
    remove(auth: AuthType, id: string): Promise<boolean>;
    private checkIfCanAccessProduct;
}
