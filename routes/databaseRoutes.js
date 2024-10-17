const express = require('express');
const databaseController = require('../controllers/databaseController')

router = express.Router();

router.get('/', databaseController.landing_get);

module.exports = router
