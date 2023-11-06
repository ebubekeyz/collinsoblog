const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
      title: {
        type: String,
      },

      description: {
        type: String,
      },

      image: {
        type: String,
        default: 'https://res.cloudinary.com/dsrtdywmf/image/upload/v1699129797/collinsoblog/tmp-1-1699129775708_z9ohkh.jpg',
      },

      category: {
        type: String,
        required: [true, 'Please provide category'],
        enum: ['news', 'makemoney', 'insurance', 'bankproducts', 'fintech', 'products', 'events', 'foodbank'],
      },

      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
      },

},{ timestamps: true })

module.exports  = mongoose.model('Article', ArticleSchema)