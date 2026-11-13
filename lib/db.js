import { promises as fs } from "fs";
import path from "path";

const FILE = path.join(process.env.DATA_DIR || path.join(process.cwd(), "data"), "db.json");
let queue = Promise.resolve();

async function read() {
  try { return JSON.parse(await fs.readFile(FILE, "utf8")); }
  catch { return { messages: [], visits: [] }; }
}
async function write(d) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = FILE + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(d));
  await fs.rename(tmp, FILE);
}

// Serialised read-modify-write so concurrent requests don't clobber each other.
export function update(fn) {
  const run = queue.then(async () => {
    const d = await read();
    d.messages ||= []; d.visits ||= [];
    const result = await fn(d);
    await write(d);
    return result;
  });
  queue = run.catch(() => {});
  return run;
}
export async function load() {
  await queue;
  const d = await read();
  return { messages: d.messages || [], visits: d.visits || [] };
}
