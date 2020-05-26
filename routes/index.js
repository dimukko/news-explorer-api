const router = require('express').Router();
const { errors } = require('celebrate');
const middlewares = require('../middlewares/index');
const { errorHandler } = require('../middlewares/defaultErrorHandler');
const { requestLogger, errorLogger } = require('../middlewares/logs');
const registration = require('./reg');
const authorization = require('./auth');
const users = require('./users');
const logout = require('./logout');
const articles = require('./articles');
const error = require('./error');

router.use(middlewares);

router.use(requestLogger);

router.use('/signup', registration);
router.use('/signin', authorization);
router.use('/users', users);
router.use('/articles', articles);
router.use('/logout', logout);
router.use('*', error);


router.use(errorLogger);

router.use(errors());
router.use(errorHandler);

module.exports = router;
