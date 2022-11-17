// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createResponse } = require('../utils/responseGenerator');

// 404 not found error handle
const notFoundHandler = (req, res, next) => {
  next(createResponse(404, 'Your request content was not found', true));
};

// Default error handler
const errorHandler = (error, req, res, next) => {
  //for check error come here console log

  if (error.data === 404) {
    res.json(createResponse(error.data, error.message, true));
  } else {
    // console.log(error)
    res.json(createResponse(null, 'Server Error', true));
  }
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
