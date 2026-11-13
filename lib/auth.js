import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE = "admin_session";
const key = () => {
  const s = process.env.JWT_SECRET;
  if (!s || s.length < 32) throw new Error("JWT_SECRET must be set to 32+ characters");
  return new TextEncoder().encode(s);
};

export function checkPassword(input) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = crypto.createHash("sha256").update(String(input)).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}
export async function createSession() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(key());
  (await cookies()).set(COOKIE, token, {
    httpOnly: true, sameSite: "strict", path: "/", maxAge: 60 * 60 * 8,
    secure: process.env.NODE_ENV === "production",
  });
}
export async function isAdmin() {
  try {
    const t = (await cookies()).get(COOKIE)?.value;
    if (!t) return false;
    const { payload } = await jwtVerify(t, key());
    return payload.role === "admin";
  } catch { return false; }
}
export async function destroySession() { (await cookies()).delete(COOKIE); }
