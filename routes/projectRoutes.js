const express = require ('express');
const { getProjects, postProject, getProject } = require('../controller/projectController');

const projectRouter = express.Router();

projectRouter.route('/').get(getProjects);
projectRouter.route('/').post(postProject);
projectRouter.route('/:id').get(getProject);
projectRouter.route('/:id').put();
projectRouter.route('/:id').delete();

module.exports = projectRouter;