const express = require('express');
const router = express.Router();
const controller = require('../controllers/city-params-uber-controller');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/', controller.put);

module.exports = router;