const express = require('express');
const { getContacts, postContact, getContact, upadateContact, deleteContact, deleteContacts } = require('../controller/contactController');
const validateToken = require('../middleware/validateToken');

const contactRouter = express.Router();

contactRouter.route('/').get(validateToken, getContacts);
contactRouter.route('/').post(postContact);
contactRouter.route('/:id').get(validateToken, getContact);
contactRouter.route('/:id').put(validateToken, upadateContact);
contactRouter.route('/:id').delete(validateToken, deleteContact);
contactRouter.route('/').delete(validateToken, deleteContacts);

module.exports = contactRouter;