const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.post('/parse', controller.getData)

module.exports = router;