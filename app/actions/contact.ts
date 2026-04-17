"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    if (!name || !email || !phone || !service) {
      return { success: false, message: "All fields are required." };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || "hemantgoyal@nxtwaveai.com", // Fallback to provided email
      subject: `New Contact Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Requested: ${service}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
