const mongoose = require('mongoose');

const ResumeAnalysisSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  resumeScore: {
    type: Number,
    required: true
  },
  strengths: [String],
  weaknesses: [String],
  missingKeywords: [String],
  suggestedBullets: [{
    original: String,
    improved: String
  }],
  atsTips: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ResumeAnalysis', ResumeAnalysisSchema);
