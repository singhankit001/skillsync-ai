const asyncHandler = require('../middleware/async.middleware');
const ErrorResponse = require('../utils/errorResponse');
const CareerAnalysis = require('../models/CareerAnalysis.model');
const Roadmap = require('../models/Roadmap.model');
const careerService = require('../services/career.service');

// @desc    Generate comprehensive career analysis
// @route   POST /api/career/analyze
// @access  Private
exports.analyzeCareer = asyncHandler(async (req, res, next) => {
  // In a real app, we'd use req.user mixed with req.body inputs
  const userProfile = {
    ...req.user._doc,
    ...req.body
  };

  // Call the AI service
  const analysisData = await careerService.generateCareerAnalysis(userProfile);

  // Save to DB
  const analysis = await CareerAnalysis.create({
    user: req.user.id,
    ...analysisData
  });

  res.status(200).json({
    success: true,
    message: "Career analysis generated successfully",
    data: analysis
  });
});

// @desc    Get latest career report
// @route   GET /api/career/report
// @access  Private
exports.getCareerReport = asyncHandler(async (req, res, next) => {
  const analysis = await CareerAnalysis.findOne({ user: req.user.id }).sort({ createdAt: -1 });

  if (!analysis) {
    return next(new ErrorResponse('No career analysis found', 404));
  }

  res.status(200).json({
    success: true,
    data: analysis
  });
});

// @desc    Generate Roadmap
// @route   POST /api/career/roadmap
// @access  Private
exports.generateRoadmap = asyncHandler(async (req, res, next) => {
  const analysis = await CareerAnalysis.findOne({ user: req.user.id }).sort({ createdAt: -1 });
  
  if (!analysis) {
    return next(new ErrorResponse('Please generate a career analysis first', 400));
  }

  const roadmapData = await careerService.generateRoadmap(req.user, analysis.missingSkills);

  const roadmap = await Roadmap.create({
    user: req.user.id,
    targetRole: req.user.targetRole || "Software Engineer",
    ...roadmapData
  });

  res.status(200).json({
    success: true,
    message: "Roadmap generated successfully",
    data: roadmap
  });
});
