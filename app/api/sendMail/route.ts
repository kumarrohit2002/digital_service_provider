import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // **1. Email to Client**
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "Thank you for contacting us!",
    //   html: `
    //     <h3>Hello ${name},</h3>
    //     <p>We received your message:</p>
    //     <p><b>${message}</b></p>
    //     <p>We will get back to you soon.</p>
    //   `,
    // });

    // **2. Email to Admin**
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: process.env.EMAIL_USER, // admin email
    //   subject: "New Contact Form Submission",
    //   html: `
    //     <h3>New Contact Message Received</h3>
    //     <p><b>Name:</b> ${name}</p>
    //     <p><b>Email:</b> ${email}</p>
    //     <p><b>Phone:</b> ${phone || "N/A"}</p>
    //     <p><b>Message:</b> ${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
