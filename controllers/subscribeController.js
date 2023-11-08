const Subscribe = require('../models/Comment')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')


const createSubscribe = async(req, res) => {
    const subscribe = await Subscribe.create(req.body)
    res.status(StatusCodes.CREATED).json({subscribe})
}

const getAllSubscribe = async(req, res) => {
    const subscribe = await Subscribe.find({})
    res.status(StatusCodes.OK).json({subscribe, count: subscribe.length})
}

const getSingleSubscribe = async (req, res) => {
    const {id:subscribeId} = req.params

    const subscribe = await Subscribe.findOne({_id: subscribeId})
    if(!subscribe){
        throw new CustomError.BadRequestError(`No user with id  ${subscribeId} was found`)
    }
    
    res.status(StatusCodes.OK).json({subscribe})
}
const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({user: req.user})
}


module.exports = {createSubscribe, getAllSubscribe, getSingleSubscribe}