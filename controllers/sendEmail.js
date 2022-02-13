// const nodemailer = require('nodemailer')
const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
const sendEmailSend = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'geovanni.stiedemann25@ethereal.email',
      pass: 'Zag1P2XGGqz1h2VaUZ',
    },
  })
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <angkit21@example.com>', // sender address
    to: 'geovanni.stiedemann25@ethereal.email', // list of receivers
    subject: 'Trying out color in html  ✔', // Subject line
    // plain text body
    html: `<div style="background-color:red ; color:white; height:100vh; width:100vw;" >sending mail with node js</div>`, // html body
  })

  console.log('Message sent: %s', info.messageId)
  res.json(info)
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // console.log(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'angkithashamsa21@gmail.com', // Change to your recipient
    from: 'hashamsaa@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  let info = await sgMail.send(msg)

  res.json(info)
}
module.exports = sendEmail
