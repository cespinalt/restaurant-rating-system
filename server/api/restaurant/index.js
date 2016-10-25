const express = require('express');
const router = express.Router();
const controller = require('./restaurant.controller');

router.get('/', controller.all);
router.post('/', controller.add);
router.delete('/', controller.delete);
router.post('/rate/', controller.rate);

module.exports = router
