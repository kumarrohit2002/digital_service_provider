import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // SEND EMAIL TO CLIENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h3>Hello ${name},</h3>
        <p>We received your message:</p>
        <p><b>${message}</b></p>
        <p>We will get back to you soon.</p>
      `,
    });

    // SEND EMAIL TO ADMIN
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: "Failed to send email" });
  }
}
