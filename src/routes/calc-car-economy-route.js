'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/car-economy-controller');

router.get('', controller.get);
router.get('/:id', controller.getById);
router.post('', controller.post);
router.put('', controller.update);
router.delete('/:id',  controller.delete);

module.exports = router;