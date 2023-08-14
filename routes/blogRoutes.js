const express = require ('express');
const { postBlog, getBlogs, getBlog } = require('../controller/blogController');

const blogRouter = express.Router();

blogRouter.route('/').get(getBlogs);
blogRouter.route('/').post(postBlog);
blogRouter.route('/:id').get(getBlog);
blogRouter.route('/:id').put();
blogRouter.route('/:id').delete();

module.exports = blogRouter;