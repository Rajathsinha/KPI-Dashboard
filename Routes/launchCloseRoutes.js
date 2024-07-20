// launchCloseRoutes.js

const express = require('express');
const router = express.Router();
const launchCloseController = require('../controllers/launchCloseController');

router.get('/', launchCloseController.getAll);
router.get('/all', launchCloseController.getAll1);

module.exports = router;
