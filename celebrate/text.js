const { Joi } = require('celebrate');
const { messages } = require('../tools/messages');

module.exports.textSchema = Joi.string().required().min(2).messages({
  'string.min': messages.text.isShort,
});
