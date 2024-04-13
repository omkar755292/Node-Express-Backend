const express = require('express');
const { getProjects, postProject, getProject, updateProject, deleteProject, deleteProjects } = require('../controller/projectController');
const validateToken = require('../middleware/validateToken');

const projectRouter = express.Router();

projectRouter.route('/').get(getProjects);
projectRouter.route('/').post(validateToken, postProject);
projectRouter.route('/:id').get(getProject);
projectRouter.route('/:id').put(validateToken, updateProject);
projectRouter.route('/:id').delete(validateToken, deleteProject);
projectRouter.route('/').delete(validateToken, deleteProjects);

module.exports = projectRouter;