const asyncHandler = require('../middleware/async.middleware');
const ErrorResponse = require('../utils/errorResponse');
const Project = require('../models/Project.model');
const projectService = require('../services/project.service');

// @desc    Suggest projects based on profile
// @route   POST /api/projects/suggest
// @access  Private
exports.suggestProjects = asyncHandler(async (req, res, next) => {
  const { skills, targetRole } = req.user;

  const projectsData = await projectService.suggestProjects(skills, targetRole);

  res.status(200).json({
    success: true,
    message: "Projects suggested successfully",
    data: projectsData
  });
});

// @desc    Save a project to DB (if user chooses it)
// @route   POST /api/projects/save
// @access  Private
exports.saveProject = asyncHandler(async (req, res, next) => {
  // Here we would normally save a reference to the user's profile
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    data: project
  });
});
