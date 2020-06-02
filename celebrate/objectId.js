const { Joi } = require('celebrate');
const { messages } = require('../tools/messages');

module.exports.objectId = Joi.string().alphanum().length(24).messages({
  'string.alphanum': messages.article.id.isNotValid,
  'string.length': messages.article.id.isLength,
});
