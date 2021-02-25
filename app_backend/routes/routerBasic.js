const express = require('express');
const controllerBasic = require('../controllers/controllerBasic');

const router = express.Router();

router.route('/')
    .get(controllerBasic.getIndex);


module.exports = router;