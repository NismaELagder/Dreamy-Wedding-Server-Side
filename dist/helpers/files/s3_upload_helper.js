"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToS3 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const uploadToS3 = async (file) => {
    const { originalname } = file;
    const bucketS3 = process.env.AWS_BUCKET_S3;
    const s3 = getS3();
    const params = {
        Bucket: bucketS3,
        Key: String(originalname),
        Body: file.buffer,
        ACL: "public-read"
    };
    return new Promise((resolve, reject) => {
        s3.send(new client_s3_1.PutObjectCommand(params), (err, data) => {
            if (err) {
                console.error(err);
                reject(err.message);
            }
            resolve(data);
        });
    });
};
exports.uploadToS3 = uploadToS3;
const getS3 = () => {
    return new client_s3_1.S3Client({
        region: process.env.AWS_S3_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
    });
};
//# sourceMappingURL=s3_upload_helper.js.map