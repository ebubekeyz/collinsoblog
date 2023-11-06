const express = require('express')
const router = express.Router()
const {authenticateUser, authenticatePermissions} = require('../middleware/authentication')

const {
    createArticle,
    getAllArticle,
    getSingleArticle,
    getSingleUserArticle,
    updateArticle,
    deleteArticle,
    uploadImageCloud
} = require('../controllers/articleController')


router.route('/uploadImageCloud').post(uploadImageCloud)
router.route('/singleUserArticle').get(authenticateUser, getSingleUserArticle)
router
.route('/')
.post(authenticateUser, createArticle).get([authenticateUser], getAllArticle)
router.route('/:id')
.get(getSingleArticle)
.patch([authenticateUser, authenticatePermissions('admin', 'owner')],updateArticle)
.delete([authenticateUser, authenticatePermissions('admin', 'owner')], deleteArticle)

module.exports = router

