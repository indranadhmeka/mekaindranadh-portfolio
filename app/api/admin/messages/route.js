import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { load, update } from "@/lib/db";

const deny = () => NextResponse.json({ error: "Not signed in." }, { status: 401 });

export async function GET() {
  if (!(await isAdmin())) return deny();
  const { messages } = await load();
  return NextResponse.json({ messages });
}
export async function PATCH(req) {
  if (!(await isAdmin())) return deny();
  const { id, read } = await req.json();
  await update((d) => { const m = d.messages.find((x) => x.id === id); if (m) m.read = !!read; });
  return NextResponse.json({ ok: true });
}
export async function DELETE(req) {
  if (!(await isAdmin())) return deny();
  const { id } = await req.json();
  await update((d) => { d.messages = d.messages.filter((x) => x.id !== id); });
  return NextResponse.json({ ok: true });
}
