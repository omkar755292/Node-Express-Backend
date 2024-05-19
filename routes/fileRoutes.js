const express = require('express');
const upload = require('../config/multer');

const fileRouter = express.Router();

// @desc: Upload
// @method: POST /api/upload
// @access: Public
fileRouter.post('/', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        res.status(200).json({
            fileName: req.file.filename,
            filePath: `./uploads/${req.file.filename}`, // Use a proper file path for serving
        });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = fileRouter;