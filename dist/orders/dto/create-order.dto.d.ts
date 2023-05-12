import { EnumStatues } from 'src/helpers/enums/enum.values';
import { ValidatedOrderProduct } from './validate-order-product.dto';
export declare class CreateOrderDto {
    status: EnumStatues;
    product: ValidatedOrderProduct;
    sellerId: String;
    date: Date;
    price: number;
    ownerId: String;
}
