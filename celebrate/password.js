const { Joi } = require('celebrate');
const { messages } = require('../tools/messages');

module.exports.passwordSchema = Joi.string()
  .required()
  .min(8)
  .regex(/^\S+$/)
  .messages({
    'any.required': messages.password.isRequired,
    'string.empty': messages.password.isEmpty,
    'string.min': messages.password.tooShort,
  });
