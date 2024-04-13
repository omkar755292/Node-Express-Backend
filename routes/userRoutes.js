const express = require('express');
const { Register, Login, Root } = require('../controller/userController');
const validateToken = require('../middleware/validateToken');

const userRouter = express.Router();

userRouter.route('/login').post(Login);
userRouter.route('/register').post(Register);
userRouter.route('/root').get(validateToken, Root);

module.exports = userRouter;