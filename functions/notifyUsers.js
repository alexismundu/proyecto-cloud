"use strict";

const aws = require("aws-sdk");
const dynamoDB = new aws.DynamoDB({
  region: "us-east-1",
  apiVersion: "2012-08-10",
});

const usersTableName = "Users";
const propertiesTableName = "Properties";

exports.handler = async (event, context, callback) => {
  const properties = await getProperties(callback);
  const propertiesByUser = getPropertiesToNotifyByUser(properties);

  console.log(propertiesByUser);
};

const getPropertiesToNotifyByUser = (properties) => {
  const propertiesByUser = {};
  properties.forEach((property) => {
    const isReminderOn = property.isReminderOn.BOOL;
    if (isReminderOn && property.userId.S in propertiesByUser) {
      propertiesByUser[property.userId.S].push(property);
    } else if (isReminderOn) {
      propertiesByUser[property.userId.S] = [property];
    }
  });
  return propertiesByUser;
};

const getProperties = async (callback) => {
  const params = { TableName: propertiesTableName };
  try {
    const data = await dynamoDB.scan(params).promise();
    const properties = data.Items.map((property) => {
      return { ...property };
    });
    return properties;
  } catch (err) {
    console.log(err, err.stack); // an error occurred
    callback(err);
  }
};

const getUser = async (userId, callback) => {
  console.log("start getUser");
  const params = {
    TableName: usersTableName,
    Key: {
      id: {
        S: userId,
      },
    },
  };
  try {
    const data = await dynamoDB.getItem(params).promise();
    return data.Item;
  } catch (err) {
    console.log(err, err.stack); // an error occurred
    callback(err);
  }
};
