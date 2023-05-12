import { EnumFileType, EnumUploadFilesStorage } from '../enums/enum.values';
import { Type, NestInterceptor } from '@nestjs/common';
export default function CustomUploadFile(options?: UploadFileOptions): Type<NestInterceptor>;
interface UploadFileOptions {
    storage?: EnumUploadFilesStorage;
    fieldName?: string;
    path?: string;
    type?: EnumFileType;
    mainDir?: string;
    maxSize?: number;
}
export {};
