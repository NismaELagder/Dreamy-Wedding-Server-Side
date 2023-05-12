"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_values_1 = require("../enums/enum.values");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const path_1 = require("path");
class CustomFileHelper {
    static fileFullPath(file) {
        if (file) {
            return `/${file.path.split('\\').join('/')}`;
        }
    }
    ;
    static getFileType(file) {
        if (file.mimetype.startsWith('image/')) {
            return enum_values_1.EnumFileType.IMAGE;
        }
        else if (file.mimetype.startsWith('video/')) {
            return enum_values_1.EnumFileType.VIDEO;
        }
        else if (file.mimetype.startsWith('audio/')) {
            return enum_values_1.EnumFileType.AUDIO;
        }
        else if (file.mimetype.startsWith('text/')) {
            return enum_values_1.EnumFileType.TEXT;
        }
        else if (file.mimetype == 'application/pdf') {
            return enum_values_1.EnumFileType.PDF;
        }
        throw new common_1.NotAcceptableException(`The ${file.mimetype} file is not acceptable`);
    }
    ;
    static generateFileName(file) {
        const name = file.originalname.split('.')[0].replace(/\s/g, '-');
        const fileExtName = (0, path_1.extname)(file.originalname);
        return `${name}-${(0, uuid_1.v4)()}${fileExtName}`;
    }
    ;
}
exports.default = CustomFileHelper;
//# sourceMappingURL=custom_file_helper.js.map