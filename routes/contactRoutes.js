const express = require ('express');
const { getContacts, postContact, getContact } = require('../controller/contactController');

const contactRouter = express.Router();

contactRouter.route('/').get(getContacts);
contactRouter.route('/').post(postContact);
contactRouter.route('/:id').get(getContact);
contactRouter.route('/:id').put();
contactRouter.route('/:id').delete();

module.exports = contactRouter;