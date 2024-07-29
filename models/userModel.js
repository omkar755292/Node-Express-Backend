const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    displayName: { type: String, require: true, trim: true },
    role: { type: String, enum: ['user' | 'admin'], default: 'user', require: true },
    email: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true }
},
    { timestamps: true }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;