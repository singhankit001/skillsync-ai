const asyncHandler = require('../middleware/async.middleware');
const Chat = require('../models/Chat.model');
const chatService = require('../services/chat.service');

// @desc    Send a message to AI Chatbot
// @route   POST /api/chat/message
// @access  Private
exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { message } = req.body;

  // Generate AI Response
  const aiResponse = await chatService.generateChatResponse(message, req.user);

  // Find or create chat session
  let chat = await Chat.findOne({ user: req.user.id });

  if (!chat) {
    chat = await Chat.create({
      user: req.user.id,
      messages: []
    });
  }

  chat.messages.push({ role: 'user', content: message });
  chat.messages.push({ role: 'assistant', content: aiResponse });
  await chat.save();

  res.status(200).json({
    success: true,
    data: {
      userMessage: message,
      aiResponse: aiResponse
    }
  });
});

// @desc    Get chat history
// @route   GET /api/chat/history
// @access  Private
exports.getHistory = asyncHandler(async (req, res, next) => {
  const chat = await Chat.findOne({ user: req.user.id });

  res.status(200).json({
    success: true,
    data: chat ? chat.messages : []
  });
});
