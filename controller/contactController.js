const asyncHandler = require('express-async-handler');
const contactModel = require('../models/contactModel');

//@desc: Get all Messages
//@methode: GET /api/contact/
//@access: Public
const getContacts = asyncHandler( async (req, res)=>{
    const getcontacts = await contactModel.find();
    res.json({getcontacts,message: "All messages available in Database"});
});

//@desc: Get Messages by id
//@methode: GET /api/contact/ID
//@access: Public
const getContact = asyncHandler( async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The messages is not Found");
    }
    res.json({getcontact, message:"This is message detail you requisted for"});
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
    res.json({createcontact, message: "New message is created"});
});

//@desc: Upadate existing Message
//@methode: PUT /api/contact/
//@access: Public
const upadateContact = asyncHandler (async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The messages is not Found");
    }
    const updatecontact = await contactModel.findByIdAndUpdate(req.params.id, req.body,{new: true});
    res.status(200).json({updatecontact, message: "This message is updated"});
})

//@desc: Delete existing Message
//@methode: DELETE /api/contact/
//@access: Public
const deleteContact = asyncHandler (async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The messages is not Found");
    }
    const deletecontact = await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json({deletecontact, message:"This message is deleted"});
});

//@desc: Get all Messages
//@methode: GET /api/contact/
//@access: Public
const deleteContacts = asyncHandler( async (req, res)=>{
    const deletecontacts = await contactModel.deleteMany();
    res.json({deletecontacts, message: "All messages are deleted"});
});

module.exports = {getContact, getContacts, postContact, upadateContact, deleteContact, deleteContacts}