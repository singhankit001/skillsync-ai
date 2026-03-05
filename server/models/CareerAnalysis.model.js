const mongoose = require('mongoose');

const CareerAnalysisSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  careerScore: {
    type: Number,
    required: true
  },
  recommendedRoles: [{
    role: String,
    matchPercentage: Number,
    reason: String
  }],
  missingSkills: [{
    skill: String,
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low']
    }
  }],
  interviewPlan: [String],
  resumeTips: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CareerAnalysis', CareerAnalysisSchema);
