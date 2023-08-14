const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    message: { type: String, require: true, trim: true }
},
    { timestamps: true }
);

const contactModel = mongoose.model("messages", contactSchema);

module.exports = contactModel;