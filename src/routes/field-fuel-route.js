const express = require('express');
const router = express.Router();
const controller = require('../controllers/field-fuel-controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/', controller.put);

module.exports = router;