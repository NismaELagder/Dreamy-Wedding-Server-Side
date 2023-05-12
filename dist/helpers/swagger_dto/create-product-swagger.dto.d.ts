/// <reference types="multer" />
import { CreateProductDto } from 'src/products/dto/create-product.dto';
export declare class CreateProductSwaggerDto extends CreateProductDto {
    file: Express.Multer.File;
}
