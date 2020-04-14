const { messages } = require('../tools/messages');

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? messages.root.serverErr : message,
  });
  next();
};

module.exports = {
  errorHandler,
};
