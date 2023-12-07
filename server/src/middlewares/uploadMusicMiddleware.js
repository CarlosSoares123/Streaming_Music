const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'audio') {
      cb(null, path.join('uploads', 'musics'))
    } else if (file.fieldname === 'image') {
      cb(null, path.join('uploads', 'images'))
    } else {
      cb(new Error('Campo de arquivo não reconhecido'))
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 20 } 
})

module.exports = upload
