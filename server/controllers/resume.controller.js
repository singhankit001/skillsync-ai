const asyncHandler = require('../middleware/async.middleware');
const ResumeAnalysis = require('../models/ResumeAnalysis.model');

// @desc    Analyze resume
// @route   POST /api/resume/analyze
// @access  Private
exports.analyzeResume = asyncHandler(async (req, res, next) => {
  // Mock AI parsing and scoring of a resume
  const analysisData = {
    resumeScore: 72,
    strengths: [
      "Good use of action verbs in the experience section.",
      "Clear contact information and GitHub link."
    ],
    weaknesses: [
      "Lacks quantifiable metrics (e.g., 'improved performance by X%').",
      "Skills section is not organized by category."
    ],
    missingKeywords: ["Agile", "REST APIs", "Unit Testing"],
    suggestedBullets: [
      {
        original: "Worked on frontend features using React.",
        improved: "Developed responsive frontend components using React, reducing load times by 15%."
      }
    ],
    atsTips: [
      "Use standard section headers like 'Work Experience' and 'Education'.",
      "Avoid multi-column layouts that confuse ATS parsers."
    ]
  };

  const resumeAnalysis = await ResumeAnalysis.create({
    user: req.user.id,
    ...analysisData
  });

  res.status(200).json({
    success: true,
    message: "Resume analyzed successfully",
    data: resumeAnalysis
  });
});

// @desc    Get latest resume report
// @route   GET /api/resume/report
// @access  Private
exports.getResumeReport = asyncHandler(async (req, res, next) => {
  const report = await ResumeAnalysis.findOne({ user: req.user.id }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: report || null
  });
});
