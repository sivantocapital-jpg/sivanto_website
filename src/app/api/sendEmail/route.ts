import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, ...formFields } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // important for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const subjectMap: Record<string, string> = {
      "quick-loan": "Quick Loan Form Submission",
      "personal-loan": "Personal Loan Form Submission",
      "home-loan": "Home Loan Form Submission",
      "business-loan": "Business Loan Form Submission",
      "health-insurance": "Health Insurance Form Submission",
      "life-insurance": "Life Insurance Form Submission",
      "loan-against-property": "Loan Against Property Form Submission",
      "loan-against-insurance": "Loan Against Insurance Form Submission",
      "loan-against-mutual-funds": "Loan Against Mutual Funds Form Submission",
      "credit-cards": "Credit Card Form Submission",
    };

    const subject = subjectMap[formType] || "Form Submission";

    let htmlBody = `<h3>${subject}</h3>`;
    let textBody = `${subject}\n\n`;

    for (const key in formFields) {
      htmlBody += `<p><strong>${key}:</strong> ${formFields[key] || "N/A"}</p>`;
      textBody += `${key}: ${formFields[key] || "N/A"}\n`;
    }

    await transporter.sendMail({
      from: `"${formFields.name || "Sivanto"}" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER}, sivantocapital@gmail.com`,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
