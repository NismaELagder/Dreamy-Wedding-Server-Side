import { CreateItemDto } from 'src/items/dto/create-item.dto';
export declare class CreateProductDto {
    title: string;
    description: string;
    location: string;
    items: CreateItemDto[];
    notAvailableDAtes: Date[];
    thumbImage: string;
    ownerId: string;
}
