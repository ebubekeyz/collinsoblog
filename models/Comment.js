const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    article: {
        type: mongoose.Types.ObjectId,
        ref: 'Article',
        required: true,
      },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
      }
},{timestamps: true})

module.exports =  mongoose.model('Comment', CommentSchema)
