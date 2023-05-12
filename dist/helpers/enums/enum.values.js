"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUploadFilesStorage = exports.EnumStatues = exports.UserRole = exports.EnumUploadedOptions = exports.EnumFileType = void 0;
var EnumFileType;
(function (EnumFileType) {
    EnumFileType["TEXT"] = "TEXT";
    EnumFileType["IMAGE"] = "IMAGE";
    EnumFileType["VIDEO"] = "VIDEO";
    EnumFileType["AUDIO"] = "AUDIO";
    EnumFileType["PDF"] = "PDF";
})(EnumFileType = exports.EnumFileType || (exports.EnumFileType = {}));
var EnumUploadedOptions;
(function (EnumUploadedOptions) {
    EnumUploadedOptions["FIELD_NAME"] = "fieldname";
    EnumUploadedOptions["ORIGINAL_NAME"] = "originalname";
    EnumUploadedOptions["ENCODING"] = "encoding";
    EnumUploadedOptions["MIME_TYPE"] = "mimetype";
    EnumUploadedOptions["DESTINATION"] = "destination";
    EnumUploadedOptions["FILE_NAME"] = "filename";
    EnumUploadedOptions["PATH"] = "path";
    EnumUploadedOptions["SIZE"] = "size";
    EnumUploadedOptions["FILE_TYPE"] = "fileType";
    EnumUploadedOptions["FULL_PATH"] = "fullPath";
    EnumUploadedOptions["BUFFER"] = "buffer";
})(EnumUploadedOptions = exports.EnumUploadedOptions || (exports.EnumUploadedOptions = {}));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["SELLER"] = "SELLER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var EnumStatues;
(function (EnumStatues) {
    EnumStatues["PENDING"] = "PENDING";
    EnumStatues["ACCEPTED"] = "ACCEPTED";
    EnumStatues["REJECTED"] = "REJECTED";
    EnumStatues["CANCELED"] = "CANCELED";
    EnumStatues["COMPLETED"] = "COMPLETED";
    EnumStatues["FAILED"] = "FAILED";
    EnumStatues["PAID"] = "PAID";
    EnumStatues["UNKNOWN"] = "UNKNOWN";
})(EnumStatues = exports.EnumStatues || (exports.EnumStatues = {}));
var EnumUploadFilesStorage;
(function (EnumUploadFilesStorage) {
    EnumUploadFilesStorage["LOCAL"] = "LOCAL";
    EnumUploadFilesStorage["S3"] = "S3";
    EnumUploadFilesStorage["GCP"] = "GCP";
    EnumUploadFilesStorage["AZURE"] = "AZURE";
    EnumUploadFilesStorage["DO"] = "DO";
})(EnumUploadFilesStorage = exports.EnumUploadFilesStorage || (exports.EnumUploadFilesStorage = {}));
//# sourceMappingURL=enum.values.js.map