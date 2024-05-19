const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../backup/media/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, file.originalname + '_' + uniqueSuffix);
    }
})

const upload = multer({ storage })

module.exports = upload;
