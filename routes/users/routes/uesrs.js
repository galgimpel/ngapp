'use strict';

var express = require('express');

var router = express.Router();
var ctrl = require('../controller/users');

router.route('/')
    .get(ctrl.users.get)
    .put(ctrl.users.update);

module.exports = router;