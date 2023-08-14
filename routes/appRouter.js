const express = require('express');
const blogRouter = require('./blogRoutes');
const projectRouter = require('./projectRoutes');
const contactRouter = require('./contactRoutes');

const appRouter = express.Router();

appRouter.route('/api/blog', blogRouter);
appRouter.route('/api/project', projectRouter);
appRouter.route('/api/contact', contactRouter);

module.exports = appRouter;