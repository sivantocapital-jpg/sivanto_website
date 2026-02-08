// app/api/sendEmail/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, ...formFields } = body; // all fields dynamically

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Dynamic subject
    const subjectMap: Record<string, string> = {
      "form1": `Loan Form Submission`,
      "form2": `Quick Contact Form Submission`,
      "form3": `Another Loan Form`,
      "form4": `Detailed Loan/Query Form`
    };
    const subject = subjectMap[formType] || "Form Submission";

    // Build email body dynamically
    let htmlBody = "<h3>Form Submission</h3>";
    let textBody = "Form Submission:\n\n";
    for (const key in formFields) {
      htmlBody += `<p><strong>${key}:</strong> ${formFields[key] || "N/A"}</p>`;
      textBody += `${key}: ${formFields[key] || "N/A"}\n`;
    }

    await transporter.sendMail({
      from: `"${formFields.name || "No Name"}" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER}, sivantocapital@gmail.com`,
      subject,
      text: textBody,
      html: htmlBody
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err }), { status: 500 });
  }
}
