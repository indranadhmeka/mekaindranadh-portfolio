import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { load } from "@/lib/db";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { messages, visits } = await load();
  const days = [];
  for (let i = 29; i >= 0; i--) days.push(new Date(Date.now() - i * 864e5).toISOString().slice(0, 10));
  const perDay = Object.fromEntries(days.map((d) => [d, 0]));
  const perPath = {};
  for (const v of visits) {
    if (v.day in perDay) perDay[v.day]++;
    perPath[v.path] = (perPath[v.path] || 0) + 1;
  }
  return NextResponse.json({
    totalMessages: messages.length,
    unread: messages.filter((m) => !m.read).length,
    totalVisits: visits.length,
    daily: days.map((d) => ({ day: d, count: perDay[d] })),
    pages: Object.entries(perPath).map(([path, count]) => ({ path, count })).sort((a, b) => b.count - a.count),
  });
}
