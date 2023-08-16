const express = require ('express');
const { getContacts, postContact, getContact, upadateContact, deleteContact, deleteContacts } = require('../controller/contactController');

const contactRouter = express.Router();

contactRouter.route('/').get(getContacts);
contactRouter.route('/').post(postContact);
contactRouter.route('/:id').get(getContact);
contactRouter.route('/:id').put(upadateContact);
contactRouter.route('/:id').delete(deleteContact);
contactRouter.route('/').delete(deleteContacts);

module.exports = contactRouter;