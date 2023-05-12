/// <reference types="multer" />
export declare class UpdateUserSwaggerDto {
    file: Express.Multer.File;
    name: string;
    email: string;
    role: string;
    updatedAt: Date;
}
