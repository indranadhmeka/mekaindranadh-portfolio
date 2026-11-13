import { NextResponse } from "next/server";
import { allow, clientIp } from "@/lib/rateLimit";
import { profileFacts, fallbackAnswer } from "@/lib/chatContext";

export async function POST(req) {
  if (!allow(`chat:${clientIp(req)}`, 20, 10 * 60 * 1000))
    return NextResponse.json({ error: "Too many questions. Please wait a few minutes." }, { status: 429 });

  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-10)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));
  if (!messages.length || messages[messages.length - 1].role !== "user")
    return NextResponse.json({ error: "Send a question." }, { status: 400 });

  const last = messages[messages.length - 1].content;
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return NextResponse.json({ reply: fallbackAnswer(last), mode: "basic" });

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: process.env.CHAT_MODEL || "claude-sonnet-5-5",
        max_tokens: 500,
        system:
          "You are the assistant on a developer's portfolio website. Answer visitors' questions using ONLY the facts below. " +
          "If something is not covered, say you don't have that information and suggest the contact form. Be concise and friendly. " +
          "Never invent employers, dates, projects or contact details.\n\nFACTS:\n" + profileFacts(),
        messages,
      }),
    });
    if (!r.ok) throw new Error(`API ${r.status}`);
    const data = await r.json();
    const reply = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
    return NextResponse.json({ reply: reply || fallbackAnswer(last), mode: "ai" });
  } catch (e) {
    console.error("Chat error:", e.message);
    return NextResponse.json({ reply: fallbackAnswer(last), mode: "basic" });
  }
}
