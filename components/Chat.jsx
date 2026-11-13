"use client";
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

const starters = ["What are your main skills?", "Tell me about your projects", "How can I contact you?"];

export default function Chat({ name }) {
  const [msgs, setMsgs] = useState([{ role: "assistant", content: `Hi, I'm the assistant for ${name}'s portfolio. Ask me about skills, projects or experience.` }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const end = useRef(null);
  useEffect(() => { end.current?.scrollIntoView({ block: "end" }); }, [msgs, busy]);

  async function send(text) {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...msgs, { role: "user", content: q }];
    setMsgs(next); setInput(""); setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),   // skip the greeting
      });
      const data = await res.json();
      setMsgs([...next, { role: "assistant", content: data.reply || data.error || "Something went wrong." }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "I couldn't reach the server. Try again in a moment." }]);
    } finally { setBusy(false); }
  }

  return (
    <div className="chat">
      <div className="chat-log" role="log" aria-live="polite">
        {msgs.map((m, i) => <div key={i} className={`bubble ${m.role}`}>{m.content}</div>)}
        {busy && <div className="bubble assistant muted">Thinking…</div>}
        <div ref={end} />
      </div>
      {msgs.length === 1 && (
        <div className="starters">{starters.map((s) => <button key={s} className="chip-btn" onClick={() => send(s)}>{s}</button>)}</div>
      )}
      <form className="chat-in" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question" aria-label="Your question" maxLength={1000} />
        <button className="btn" disabled={busy || !input.trim()} aria-label="Send"><Send size={16} /></button>
      </form>
      <p className="muted small">Answers come from the portfolio's own information and may be incomplete.</p>
    </div>
  );
}
