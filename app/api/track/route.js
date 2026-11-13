import { NextResponse } from "next/server";
import { update } from "@/lib/db";
import { allow, clientIp } from "@/lib/rateLimit";

const PATHS = new Set(["/", "/chatbot"]);

export async function POST(req) {
  if (!allow(`track:${clientIp(req)}`, 30, 60 * 60 * 1000)) return NextResponse.json({ ok: true });
  try {
    const { path } = await req.json();
    if (!PATHS.has(path)) return NextResponse.json({ ok: true });
    await update((d) => {
      d.visits.push({ path, day: new Date().toISOString().slice(0, 10) }); // no IP or personal data stored
      if (d.visits.length > 20000) d.visits = d.visits.slice(-20000);
    });
  } catch {}
  return NextResponse.json({ ok: true });
}
