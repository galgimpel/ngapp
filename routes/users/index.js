'use strict';

var express = require('express');

var router = express.Router();

router.use('/users', require('./routes/uesrs'));

module.exports = router;