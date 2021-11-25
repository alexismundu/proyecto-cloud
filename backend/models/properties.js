const { runDbCommand, awsItemsToJsObj } = require('../aws');
const { ScanCommand } = require('@aws-sdk/client-dynamodb');

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
      ':userId': { S: userId },
    },
    // Set the projection expression, which are the attributes that you want.
    ProjectionExpression: 'id, address, phone, details, thumbnail, isChecked',
    TableName: 'properties',
  };

  const awsData = await runDbCommand(new ScanCommand(params));
  return awsItemsToJsObj(awsData);
};

module.exports = { getUserProperties };
