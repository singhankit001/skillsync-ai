const express = require('express');
const { analyzeSkills } = require('../controllers/skills.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect);

router.post('/analyze', analyzeSkills);

module.exports = router;
