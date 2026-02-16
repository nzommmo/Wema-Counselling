"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Mindful Wema <onboarding@resend.dev>",
      to: ["kendijimfri@gmail.com"],
      subject: subject || `New Contact Form Submission from ${name}`,
      replyTo: email,
      // React email template or simply html
      html: `
        <h2>New Message from Mindful Wema Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Server Error:", err);
    return { error: err instanceof Error ? err.message : "Failed to send email" };
  }
}
