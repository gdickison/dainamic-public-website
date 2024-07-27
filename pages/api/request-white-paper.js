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
    const whitePaperTitle = req.body.templateParams.paperId.split('-');
    for(let i = 0; i < whitePaperTitle.length; i++){
      whitePaperTitle[i] = whitePaperTitle[i][0].toUpperCase() + whitePaperTitle[i].substr(1)
    };

    const whitePaperRequest = {
      from: '"Dainamic Whitepaper Request" <contact-form@bluecanoemailer.dev>',
      to: `${req.body.templateParams.email}`,
      subject: `Request for ${whitePaperTitle}`,
      replyTo: 'no-reply@dainamic.ai',
      text: `You requested the Dainamic.AI whitepaper ${whitePaperTitle} from ${req.body.templateParams.firstName} ${req.body.templateParams.lastName}. Click <a href="https://dainamic.ai/whitepaper-download/${req.body.templateParams.paperId}">here</a> to download it. Thank you!`,
      html: `
        <p>You have requested the whitepaper ${whitePaperTitle.join(" ")}</p>
        <p>Click <a href="https://dainamic.ai/whitepaper-download/${req.body.templateParams.paperId}">here</a> to download it.<p>
        <p>Thank you for your interest!</p>
        <p>The Dainamic AI Team</p>
      `
    }

    const notice = {
      from: '"Notice of Dainamic Whitepaper Request" <contact-form@bluecanoemailer.dev>',
      to: "christos@dainamic.ai",
      bcc: "greg@bluecanoe.dev",
      replyTo: `"${req.body.templateParams.firstName} ${req.body.templateParams.lastName}" <${req.body.templateParams.email}>`,
      subject: `A Request Was Made For ${whitePaperTitle}`,
      text: `The whitepaper ${whitePaperTitle} was requested by ${req.body.templateParams.firstName} ${req.body.templateParams.lastName}`,
      html: `
        <p>${req.body.templateParams.firstName} ${req.body.templateParams.lastName} requested the whitepaper ${whitePaperTitle.join(" ")}</p>
        <p>Company: ${req.body.templateParams.company}</p>
        <p>Phone Number: ${req.body.templateParams.phone}<p>
        <p>Email: ${req.body.templateParams.email}</p>
        <p>Message:</p>
        <p>${req.body.templateParams.message}</p>
      `
    }

    await transporter.sendMail(whitePaperRequest);
    await transporter.sendMail(notice);

    return res.json({status: 200})

  } catch {
  
    return res.json({status: 400})

  }
}
