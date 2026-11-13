import "./globals.css";
import { site } from "@/lib/data";

const base = process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(base),
  title: { default: `${site.name} – ${site.role}`, template: `%s | ${site.name}` },
  description: site.tagline,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} – ${site.role}`, description: site.tagline, url: base, type: "website" },
  twitter: { card: "summary", title: `${site.name} – ${site.role}`, description: site.tagline },
};

// Sets the theme before first paint so the page doesn't flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
