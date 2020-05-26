const router = require('express').Router();
const cors = require('cors');
const { corsOptions } = require('../appconfig');

router.use(cors(corsOptions));

module.exports = router;
