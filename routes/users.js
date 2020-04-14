const router = require('express').Router();
const { celebrate } = require('celebrate');
const { auth } = require('../middlewares/auth');
const { getUser } = require('../controllers/users');
const { objectIdJoi } = require('../celebrate');

router.use(auth);

router.get('/me', celebrate({ params: objectIdJoi }), getUser);

module.exports = router;
