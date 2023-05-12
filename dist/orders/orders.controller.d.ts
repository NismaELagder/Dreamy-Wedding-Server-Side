import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthType } from 'src/helpers/types/auth.type';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(auth: AuthType, createOrderDto: CreateOrderDto): Promise<import("./schemas/order.schema").OrderDocument>;
    findAll(): Promise<import("./schemas/order.schema").OrderDocument[]>;
    finOne(auth: AuthType, orderId: string): Promise<import("./schemas/order.schema").Order>;
    findUserOrders(auth: AuthType): Promise<import("./schemas/order.schema").OrderDocument[]>;
    requestsOrders(auth: AuthType): Promise<import("./schemas/order.schema").OrderDocument[]>;
    update(auth: AuthType, orderId: string, updateOrderDto: UpdateOrderDto): Promise<import("./schemas/order.schema").OrderDocument>;
    remove(auth: AuthType, orderId: string): Promise<boolean>;
}
