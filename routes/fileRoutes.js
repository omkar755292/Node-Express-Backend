const express = require('express');
const upload = require('../config/multer');

const fileRouter = express.Router();

//@desc: Upload
//@methode: Post /api/upload
//@access: Public
fileRouter.route('/').post(upload.single('file'), async (req, res) => {
    res.status(200).json({
        fileName: req.file.filename,
        filePath: `../../backup/media/images/${req.file.filename}`,
    });
    
});

module.exports = fileRouter;