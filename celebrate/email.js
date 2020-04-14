const { Joi } = require('celebrate');
const { messages } = require('../tools/messages');

module.exports.emailSchema = Joi.string().required().email().messages({
  'any.required': messages.registration.isRequired,
  'string.email': messages.registration.isNotEmail,
});
