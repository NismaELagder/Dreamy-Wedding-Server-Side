/// <reference types="multer" />
import { EnumFileType } from '../enums/enum.values';
export default class CustomFileHelper {
    static fileFullPath(file: Express.Multer.File): string | null;
    static getFileType(file: Express.Multer.File): EnumFileType;
    static generateFileName(file: Express.Multer.File): string;
}
