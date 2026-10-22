import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate-limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a few minutes before sending another message.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, botcheck } = body;

    // Honeypot trap: if botcheck field is populated, silently accept without sending
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Message received" });
    }

    // Client/Server validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 5 characters long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "akshat070906@gmail.com";

    // Graceful fallback if Resend API key is not configured in environment
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          fallback: true,
          error:
            "Email service is currently offline. Please use the direct mailto button or email akshat070906@gmail.com directly.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    const { error: sendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email.trim(),
      subject: `New message from ${name.trim()} via portfolio`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (sendError) {
      return NextResponse.json(
        {
          success: false,
          fallback: true,
          error: sendError.message || "Failed to send email. Please email directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
