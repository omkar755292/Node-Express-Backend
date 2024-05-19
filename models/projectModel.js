const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, require: true, trim: true },
    projectUrl: String,
    projectImagePath: { type: String }
},
    { timestamps: true }
);

const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;