const { Joi } = require('celebrate');
const { messages } = require('../tools/messages');
const { BadRequestErr } = require('../errors/index');

module.exports.nameSchema = Joi.string()
  .required()
  .min(2)
  .regex(/^(?! )(?!.* $)(?!(?:.* ){5}).+$/im)
  .messages({
    'string.min': messages.text.isShort,
  })
  .error(new BadRequestErr(messages.registration.isWrong));
