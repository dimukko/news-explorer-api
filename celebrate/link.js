const { Joi } = require('celebrate');
const { messages } = require('../tools/messages');
const { BadRequestErr } = require('../errors/index');

module.exports.linkSchema = Joi.string()
  .required()
  .regex(
    /^(?! )http(s)?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z0-9])[.-]?){1,}([a-zA-Z0-9])\.([a-zA-Z]{2,6}))(?::\d{2,5})?(?:[\\/?#]\S*)?/m,
  ).error(new BadRequestErr(messages.registration.isNotLink));
