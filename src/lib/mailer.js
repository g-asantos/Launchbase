const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "42c28ab8321bcc",
    pass: "b631c4f59e96c0"
  }
});
