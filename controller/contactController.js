const asyncHandler = require('express-async-handler');
const contactModel = require('../models/contactModel');

//@desc: Get all Messages
//@methode: GET /api/contact/
//@access: Private
const getContacts = asyncHandler( async (req, res)=>{
    const getcontacts = await contactModel.find();
    res.status(200).json(getcontacts);
});

//@desc: Get Messages by id
//@methode: GET /api/contact/ID
//@access: Private
const getContact = asyncHandler( async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The messages is not Found");
    }
    res.status(200).json(getcontact);
});

//@desc: Create New Message
//@methode: POST /api/contact/
//@access: Public
const postContact = asyncHandler( async (req, res)=>{
    const{name, email, message} = req.body;
    if (!name || !email || !message) {
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }
    const createcontact = await contactModel.create(req.body);
    res.status(201).json(createcontact);
});

//@desc: Upadate existing Message
//@methode: PUT /api/contact/
//@access: Private
const upadateContact = asyncHandler (async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The messages is not Found");
    }
    const updatecontact = await contactModel.findByIdAndUpdate(req.params.id, req.body,{new: true});
    res.status(200).json(updatecontact);
})

//@desc: Delete existing Message
//@methode: DELETE /api/contact/
//@access: Private
const deleteContact = asyncHandler (async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The messages is not Found");
    }
    const deletecontact = await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletecontact);
});

//@desc: Get all Messages
//@methode: GET /api/contact/
//@access: Private
const deleteContacts = asyncHandler( async (req, res)=>{
    const deletecontacts = await contactModel.deleteMany();
    res.status(200).json(deletecontacts);
});

module.exports = {getContact, getContacts, postContact, upadateContact, deleteContact, deleteContacts}