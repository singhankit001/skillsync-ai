const asyncHandler = require('../middleware/async.middleware');
const Job = require('../models/Job.model');

// @desc    Get job recommendations
// @route   GET /api/jobs/recommendations
// @access  Private
exports.getJobRecommendations = asyncHandler(async (req, res, next) => {
  // Mock finding jobs based on user skills
  const jobs = [
    {
      title: "Frontend Developer Intern",
      company: "TechNova Solutions",
      location: "San Francisco, CA",
      type: "Hybrid",
      experienceLevel: "Internship",
      requiredSkills: ["React", "JavaScript", "CSS"],
      matchScore: 92,
      missingSkills: ["TypeScript"],
      matchReason: "Your strong React and JavaScript skills make this a near-perfect match. Learning TypeScript will close the gap entirely.",
      applyUrl: "https://example.com/apply/1"
    },
    {
      title: "Junior UI Engineer",
      company: "CreativeApp",
      location: "Remote",
      type: "Remote",
      experienceLevel: "Entry Level",
      requiredSkills: ["React", "Tailwind CSS", "Figma"],
      matchScore: 85,
      missingSkills: ["Figma"],
      matchReason: "Matches your React and Tailwind proficiency. Familiarity with Figma is a plus but often taught on the job.",
      applyUrl: "https://example.com/apply/2"
    }
  ];

  res.status(200).json({
    success: true,
    data: jobs
  });
});
