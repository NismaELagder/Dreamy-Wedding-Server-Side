/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
/// <reference types="cookie-parser" />
export declare const uploadToS3: (file: Express.Multer.File) => Promise<unknown>;
