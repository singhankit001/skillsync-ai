const express = require('express');
const { sendMessage, getHistory } = require('../controllers/chat.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect);

router.post('/message', sendMessage);
router.get('/history', getHistory);

module.exports = router;
