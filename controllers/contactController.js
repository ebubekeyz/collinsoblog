const Contact = require('../models/Contact')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const {checkPermissions} = require('../utils')
const nodemailer = require('nodemailer')

const createContact = async(req, res) => {

    const { email, message } = req.body

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
    from: `"${email}" <${email}>`,
    to: 'info@collinsoblog.com',
    subject: 'Contact from your blog Site',
    html: `<div>
    <p style="text-transform: capitalize; font-weight: 700">${email}</p>
    <p style="text-transform: capitalize; font-weight: 700">${message}</p>
    </div>`,
  });


    const contact = await Contact.create({email, message})
    res.status(StatusCodes.CREATED).json({contact})
}


module.exports = {createContact}
