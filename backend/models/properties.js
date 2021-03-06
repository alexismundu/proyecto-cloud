const { runDbCommand, runDbPutItem, awsItemsToJsObj } = require("../aws");
const {
  ScanCommand,
  PutItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { v4: uuidv4 } = require("uuid");

const { logg_into_cloud } = require("../utils/logger")

const TableName = "properties";

/**
 * get the associated properties linked to the userId
 * userId: userId that the properties are associated to.
 */
const getUserProperties = async (userId) => {
  // Set the parameters.
  const params = {
    // Specify which items in the results are returned.
    FilterExpression: "userId = :userId",
    // Define the expression attribute value, which are substitutes for the values you want to compare.
    ExpressionAttributeValues: {
      ":userId": { S: userId },
    },
    // Set the projection expression, which are the attributes that you want.
    ProjectionExpression: "id, address, phone, details, thumbnail, isChecked",
    TableName,
  };

  const awsData = await runDbCommand(new ScanCommand(params));
  // await logg_into_cloud(`The user: ${userId} fetched properties`);
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
  const pId = uuidv4();
  const params = {
    TableName,
    Item: {
      id: { S: pId },
      userId: { S: userId },
      address: { S: address },
      phone: { S: phone },
      details: { S: details },
      thumbnail: { S: thumbnail },
      isChecked: { BOOL: isChecked },
    },
  };

  const awsData = await runDbCommand(new PutItemCommand(params));
  console.log("Property succesfully created in DynamoDB");
  logg_into_cloud(`The user: ${userId} created the property with id ${pId}`);
  return awsData;
};

const updateProperty = async ({ userId, propertyId, new_data }) => {
  try {
    const params = {
      TableName,
      Item: {
        id: { S: propertyId },
        userId: { S: userId },
        address: { S: new_data.address },
        phone: { S: new_data.phone },
        details: { S: new_data.details },
        thumbnail: { S: new_data.thumbnail },
        isChecked: { BOOL: new_data.isChecked },
      },
    };

    const awsData = await runDbCommand(new PutItemCommand(params));
    console.log(`Property id: ${propertyId} succesfully checked in DynamoDB`);
    logg_into_cloud(`The user: ${userId} updated the property with id ${propertyId}
    
      ${JSON.stringify({
      id: { S: propertyId },
      userId: { S: userId },
      address: { S: new_data.address },
      phone: { S: new_data.phone },
      details: { S: new_data.details },
      thumbnail: { S: new_data.thumbnail },
      isChecked: { BOOL: new_data.isChecked }
    })}
    
    `);
    return awsData;
  } catch (err) {
    console.log(err)
  }
};
const deleteProperty = async ({
  userId,
  propertyId,
  // address,
  // phone,
  // details,
  // thumbnail,
  // isChecked,
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
    console.log(`Property id: ${propertyId} succesfully deleted in DynamoDB`);
    logg_into_cloud(`The user: ${userId} deleted the property with id ${propertyId}`);
    return awsData;
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  getUserProperties,
  createProperty,
  updateProperty,
  deleteProperty,
};
