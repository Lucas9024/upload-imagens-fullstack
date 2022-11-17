const multer = require("multer");

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/upload/user')
        }, 
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + '_' + file.originalname)
        }
    }),
    
    fileFilter: (req, file, cb) => {
        const extensionImg = ['image/png', 'image/jpg', 'image/jpeg'].find
        (formatAcept => formatAcept == file.mimetype)

        if(extensionImg) {
            cb(null, true)
        }
        cb(null, false)
    }
}))