const express = require ('express');
const { getProjects, postProject, getProject, updateProject, deleteProject, deleteProjects } = require('../controller/projectController');

const projectRouter = express.Router();

projectRouter.route('/').get(getProjects);
projectRouter.route('/').post(postProject);
projectRouter.route('/:id').get(getProject);
projectRouter.route('/:id').put(updateProject);
projectRouter.route('/:id').delete(deleteProject);
projectRouter.route('/').delete(deleteProjects);

module.exports = projectRouter;