const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: String,
  type: {
    type: String,
    enum: ['Remote', 'Hybrid', 'On-site']
  },
  experienceLevel: String,
  requiredSkills: [String],
  matchScore: Number,
  missingSkills: [String],
  matchReason: String, // AI explanation
  applyUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', JobSchema);
