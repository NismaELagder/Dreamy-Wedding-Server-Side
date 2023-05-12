"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uploaded = void 0;
const common_1 = require("@nestjs/common");
const custom_file_helper_1 = require("../files/custom_file_helper");
const enum_values_1 = require("../enums/enum.values");
const s3_upload_helper_1 = require("../files/s3_upload_helper");
exports.Uploaded = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const file = request.file;
    if (!file) {
        return null;
    }
    file[enum_values_1.EnumUploadedOptions.FILE_TYPE] = custom_file_helper_1.default.getFileType(file);
    if (file.path) {
        file[enum_values_1.EnumUploadedOptions.FULL_PATH] = custom_file_helper_1.default.fileFullPath(file);
    }
    if ((data === null || data === void 0 ? void 0 : data.storage) !== null &&
        (data === null || data === void 0 ? void 0 : data.storage) !== enum_values_1.EnumUploadFilesStorage.LOCAL) {
        await (0, s3_upload_helper_1.uploadToS3)(file).then((data) => (file[enum_values_1.EnumUploadedOptions.FULL_PATH] =
            process.env.AWS_S3_MAIN_FILE_STORAGE_PATH + file.originalname));
    }
    return (data === null || data === void 0 ? void 0 : data.option) ? file === null || file === void 0 ? void 0 : file[data.option] : file;
});
//# sourceMappingURL=uploaded.decorator.js.map