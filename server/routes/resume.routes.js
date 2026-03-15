const express = require('express');
const { analyzeResume, getResumeReport } = require('../controllers/resume.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect);

router.post('/analyze', analyzeResume);
router.get('/report', getResumeReport);

module.exports = router;
