const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, require: true, trim: true},
    content: { type: String, require: true, trim: true},
    author: { type: String, require: true, trim: true},
    blogImg:{type: String}
},
    { timestamps: true }
);

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;