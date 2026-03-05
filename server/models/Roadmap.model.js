const mongoose = require('mongoose');

const RoadmapSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  targetRole: String,
  timeline: {
    type: String,
    enum: ['30 Days', '60 Days', '90 Days'],
    required: true
  },
  weeklyTasks: [{
    week: Number,
    focusArea: String,
    tasks: [{
      title: String,
      description: String,
      isCompleted: {
        type: Boolean,
        default: false
      }
    }]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Roadmap', RoadmapSchema);
