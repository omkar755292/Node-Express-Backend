const express = require('express');
const { postBlog, getBlogs, getBlog, updateBlog, deleteBlog, deleteBlogs } = require('../controller/blogController');
const validateToken = require('../middleware/validateToken');

const blogRouter = express.Router();

blogRouter.route('/').get(getBlogs);
blogRouter.route('/').post(validateToken, postBlog);
blogRouter.route('/:id').get(getBlog);
blogRouter.route('/:id').put(validateToken, updateBlog);
blogRouter.route('/:id').delete(validateToken, deleteBlog);
blogRouter.route('/').delete(validateToken, deleteBlogs);

module.exports = blogRouter;