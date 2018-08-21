const express = require('express');
const router = express.Router();
const controller = require('../controllers/car-cost-controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/:id', controller.put);

module.exports = router;