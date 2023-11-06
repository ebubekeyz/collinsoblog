const Advertise = require('../models/Advertise')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const {checkPermissions} = require('../utils')
const nodemailer = require('nodemailer')

const createAdvert = async(req, res) => {

    const { name, message } = req.body

    const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_HOST,
    port: process.env.GMAIL_PORT,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `"${name}" <${name}>`,
    to: 'info@collinsoblog.com',
    subject: 'Advert Request',
    html: `<div>
    <p style="text-transform: capitalize; font-weight: 700">${name}</p>
    <p style="text-transform: capitalize; font-weight: 700">${message}</p>
    </div>`,
  });


    const advertise = await Advertise.create({name, message})
    res.status(StatusCodes.CREATED).json({advertise})
}




module.exports = {createAdvert}