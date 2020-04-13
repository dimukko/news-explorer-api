const ForbiddenErr = require('./forbidden');
const BadRequestErr = require('./badRequest');
const NotAuthorizedErr = require('./notAuth');
const NotFoundErr = require('./notFound');
const NotUniqueErr = require('./notUnique');

module.exports = {
  ForbiddenErr,
  BadRequestErr,
  NotAuthorizedErr,
  NotFoundErr,
  NotUniqueErr,
};
