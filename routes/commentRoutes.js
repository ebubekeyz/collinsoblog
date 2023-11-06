const express = require('express')

const router = express.Router()

const {authenticateUser, authenticatePermissions} = require('../middleware/authentication')

const {createComment, getAllComment, getSingleUserComment, updateComment, deleteComment, getSingleArticleComment} = require('../controllers/commentController')


router.route('/').get([authenticateUser], getAllComment).post([authenticateUser], createComment)
router.route('/showComment').get(authenticateUser, getSingleUserComment)
router.route('/:id').patch([authenticateUser], updateComment).delete([authenticateUser, authenticatePermissions('admin')], deleteComment)
router.route('/:id/article').get(authenticateUser, getSingleArticleComment)

module.exports = router