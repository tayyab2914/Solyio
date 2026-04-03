import { Resend } from "resend"
import { NextResponse } from "next/server"

const LOGO_URL = "https://solyio.com/logo.svg"
const SITE_URL = "https://solyio.com"

/* ─── Shared styles ──────────────────────────────────────────────── */
const base = `
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f2f1;
`

/* ─── Admin notification template ────────────────────────────────── */
function adminTemplate(name: string, email: string, subject: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="${base}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f2f1;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 40px rgba(0,0,0,0.07);">

        <!-- Header -->
        <tr>
          <td style="background:#1c1b1b;padding:28px 40px;text-align:left;">
            <img src="${LOGO_URL}" alt="Solyio" height="28" style="display:block;" />
          </td>
          <td style="background:#1c1b1b;padding:28px 40px;text-align:right;">
            <span style="display:inline-block;background:#FF1E41;color:#fff;font-size:10px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;padding:6px 14px;border-radius:100px;">
              New Inquiry
            </span>
          </td>
        </tr>

        <!-- Red accent bar -->
        <tr><td colspan="2" style="background:#FF1E41;height:3px;line-height:3px;font-size:3px;">&nbsp;</td></tr>

        <!-- Body -->
        <tr>
          <td colspan="2" style="padding:40px;">

            <h1 style="margin:0 0 6px;font-size:22px;font-weight:900;color:#1c1b1b;letter-spacing:-0.03em;">
              New message from ${name}
            </h1>
            <p style="margin:0 0 32px;font-size:13px;color:#5e3f3e;">
              Received via the Solyio contact portal
            </p>

            <!-- Details table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
              <tr style="border-bottom:1px solid #f0eded;">
                <td style="padding:14px 0;width:110px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#5e3f3e;">Name</td>
                <td style="padding:14px 0;font-size:15px;font-weight:700;color:#1c1b1b;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0eded;">
                <td style="padding:14px 0;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#5e3f3e;">Email</td>
                <td style="padding:14px 0;">
                  <a href="mailto:${email}" style="font-size:15px;font-weight:700;color:#FF1E41;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#5e3f3e;">Subject</td>
                <td style="padding:14px 0;font-size:15px;font-weight:700;color:#1c1b1b;">${subject}</td>
              </tr>
            </table>

            <!-- Message box -->
            <div style="background:#faf8f8;border-left:3px solid #FF1E41;border-radius:4px 12px 12px 4px;padding:20px 24px;margin-bottom:32px;">
              <p style="margin:0 0 10px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:#5e3f3e;">Message</p>
              <p style="margin:0;font-size:15px;line-height:1.75;color:#1c1b1b;white-space:pre-wrap;">${message}</p>
            </div>

            <!-- Reply CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:100px;background:#1c1b1b;">
                  <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;padding:14px 32px;font-size:13px;font-weight:800;color:#fff;text-decoration:none;letter-spacing:0.05em;">
                    Reply to ${name} →
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td colspan="2" style="background:#f5f2f1;padding:24px 40px;text-align:center;border-top:1px solid #ede9e8;">
            <p style="margin:0;font-size:11px;color:#9e8a89;">
              © 2024 Solyio AI · <a href="${SITE_URL}" style="color:#FF1E41;text-decoration:none;">solyio.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

/* ─── Sender confirmation template ───────────────────────────────── */
function confirmationTemplate(name: string, subject: string, message: string) {
  const firstName = name.split(" ")[0]
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="${base}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f2f1;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 40px rgba(0,0,0,0.07);">

        <!-- Header -->
        <tr>
          <td colspan="2" style="background:#1c1b1b;padding:32px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="Solyio" height="30" style="display:block;margin:0 auto 18px;" />
            <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:0.25em;text-transform:uppercase;color:#FF1E41;">
              Inquiry Received
            </p>
          </td>
        </tr>

        <!-- Red accent bar -->
        <tr><td colspan="2" style="background:#FF1E41;height:3px;line-height:3px;font-size:3px;">&nbsp;</td></tr>

        <!-- Hero -->
        <tr>
          <td colspan="2" style="padding:48px 40px 0;text-align:center;">
            <!-- Check icon circle -->
            <div style="display:inline-block;width:64px;height:64px;border-radius:50%;background:#fff5f7;border:2px solid #FF1E41;line-height:64px;font-size:28px;margin-bottom:24px;">
              ✓
            </div>
            <h1 style="margin:0 0 12px;font-size:28px;font-weight:900;color:#1c1b1b;letter-spacing:-0.04em;line-height:1.1;">
              We&rsquo;ve got your message,<br />${firstName}.
            </h1>
            <p style="margin:0 0 40px;font-size:16px;color:#5e3f3e;line-height:1.6;max-width:420px;margin-left:auto;margin-right:auto;">
              Our team has received your inquiry and will get back to you within <strong style="color:#1c1b1b;">2 hours</strong>.
              In the meantime, here&rsquo;s a summary of what you sent us.
            </p>
          </td>
        </tr>

        <!-- Summary card -->
        <tr>
          <td colspan="2" style="padding:0 40px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f8;border-radius:16px;overflow:hidden;">
              <tr>
                <td style="padding:16px 24px;background:#f0eded;border-bottom:1px solid #e8e4e3;">
                  <p style="margin:0;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:#5e3f3e;">Your Inquiry Summary</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid #f0eded;">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#5e3f3e;">Subject</p>
                  <p style="margin:0;font-size:15px;font-weight:700;color:#1c1b1b;">${subject}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 8px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#5e3f3e;">Your Message</p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#3a2a2a;white-space:pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- What happens next -->
        <tr>
          <td colspan="2" style="padding:0 40px 40px;">
            <h2 style="margin:0 0 20px;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:#1c1b1b;">What happens next?</h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ["01", "Review", "Our team reviews your inquiry and matches you with the right specialist."],
                ["02", "Connect", "We reach out within 2 hours with a tailored response or meeting invite."],
                ["03", "Build", "We start engineering your AI-powered solution from day one."],
              ].map(([n, title, desc]) => `
              <tr>
                <td style="padding:0 0 18px;vertical-align:top;width:40px;">
                  <span style="display:inline-block;width:28px;height:28px;border-radius:50%;background:#FF1E41;color:#fff;font-size:10px;font-weight:900;text-align:center;line-height:28px;">${n}</span>
                </td>
                <td style="padding:0 0 18px 12px;vertical-align:top;">
                  <p style="margin:0 0 2px;font-size:13px;font-weight:800;color:#1c1b1b;">${title}</p>
                  <p style="margin:0;font-size:13px;color:#5e3f3e;line-height:1.5;">${desc}</p>
                </td>
              </tr>`).join("")}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td colspan="2" style="padding:0 40px 48px;text-align:center;">
            <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
              <tr>
                <td style="border-radius:100px;background:#FF1E41;box-shadow:0 8px 24px rgba(255,30,65,0.3);">
                  <a href="${SITE_URL}/portfolio" style="display:inline-block;padding:16px 36px;font-size:14px;font-weight:800;color:#fff;text-decoration:none;letter-spacing:0.05em;">
                    Explore Our Work →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td colspan="2" style="height:1px;background:#f0eded;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- Footer -->
        <tr>
          <td colspan="2" style="padding:28px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="Solyio" height="20" style="display:block;margin:0 auto 12px;opacity:0.4;" />
            <p style="margin:0 0 6px;font-size:11px;color:#9e8a89;">
              © 2024 Solyio AI · Engineering the Future
            </p>
            <p style="margin:0;font-size:11px;color:#b0a0a0;">
              <a href="${SITE_URL}" style="color:#FF1E41;text-decoration:none;">solyio.com</a>
              &nbsp;·&nbsp;
              <a href="mailto:info@solyio.com" style="color:#FF1E41;text-decoration:none;">info@solyio.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

/* ─── Route handler ───────────────────────────────────────────────── */
export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  const [adminResult, confirmResult] = await Promise.all([
    // 1. Notify Solyio team
    resend.emails.send({
      from: "Solyio Contact <noreply@solyio.com>",
      to: "info@solyio.com",
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: adminTemplate(name, email, subject, message),
    }),
    // 2. Confirm to the sender
    resend.emails.send({
      from: "Solyio AI <noreply@solyio.com>",
      to: email,
      subject: "We received your inquiry — Solyio",
      html: confirmationTemplate(name, subject, message),
    }),
  ])

  if (adminResult.error || confirmResult.error) {
    const msg = adminResult.error?.message ?? confirmResult.error?.message ?? "Failed to send."
    return NextResponse.json({ error: msg }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
