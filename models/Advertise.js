const mongoose = require('mongoose')

const AdvertiseSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    message: {
        type: String,
      }

},{timestamps: true})

module.exports =  mongoose.model('Advertise', AdvertiseSchema)
