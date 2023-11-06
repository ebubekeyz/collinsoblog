const express = require('express')

const router = express.Router()


const {createAdvert} = require('../controllers/advertiseController')


router.route('/').post(createAdvert)


module.exports = router