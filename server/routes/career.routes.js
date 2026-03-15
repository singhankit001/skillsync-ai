const express = require('express');
const { analyzeCareer, getCareerReport, generateRoadmap } = require('../controllers/career.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

// Apply protection to all career routes
router.use(protect);

router.post('/analyze', analyzeCareer);
router.get('/report', getCareerReport);
router.post('/roadmap', generateRoadmap);

module.exports = router;
