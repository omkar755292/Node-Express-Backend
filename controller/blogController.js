const asyncHandler = require('express-async-handler');
const blogModel = require('../models/blogModel');

//@desc: Get all Blogs
//@methode: GET /api/blog/
//@access: Public
const getBlogs = asyncHandler( async (req, res)=>{
    const getblogs = await blogModel.find();
    res.json({getblogs, message:"This all blogs available in database"});
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
    res.json({getblog, message:`The requisted blog for Id ${req.params.id}` });
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
    res.json({createblog, message:"The new blog is created"});
});

//@desc: Update Existing Blog
//@methode: PUT /api/blog/ID
//@access: Public
const updateBlog = asyncHandler( async (req, res)=>{
   const getblog = await blogModel.findById(req.params.id);
   if (!getblog) {
    res.status(404);
    throw new Error ('blog is not found');
   }
   const updateblog = await blogModel.findByIdAndUpdate(req.params.id, req.body,{new: true});
   res.json({updateblog, message:"This blog updated in database"});
});

//@desc: Delete Existing Blog by id
//@methode: DELETE /api/blog/ID
//@access: Public
const deleteBlog = asyncHandler( async(req, res)=>{
    const getblog = await blogModel.findById(req.params.id);
    if (!getblog) {
        res.status(404);
        throw new Error ("The blog is not Found");
    }
    const deleteblog = await blogModel.findByIdAndDelete(req.params.id);
    res.json({deleteblog, message:"This blog is deleted from database"});
});

//@desc: Delete All Blog
//@methode: DELETE /api/blog/
//@access: Public
const deleteBlogs = asyncHandler (async (req, res)=>{
    const deleteblogs = await blogModel.deleteMany();
    res.json({deleteblogs, message: "All blogs are Deleted"});
});

module.exports = {getBlogs, getBlog, postBlog, updateBlog, deleteBlog, deleteBlogs}