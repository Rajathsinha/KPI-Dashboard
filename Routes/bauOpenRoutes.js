// bauOpenRoutes.js

const express = require('express');
const router = express.Router();
const bauOpenController = require('../controllers/bauOpenController');

router.get('/', bauOpenController.getAll);
router.get('/all', bauOpenController.getAll1);

module.exports = router;
