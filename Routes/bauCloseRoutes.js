// bauCloseRoutes.js

const express = require('express');
const router = express.Router();
const bauCloseController = require('../controllers/bauCloseController');

router.get('/', bauCloseController.getAll);
router.get('/all', bauCloseController.getAll1);

module.exports = router;
