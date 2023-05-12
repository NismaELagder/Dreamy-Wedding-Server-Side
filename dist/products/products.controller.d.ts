import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthType } from 'src/helpers/types/auth.type';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(auth: AuthType, createProductDto: CreateProductDto, filePath?: string): Promise<import("./schemas/product.schema").ProductDocument>;
    findAll(): Promise<import("./schemas/product.schema").Product[]>;
    findMyProducts(auth: AuthType): Promise<import("./schemas/product.schema").Product[]>;
    findOne(productId: string): Promise<import("./schemas/product.schema").Product>;
    update(auth: AuthType, productId: string, updateProductDto: UpdateProductDto, filePath?: string): Promise<import("mongodb").UpdateResult>;
    remove(auth: AuthType, productId: string): Promise<boolean>;
}
