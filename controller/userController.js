const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc: Register User
//@route: POST /api/register
//@acess: public
const Register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(404);
        throw new Error("All Fields are Mandatory");
    }
    const userExist = await userModel.findOne({ email });
    if (userExist) {
        res.status(401);
        throw new Error("User already Exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create(
        {
            displayName: name,
            email: email,
            password: hashPassword
        }
    );
    res.status(201).json(user);
});

//@desc: Login User
//@route: POST /api/login
//@acess: public
const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email, !password) {
        res.status(401);
        throw new Error("All Fields are mandatory");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        res.status(404);
        throw new Error("User Not Exist");
    }
    let passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch && user) {
        const accesToken = jwt.sign({
            user: {
                name: user.displayName,
                email: user.email,
                id: user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

        res.status(200).json(accesToken);

    } else {
        res.status(401);
        throw new Error("Invalid Password or Email");
    }
});

//@desc: Get User Details
//@route: GET /api/root
//@acess: private
const Root = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});
module.exports = { Register, Login, Root }