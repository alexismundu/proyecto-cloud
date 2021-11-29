const { bucketClient } = require('../aws');
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require('uuid');

const { logg_into_cloud } = require("../utils/logger")

const bucketName = "kasas-imgs";

const generateUploadURL = async ({ userId }) => {
  try {

    const params = {
      Bucket: bucketName,
      Key: `img-${uuidv4()}`,
      // Body: "BODY",
      ACL: 'public-read',
    };

    const uploadURL = await getSignedUrl(bucketClient, new PutObjectCommand(params), { expiresIn: 6000 });
    console.log('Upload Url succesfully created');
    logg_into_cloud(`The user: ${userId} intents to upload the image ${uploadURL?.split('?')?.[0]}`);
    return uploadURL;

  } catch (error) {
    console.log(`error`, error)
  }
}

module.exports = { generateUploadURL };

// require('dotenv').config();
// const { bucketClient } = require('../aws');
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const { PutObjectCommand } = require("@aws-sdk/client-s3");
// const { v4: uuidv4 } = require('uuid');
// const aws = require('aws-sdk');


// const bucketName = "kasas-imgs";
// const region = "us-east-1";
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


// const s3 = new aws.S3({
//   region,
//   credentials: { accessKeyId, secretAccessKey },
//   accessKeyId, secretAccessKey,
//   signatureVersion: 'v4'
// });



// const generateUploadURL = async ({ userId }) => {
//   try {

//     const params = {
//       Bucket: bucketName,
//       Key: `img-${uuidv4()}`,
//       Body: "BODY"
//     };

//     // const uploadURL = await getSignedUrl(bucketClient, new PutObjectCommand(params), { expiresIn: 6000 });
//     const uploadURL = await s3.getSignedUrlPromise('put0bject', params)
//     console.log('Upload Url succesfully created');
//     return uploadURL || { url: '' };

//   } catch (error) {
//     console.log(`error`, error)
//   }
// }

// module.exports = { generateUploadURL };