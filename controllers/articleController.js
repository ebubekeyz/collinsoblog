const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const Article = require('../models/Articles')
const path = require('path')
const cloudinary = require('cloudinary').v2
const fs = require('fs')


const createArticle = async(req, res) => {
   
    req.body.user = req.user.userId;
    const article = await Article.create(req.body)
    res.status(StatusCodes.CREATED).json({article})
}

const getAllArticle = async(req, res) => {
    const article = await Article.find({}).sort('-createdAt').populate({
        path: 'user',
        select: 'name email phone tiktok facebook image'
    })
    res.status(StatusCodes.OK).json({article, count: article.length})
}

const getSingleArticle = async (req, res) => {
    const {id: articleId} = req.params
    const article = await Article.findOne({_id: articleId})
    if(!article){
        throw new CustomError.BadRequestError(`No article with id ${articleId}`)
    }
    res.status(StatusCodes.OK).json({article})
}
const getSingleUserArticle = async (req, res) => {
    const article = await Article.findOne({user: req.user.userId})

    res.status(StatusCodes.OK).json({article})
}

const updateArticle = async (req, res) => {
    const {id: articleId} = req.params
    const article = await Article.findOneAndUpdate({_id: articleId}, req.body, {
        new: true, 
        runValidators: true
    })
    if(!article){
        throw new CustomError.BadRequestError(`No article with id ${articleId}`)
    }
    res.status(StatusCodes.OK).json({article})
}

const deleteArticle = async(req, res) => {
    const {id: articleId} = req.params
    const article = Article.findOne({_id: articleId})

    if(!article){
        throw new CustomError.BadRequestError(`No article with id ${articleId}`)
    }

    // await product.remove()

    await article.deleteOne()

    res.status(StatusCodes.OK).json({msg: 'Article Removed'})
}




const uploadImageCloud = async(req, res) => {
    console.log(req.files)
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath, {
            use_filename: true, folder: 'collinsoblog',
        }
    )
    
    fs.unlinkSync(req.files.image.tempFilePath)
    return res.status(StatusCodes.OK).json({image: {src: result.secure_url}})
}
const uploadVideoCloud = async(req, res) => {
    console.log(req.files)
    const result = await cloudinary.uploader.upload(
        req.files.video.tempFilePath, {
            resource_type: 'video',
            use_filename: true, folder: 'collinsoblog',
        }
    )
    
    fs.unlinkSync(req.files.video.tempFilePath)
    return res.status(StatusCodes.OK).json({video: {src: result.secure_url}})
}

module.exports = {
    createArticle,
    getAllArticle,
    getSingleArticle,
    getSingleUserArticle,
    updateArticle,
    deleteArticle,
    uploadImageCloud,
    uploadVideoCloud
}