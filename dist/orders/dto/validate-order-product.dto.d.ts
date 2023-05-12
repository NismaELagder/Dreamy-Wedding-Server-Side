import { OrderProduct } from 'src/helpers/types/product.types';
import { ValidatedOrderItem } from './validated-order-item.dto';
export declare class ValidatedOrderProduct implements OrderProduct {
    id: string;
    name: string;
    thumbImage?: string;
    items: ValidatedOrderItem[];
}
