const asyncHandler = require('express-async-handler');
const contactModel = require('../models/contactModel');

//@desc: Get all Messages
//@methode: GET /api/contact/
//@access: Public
const getContacts = asyncHandler( async (req, res)=>{
    const getcontacts = await contactModel.find();
    res.json(getcontacts);
});

//@desc: Get Messages by id
//@methode: GET /api/contact/ID
//@access: Public
const getContact = asyncHandler( async (req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        res.status(404);
        throw new Error ("The message is not Found");
    }
    res.json(getcontact);
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
    res.json(createcontact);
    console.log(req.body, "new message is created");
});

module.exports = {getContact, getContacts, postContact}