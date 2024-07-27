// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.APPLICATION_EMAIL_HOST,
  auth: {
    user: process.env.APPLICATION_EMAIL_USER,
    pass: process.env.APPLICATION_EMAIL_PASSWORD
  },
  secure: true
});

export default async function handler(req, res) {

  try {
    const contactRequest = {
      from: '"Website Contact Request" <contact-form@bluecanoemailer.dev>',
      to: "christos@dainamic.ai",
      bcc: "greg@bluecanoe.dev",
      replyTo: `"${req.body.contactParams.name}" <${req.body.contactParams.email}>`,
      subject: `You Have a Contact Request from ${req.body.contactParams.name}`,
      text: `You have a contact request from  ${req.body.contactParams.name} of ${req.body.contactParams.bank}: ${req.body.contactParams.message}`,
      html: `
        <p>You have a contact request from  ${req.body.contactParams.name} of ${req.body.contactParams.bank}:</p>
        <p>Message: ${req.body.contactParams.message}</p>
      `
    }

    await transporter.sendMail(contactRequest);

    return res.json({status: 200})

  } catch {
  
    return res.json({status: 400})

  }
}
