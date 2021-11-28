const { runDbCommand, runDbPutItem, awsItemsToJsObj } = require('../aws');
const {
  ScanCommand,
  PutItemCommand,
  DeleteItemCommand
} = require('@aws-sdk/client-dynamodb');
const { v4: uuidv4 } = require('uuid');

const TableName = 'properties';

/**
 * get the associated properties linked to the userId
 * userId: userId that the properties are associated to.
 */
const getUserProperties = async (userId) => {
  // Set the parameters.
  const params = {
    // Specify which items in the results are returned.
    FilterExpression: 'userId = :userId',
    // Define the expression attribute value, which are substitutes for the values you want to compare.
    ExpressionAttributeValues: {
      ':userId': { N: userId },
    },
    // Set the projection expression, which are the attributes that you want.
    ProjectionExpression: 'id, address, phone, details, thumbnail, isChecked',
    TableName,
  };

  const awsData = await runDbCommand(new ScanCommand(params));
  console.log(`awsData`, JSON.stringify(awsData.Items[0]))
  return awsItemsToJsObj(awsData);
};

const createProperty = async ({
  userId,
  address,
  phone,
  details,
  thumbnail,
  isChecked,
}) => {
  const params = {
    TableName,
    Item: {
      id: { S: uuidv4() },
      userId: { S: userId },
      address: { S: address },
      phone: { S: phone },
      details: { S: details },
      thumbnail: { S: thumbnail },
      isChecked: { BOOL: isChecked },
    },
  };

  const awsData = await runDbCommand(new PutItemCommand(params));
  console.log('Property succesfully created in DynamoDB');
  return awsData;
};

const deleteProperty = async ({
  userId,
  propertyId,
  address,
  phone,
  details,
  thumbnail,
  isChecked,
}) => {
  try {
    const params = {
      TableName,
      Key: {
        id: { S: propertyId },
        userId: { S: userId },
      },
    };

    const awsData = await runDbCommand(new DeleteItemCommand(params));
    console.log('Property succesfully created in DynamoDB');
    return awsData;
  } catch (error) {
    console.log(err)
  }
};
module.exports = { getUserProperties, createProperty, /* deleteProperty */ };
