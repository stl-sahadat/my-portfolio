import nodemailer from 'nodemailer';

interface SendInquiryEmailParams {
  name: string;
  email?: string;
  topic: string;
  message: string;
}

export const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass || pass === 'your_gmail_app_password_here') {
    return null; // SMTP credentials not configured yet
  }

  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user,
      pass,
    },
  });
};

export const dispatchInquiryEmails = async (params: SendInquiryEmailParams): Promise<{ adminSent: boolean; clientSent: boolean }> => {
  const { name, email, topic, message } = params;
  const transporter = createTransporter();
  const adminTarget = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.EMAIL_USER || 'sahadat.info01@gmail.com';

  if (!transporter) {
    console.warn('[Mailer] SMTP credentials not set in .env. Logging inquiry details to console instead:');
    console.log(`[Mailer Mock Notification] From: ${name} (${email || 'No email'}) | Topic: ${topic}\nMessage: ${message}`);
    return { adminSent: false, clientSent: false };
  }

  let adminSent = false;
  let clientSent = false;

  // 1. Notification to Admin (Sahadat vai)
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Engine" <${process.env.EMAIL_USER}>`,
      to: adminTarget,
      replyTo: email || undefined,
      subject: `🚨 [New Inquiry] ${topic} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #0b0b12; color: #ffffff; padding: 28px; border-radius: 12px; max-width: 600px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #10b981; margin-top: 0;">🚀 New Project Inquiry Received</h2>
          <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.15); margin: 20px 0;" />
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> ${email ? `<a href="mailto:${email}" style="color: #60a5fa;">${email}</a>` : 'Not provided'}</p>
          <p><strong>Selected Domain:</strong> <span style="background: rgba(16,185,129,0.2); color: #34d399; padding: 3px 8px; border-radius: 6px;">${topic}</span></p>
          <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 3px solid #10b981;">
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e4e4e7;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <p style="font-size: 11px; color: #71717a; margin-top: 24px;">Sent directly via MD SAHADAT HOSSAIN Portfolio Backend</p>
        </div>
      `,
    });
    adminSent = true;
    console.log(`[Mailer] Admin notification sent successfully to ${adminTarget}`);
  } catch (err) {
    console.error('[Mailer] Failed to send admin notification:', (err as Error).message);
  }

  // 2. Client Auto-Reply Confirmation (if client provided email)
  if (email && email.includes('@')) {
    try {
      await transporter.sendMail({
        from: `"Md Sahadat Hossain" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for reaching out, ${name} | Md Sahadat Hossain`,
        html: `
          <div style="font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; padding: 32px; border-radius: 12px; max-width: 600px;">
            <h2 style="color: #38bdf8; margin-top: 0;">Hello ${name},</h2>
            <p style="font-size: 15px; line-height: 1.6; color: #cbd5e1;">
              Thank you for connecting! I have received your message regarding <strong>${topic}</strong>.
            </p>
            <div style="background: rgba(255,255,255,0.05); padding: 18px; border-radius: 8px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Summary of your message:</p>
              <p style="margin: 0; font-size: 14px; color: #e2e8f0; line-height: 1.5;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="font-size: 14px; line-height: 1.6; color: #cbd5e1;">
              I typically review and reply to inquiries within <strong>2 hours</strong> (Worldwide UTC+6). If your request is urgent, feel free to ping me directly on WhatsApp at <a href="https://wa.me/8801944576159" style="color: #34d399; text-decoration: underline;">+880 1944-576159</a>.
            </p>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 28px 0;" />
            <p style="margin: 0; font-weight: bold; color: #f1f5f9;">Md Sahadat Hossain</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">AI Agent Architect & Senior Full-Stack Engineer</p>
            <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">Barura, Cumilla, Chattogram, Bangladesh</p>
          </div>
        `,
      });
      clientSent = true;
      console.log(`[Mailer] Confirmation auto-reply sent to client: ${email}`);
    } catch (err) {
      console.error('[Mailer] Failed to send client auto-reply:', (err as Error).message);
    }
  }

  return { adminSent, clientSent };
};
