"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_KEY,
  },
});

async function sendEmail(
  prevState: { message: string } | null | undefined,
  formData: FormData
) {
  try {
    const { name, email, subject } = Object.fromEntries(formData);

    await transporter.sendMail({
      from: process.env.GMAIL_USER, // 보내는 이메일
      to: process.env.GMAIL_USER, // 받는 이메일
      subject: `포트폴리오에서 메일이 발송됐어요!`,
      html: `<p>${subject}</p><p>${name}</p><p>${email}</p>`,
    });

    return { message: "success" };
  } catch (error) {
    console.error(error);
  }
}

export default sendEmail;
