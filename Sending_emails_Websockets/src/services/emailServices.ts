import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`E-mail enviado para ${to}`)
  } catch  {
    console.error(`Erro ao enviar e-mail para ${to}:`)
  }
}
