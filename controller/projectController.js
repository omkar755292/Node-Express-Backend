const asyncHandler = require('express-async-handler');
const projectModel = require('../models/projectModel');

//@desc: Get all Project
//@methode: GET /api/project/
//@access: Public
const getProjects = asyncHandler(async (req, res) => {
    const getprojects = await projectModel.find();
    res.status(200).json(getprojects);
});

//@desc: Get Project by id
//@methode: GET /api/project/ID
//@access: Public
const getProject = asyncHandler(async (req, res) => {
    const getproject = await projectModel.findById(req.params.id)
    if (!getproject) {
        res.status(404);
        throw new Error("The Project is not Found");
    }
    res.status(200).json(getproject);
});

//@desc: Create New Project
//@methode: POST /api/Project/
//@access: Private
const postProject = asyncHandler(async (req, res) => {
    const { title, description, projectUrl, projectImagePath } = req.body;
    
    console.log(req.body);
    if (!title || !description) {
        res.status(400);
        throw new Error("The title and desciption is mandatory");
    }
    const createproject = await projectModel.create(
        {
            title,
            description,
            projectUrl,
            projectImagePath
        });
    res.status(201).json(createproject);
});

//@desc: Update Project by id
//@methode: PUT /api/Project/ID
//@access: Private
const updateProject = asyncHandler(async (req, res) => {
    const getproject = await projectModel.findById(req.params.id);
    if (!getproject) {
        res.status(404);
        throw new Error("The project is not found");
    }
    const updateproject = await projectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateproject);
});

//@desc: Delete Project by id
//@methode: DELETE /api/Project/ID
//@access: Private
const deleteProject = asyncHandler(async (req, res) => {
    const getproject = await projectModel.findById(req.params.id);
    if (!getproject) {
        res.status(404);
        throw new Error("The project is not found");
    }
    const deleteproject = await projectModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteproject);
});

//@desc: Delete all Projects
//@methode: DELETE /api/Project/
//@access: Private
const deleteProjects = asyncHandler(async (req, res) => {
    const deleteprojects = await projectModel.deleteMany();
    res.status(200).json(deleteprojects);
});

module.exports = { getProjects, getProject, postProject, updateProject, deleteProject, deleteProjects }