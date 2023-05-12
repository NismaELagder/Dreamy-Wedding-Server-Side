import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './repositories/order.repository';
import { Order } from './schemas/order.schema';
import { AuthType } from 'src/helpers/types/auth.type';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: OrderRepository);
    create(auth: AuthType, createOrderDto: CreateOrderDto): Promise<import("./schemas/order.schema").OrderDocument>;
    findAll(): Promise<import("./schemas/order.schema").OrderDocument[]>;
    findUserOrders(auth: AuthType): Promise<import("./schemas/order.schema").OrderDocument[]>;
    requestsOrders(auth: AuthType): Promise<import("./schemas/order.schema").OrderDocument[]>;
    findOne(auth: AuthType, orderId: string): Promise<Order>;
    findOrder(id: string): Promise<Order>;
    update(auth: AuthType, id: string, updateOrderDto: UpdateOrderDto): Promise<import("./schemas/order.schema").OrderDocument>;
    remove(auth: AuthType, id: string): Promise<boolean>;
    checkIfCanAccessOrder(auth: AuthType, id: string): Promise<Order>;
}
