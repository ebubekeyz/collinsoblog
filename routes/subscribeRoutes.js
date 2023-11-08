const express = require('express')

const router = express.Router()


const {createSubscribe, getAllSubscribe, getSingleSubscribe} = require('../controllers/subscribeController')


router.route('/').get(getAllSubscribe).post(createSubscribe)
router.route('/:id').get(getSingleSubscribe)

module.exports = router