const express = require ('express');
const { postBlog, getBlogs, getBlog, updateBlog, deleteBlog, deleteBlogs } = require('../controller/blogController');

const blogRouter = express.Router();

blogRouter.route('/').get(getBlogs);
blogRouter.route('/').post(postBlog);
blogRouter.route('/:id').get(getBlog);
blogRouter.route('/:id').put(updateBlog);
blogRouter.route('/:id').delete(deleteBlog);
blogRouter.route('/').delete(deleteBlogs);

module.exports = blogRouter;