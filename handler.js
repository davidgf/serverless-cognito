'use strict';

module.exports.hiGuests = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi! You are a guest'
    }),
  };

  callback(null, response);
};

module.exports.hiUsers = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You are a registered user!'
    }),
  };

  callback(null, response);
};
