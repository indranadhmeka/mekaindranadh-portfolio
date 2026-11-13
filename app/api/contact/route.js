import { NextResponse } from "next/server";
import crypto from "crypto";
import { update } from "@/lib/db";
import { allow, clientIp } from "@/lib/rateLimit";
import { sendContactEmail } from "@/lib/mailer";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req) {
  if (!allow(`contact:${clientIp(req)}`, 5, 60 * 60 * 1000))
    return NextResponse.json({ error: "Too many messages. Try again in an hour." }, { status: 429 });

  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot: bots fill this hidden field

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const errors = {};
  if (name.length < 2 || name.length > 80) errors.name = "Enter your name (2–80 characters).";
  if (!EMAIL.test(email) || email.length > 120) errors.email = "Enter a valid email address.";
  if (message.length < 10 || message.length > 2000) errors.message = "Write 10–2000 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ error: "Check the highlighted fields.", errors }, { status: 400 });

  const record = { id: crypto.randomUUID(), name, email, message, createdAt: new Date().toISOString(), read: false };
  try { await update((d) => { d.messages.unshift(record); }); }
  catch { return NextResponse.json({ error: "Could not save your message. Please try again." }, { status: 500 }); }

  let emailed = false;
  try { emailed = await sendContactEmail(record); } catch (e) { console.error("Email failed:", e.message); }
  return NextResponse.json({ ok: true, emailed });
}
