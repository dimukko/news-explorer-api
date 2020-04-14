const router = require('express').Router();
const { messages } = require('../tools/messages');
const { NotFoundErr } = require('../errors');

router.all('*', (req, res, next) => next(new NotFoundErr(messages.root.isNotFound)));

module.exports = router;
