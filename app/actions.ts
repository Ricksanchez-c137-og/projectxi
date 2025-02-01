"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  })

  const mailOptions = {
    from: `"${name}" <${email}>`, 
    to: "mohammedsfnofal@gmail.com", 
    subject: "New Contact Form Submission",
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("✅ Email sent successfully")

    return { message: "Thanks for your message! I'll get back to you soon." }
  } catch (error) {
    console.error("❌ Error sending email:", error)
    return { message: "Oops! Something went wrong. Please try again later." }
  }
}