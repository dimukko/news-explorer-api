const { Joi } = require('celebrate');

const { emailSchema } = require('./email');
const { passwordSchema } = require('./password');
const { objectId } = require('./objectId');
const { linkSchema } = require('./link');
const { textSchema } = require('./text');
const { nameSchema } = require('./name');

const registrationJoi = Joi.object().keys({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

const loginJoi = Joi.object().keys({
  email: emailSchema,
  password: passwordSchema,
});

const objectIdJoi = Joi.object().keys({ id: objectId });

const articleJoi = Joi.object().keys({
  keyword: textSchema,
  title: textSchema,
  text: textSchema,
  date: textSchema,
  source: textSchema,
  link: linkSchema,
  image: linkSchema,
  owner: objectId,
});

module.exports = {
  registrationJoi,
  loginJoi,
  objectIdJoi,
  articleJoi,
};
