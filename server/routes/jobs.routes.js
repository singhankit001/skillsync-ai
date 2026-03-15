const express = require('express');
const { getJobRecommendations } = require('../controllers/jobs.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect);

router.get('/recommendations', getJobRecommendations);

module.exports = router;
