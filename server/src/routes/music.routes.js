const express = require('express')
const router = express.Router()
const VerifyToken = require('../middlewares/authMiddleware')
const upload = require('../middlewares/uploadMusicMiddleware')

const musicControllers = require('../controllers/musicControllers')

router.post(
  '/addMusic',
  VerifyToken,
  upload.fields([
    { name: 'audio', maxCount: 1 },
    { name: 'image', maxCount: 1 }
  ]),
  musicControllers.addMusic
)

router.get('/list', VerifyToken, musicControllers.List)
router.get('/mylist', VerifyToken, musicControllers.MyList)
// router.get('/:id/play', VerifyToken, musicControllers.Play)
router.delete('/:id/delete', VerifyToken, musicControllers.Delete)

module.exports = router
