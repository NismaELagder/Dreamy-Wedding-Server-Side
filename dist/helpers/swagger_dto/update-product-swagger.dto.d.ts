/// <reference types="multer" />
export declare class UpdateProductSwaggerDto {
    file: Express.Multer.File;
    title: string;
    description: string;
    location: string;
    notAvailableDAtes: Date[];
}
