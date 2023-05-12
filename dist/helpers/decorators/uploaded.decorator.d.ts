import { EnumUploadedOptions, EnumUploadFilesStorage } from '../enums/enum.values';
interface decoratorOption {
    option?: EnumUploadedOptions | string;
    storage?: EnumUploadFilesStorage;
}
export declare const Uploaded: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | decoratorOption)[]) => ParameterDecorator;
export {};
