const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/', controller.create);
router.delete('/', controller.remove);

module.exports = router;
