// launchCloseRoutes.js

const express = require('express');
const router = express.Router();
const launchOpenController = require('../controllers/LaunchOpenController');

router.get('/', launchOpenController.getAll);
router.get('/ALL', launchOpenController.getAll1);

module.exports = router;
