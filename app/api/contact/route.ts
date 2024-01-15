import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      country,
      company_size,
      info,
    } = await req.json();

    try {
      // Create a Nodemailer transport object (configure with your email provider)

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: email,
        to: "test@gmail.com",
        subject: "Contact Form Submission",
        html: `
        <h2>Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone_number}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Company Size:</strong> ${company_size}</p>
        <p><strong>Info:</strong> ${info}</p>
        `,
      };

      // send the email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Email has been sent" });
    } catch (error) {
      console.log(error);

      return NextResponse.json("Error sending email");
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
}
