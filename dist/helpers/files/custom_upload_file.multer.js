"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("multer");
const enum_values_1 = require("../enums/enum.values");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const custom_file_helper_1 = require("./custom_file_helper");
function CustomUploadFile(options = {}) {
    options = Object.assign({ storage: enum_values_1.EnumUploadFilesStorage.S3, mainDir: 'uploads', path: 'public', fieldName: 'file', maxSize: 20 * 1024 * 1024 }, options);
    if (options.storage == enum_values_1.EnumUploadFilesStorage.LOCAL) {
        return (0, platform_express_1.FileInterceptor)(options.fieldName, handleUploadFileToLocalOptions(options));
    }
    return (0, platform_express_1.FileInterceptor)(options.fieldName, handleUploadFileOptions(options));
}
exports.default = CustomUploadFile;
const handleUploadFileOptions = (options) => {
    const { path, type, maxSize } = options;
    return {
        limits: {
            fileSize: maxSize,
        },
        fileFilter: (req, file, callback) => {
            file.originalname = `${path}/${type != null
                ? +type.toLowerCase()
                : custom_file_helper_1.default.getFileType(file).toLowerCase()}/${custom_file_helper_1.default.generateFileName(file)}`;
            return fileFilter(req, type, file, callback);
        },
    };
};
const handleUploadFileToLocalOptions = (options) => {
    const { path, type, mainDir } = options;
    return Object.assign({ storage: (0, multer_1.diskStorage)({
            destination: `./${mainDir}/${path}${type != null ? '/' + type.toLowerCase() : ''}`,
            filename: (req, file, callback) => {
                callback(null, custom_file_helper_1.default.generateFileName(file));
            },
        }) }, handleUploadFileOptions(options));
};
const fileFilter = (req, type, file, callback) => {
    if (type == enum_values_1.EnumFileType.IMAGE || file.mimetype.startsWith('image/')) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|PNG|JPG|JPEG|GIF|gif)$/)) {
            return callback(new common_1.NotAcceptableException('Only image files are allowed!'), false);
        }
        return callback(null, true);
    }
    else if (type == enum_values_1.EnumFileType.VIDEO || file.mimetype.startsWith('video/')) {
        if (!file.originalname.match(/\.(mp4|avi|flv|3gp|MP4|AVI|FLV|3GP)$/)) {
            return callback(new common_1.NotAcceptableException('Only video files are allowed!'), false);
        }
        return callback(null, true);
    }
    else if (type == enum_values_1.EnumFileType.AUDIO || file.mimetype.startsWith('audio/')) {
        if (!file.originalname.match(/\.(mp3|wav|MP3|WAV)$/)) {
            return callback(new common_1.NotAcceptableException('Only audio files are allowed!'), false);
        }
        return callback(null, true);
    }
    else if (type == enum_values_1.EnumFileType.TEXT || file.mimetype.startsWith('text/')) {
        if (!file.originalname.match(/\.(txt|doc|docx|TXT|DOC|DOCX)$/)) {
            return callback(new common_1.NotAcceptableException('Only text files are allowed!'), false);
        }
        return callback(null, true);
    }
    else if (type == enum_values_1.EnumFileType.PDF || file.mimetype == 'application/pdf') {
        if (!file.originalname.match(/\.(pdf|PDF)$/)) {
            return callback(new common_1.NotAcceptableException('Only PDF files are allowed!'), false);
        }
        return callback(null, true);
    }
    return callback(new common_1.NotAcceptableException(`The ${file.mimetype} file is not acceptable`), false);
};
//# sourceMappingURL=custom_upload_file.multer.js.map