const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { messages } = require('../tools/messages');
const settings = require('../appconfig');
const {
  NotUniqueErr,
  NotFoundErr,
  NotAuthorizedErr,
} = require('../errors');

const createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 8)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => res.status(201).send({
      name: user.name, email: user.email, message: messages.registration.isSuccessful,
    }))
    .catch((err) => next(new NotUniqueErr(err.message)));
};


const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      res.cookie('jwt', jwt.sign({ _id: user._id }, settings.JWT_SECRET), {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      });
      res.send({ message: messages.authorization.isSuccessful });
    })
    .catch((err) => next(new NotAuthorizedErr(err.message)));
};

const getUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundErr(`${messages.user.id.isNotFound}`))
    .then((user) => res.send({ info: { name: user.name, email: user.email } }))
    .catch(next);
};

const logout = (req, res, next) => {
  res
    .status(200)
    .clearCookie('jwt', {
      httpOnly: true,
      sameSite: true,
    })
    .end();
};

module.exports = {
  getUser,
  createUser,
  loginUser,
  logout,
};
