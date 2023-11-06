const Comment = require('../models/Comment')
const Article = require('../models/Articles')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const {checkPermissions} = require('../utils')

const createComment = async(req, res) => {
    const {article: articleId} = req.body
    const isValidArticle = await Article.findOne({_id: articleId})

    if(!isValidArticle){
        throw new CustomError.NotFoundError(`No article with id ${articleId}`)
    }

    req.body.user = req.user.userId
    const comment = await Comment.create(req.body)
    res.status(StatusCodes.CREATED).json({comment})
}

const getAllComment = async(req, res) => {
    const comment = await Comment.find({}).populate({
        path: 'user',
        select: 'name email facebook tiktok'
    }).populate({
        path: 'article',
        select: 'title description image category'
    })
    res.status(StatusCodes.OK).json({comment, count: comment.length})
}


const getSingleUserComment = async (req, res) => {
    const comment = await Comment.find({user: req.user.userId}).populate({
        path: 'article',
        select: 'title description image category'
    })
    res.status(StatusCodes.OK).json({comment, count: comment.length})
}

const updateComment = async(req, res) => {
    const {message} = req.body
    const {id: commentId} = req.params
    const comment = await Comment.findOne({_id: commentId})
    if(!commentId){
        throw new CustomError.BadRequestError(`No comment with id ${commentId} exist`)
    }
    comment.message = message

    await comment.save()
    res.status(StatusCodes.OK).json({msg: 'comment successfully updated'})
}

const deleteComment = async (req, res) => {
    const {id: commentId} = req.params
    const comment = await Comment.findByIdAndRemove({_id: commentId})
    if(!commentId){
        throw new CustomError.BadRequestError(`No comment with id ${commentId} exist`)
    }
    res.status(StatusCodes.OK).json({msg: 'comment successfully deleted'})
}

const getSingleArticleComment = async (req, res) => {
    const {id:articleId} = req.params
    const comment = await Comment.find({article: articleId})
    res.status(StatusCodes.OK).json({comment, count: comment.length})
}


module.exports = {createComment, getAllComment, getSingleUserComment, updateComment, deleteComment, getSingleArticleComment}