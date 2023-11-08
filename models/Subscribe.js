const mongoose = require('mongoose')

const SubscribeSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports =  mongoose.model('Subscribe', SubscribeSchema)
