import { EnumStatues } from '../enums/enum.values';
import { ValidatedOrderProduct } from 'src/orders/dto/validate-order-product.dto';
export declare class UpdateOrderSwaggerDto {
    status: EnumStatues;
    product: ValidatedOrderProduct;
    price: number;
    ownerId: String;
}
