const express = require('express');
const { suggestProjects, saveProject } = require('../controllers/projects.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect);

router.post('/suggest', suggestProjects);
router.post('/save', saveProject);

module.exports = router;
