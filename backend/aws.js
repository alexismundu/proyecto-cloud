const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');

// Set the AWS Region.
const REGION = 'us-east-1'; //e.g. "us-east-1"
const ddbClient = new DynamoDBClient({ region: REGION });

const runDbCommand = async (command) => {
  try {
    const data = await ddbClient.send(command);
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};

const awsItemToJsObj = (awsObject) => {
  const jsObj = {};
  for (const [key, value] of Object.entries(awsObject)) {
    jsObj[key] = Object.values(value)[0];
  }
  return jsObj;
};

const awsItemsToJsObj = (arr) => arr.Items.map((item) => awsItemToJsObj(item));

module.exports = {
  ddbClient,
  runDbCommand,
  awsItemToJsObj,
  awsItemsToJsObj,
};
