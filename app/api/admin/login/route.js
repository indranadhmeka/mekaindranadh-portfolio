import { NextResponse } from "next/server";
import { checkPassword, createSession } from "@/lib/auth";
import { allow, clientIp } from "@/lib/rateLimit";

export async function POST(req) {
  if (!allow(`login:${clientIp(req)}`, 5, 15 * 60 * 1000))
    return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  let body = {};
  try { body = await req.json(); } catch {}
  if (!checkPassword(body.password)) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  await createSession();
  return NextResponse.json({ ok: true });
}
