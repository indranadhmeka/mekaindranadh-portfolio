import { site, skills, projects, experience } from "@/lib/data";

export function profileFacts() {
  return [
    `Name: ${site.name}. Role: ${site.role}. Location: ${site.location}.`,
    `About: ${site.about.join(" ")}`,
    `Skills: ${skills.map((s) => `${s.group}: ${s.items.join(", ")}`).join("; ")}.`,
    `Projects: ${projects.map((p) => `${p.title} (${p.stack.join(", ")}): ${p.summary}`).join(" | ")}.`,
    `Experience: ${experience.map((e) => `${e.role} at ${e.org}, ${e.period}`).join("; ")}.`,
    `Contact: use the contact form on the website.`,
  ].join("\n");
}

export function fallbackAnswer(q) {
  const t = q.toLowerCase();
  if (/skill|tech|stack|language/.test(t)) return skills.map((s) => `${s.group}: ${s.items.join(", ")}`).join("\n");
  if (/project|built|work on/.test(t)) return projects.map((p) => `${p.title}: ${p.summary}`).join("\n");
  if (/experience|job|career|intern/.test(t)) return experience.map((e) => `${e.role}, ${e.org} (${e.period})`).join("\n");
  if (/contact|hire|email|reach/.test(t)) return "You can send a message with the contact form at the bottom of the home page.";
  if (/who|about|yourself/.test(t)) return `${site.name} is a ${site.role}. ${site.about[0]}`;
  return "I can answer questions about skills, projects, experience, or how to get in touch. What would you like to know?";
}
