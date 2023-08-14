const asyncHandler = require('express-async-handler');
const blogModel = require('../models/blogModel');

//@desc: Get all Blogs
//@methode: GET /api/blog/
//@access: Public
const getBlogs = asyncHandler( async (req, res)=>{
    const getblogs = await blogModel.find();
    res.json(getblogs);
});

//@desc: Get Blog by id
//@methode: GET /api/blog/ID
//@access: Public
const getBlog = asyncHandler( async (req, res)=>{
    const getblog = await blogModel.findById(req.params.id);
    if (!getblog) {
        res.status(404);
        throw new Error ("The blog is not Found");
    }
    res.json(getblog);
});

//@desc: Create New Blog
//@methode: POST /api/blog/
//@access: Public
const postBlog = asyncHandler( async (req, res)=>{
    const{title, content, author} = req.body;
    if (!title || !content || !author) {
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }
    const createblog = await blogModel.create(req.body);
    res.json(createblog);
    console.log(req.body, "new Blog is created");
});

module.exports = {getBlogs, getBlog, postBlog}