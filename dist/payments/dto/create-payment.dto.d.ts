import { AuthType } from "src/helpers/types/auth.type";
import { Order } from "src/orders/schemas/order.schema";
export declare class CreatePaymentDto {
    user: AuthType;
    order: Order;
}
