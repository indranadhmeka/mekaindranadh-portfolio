"use client";
import { useCallback, useEffect, useState } from "react";

const json = (method, body) => ({ method, headers: { "content-type": "application/json" }, body: JSON.stringify(body) });

export default function Admin() {
  const [authed, setAuthed] = useState(null);   // null = checking
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  const refresh = useCallback(async () => {
    const [s, m] = await Promise.all([fetch("/api/admin/stats"), fetch("/api/admin/messages")]);
    if (s.status === 401) return setAuthed(false);
    setStats(await s.json()); setMessages((await m.json()).messages); setAuthed(true);
  }, []);
  useEffect(() => { refresh(); }, [refresh]);

  async function login(e) {
    e.preventDefault(); setErr("");
    const r = await fetch("/api/admin/login", json("POST", { password: pw }));
    if (r.ok) { setPw(""); refresh(); } else setErr((await r.json()).error || "Sign-in failed.");
  }
  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); setAuthed(false); setStats(null); }
  async function toggleRead(m) { await fetch("/api/admin/messages", json("PATCH", { id: m.id, read: !m.read })); refresh(); }
  async function remove(m) {
    if (!confirm(`Delete the message from ${m.name}? This can't be undone.`)) return;
    await fetch("/api/admin/messages", json("DELETE", { id: m.id })); refresh();
  }

  if (authed === null) return <main className="wrap sec"><p className="muted">Loading…</p></main>;

  if (!authed)
    return (
      <main className="wrap sec narrow">
        <h1 className="h1-sm">Admin sign-in</h1>
        <form onSubmit={login} className="form">
          <label>Password
            <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" required />
          </label>
          {err && <p className="notice err" role="alert">{err}</p>}
          <button className="btn">Sign in</button>
        </form>
      </main>
    );

  const max = Math.max(1, ...stats.daily.map((d) => d.count));
  return (
    <main className="wrap sec">
      <div className="admin-top">
        <h1 className="h1-sm">Dashboard</h1>
        <button className="btn ghost" onClick={logout}>Sign out</button>
      </div>

      <div className="grid stats">
        <div className="card"><p className="muted">Page views</p><p className="big">{stats.totalVisits}</p></div>
        <div className="card"><p className="muted">Messages</p><p className="big">{stats.totalMessages}</p></div>
        <div className="card"><p className="muted">Unread</p><p className="big">{stats.unread}</p></div>
      </div>

      <h2>Views, last 30 days</h2>
      <div className="bars" role="img" aria-label="Daily page views for the last 30 days">
        {stats.daily.map((d) => <div key={d.day} className="bar" style={{ height: `${(d.count / max) * 100}%` }} title={`${d.day}: ${d.count}`} />)}
      </div>
      {stats.pages.length > 0 && <p className="muted small">{stats.pages.map((p) => `${p.path} ${p.count}`).join("  |  ")}</p>}

      <h2>Messages</h2>
      {messages.length === 0 && <p className="muted">No messages yet. Messages sent from the contact form appear here.</p>}
      <ul className="msgs">
        {messages.map((m) => (
          <li key={m.id} className={`card ${m.read ? "" : "unread"}`}>
            <div className="msg-head">
              <strong>{m.name}</strong> <a href={`mailto:${m.email}`}>{m.email}</a>
              <span className="muted small">{new Date(m.createdAt).toLocaleString()}</span>
            </div>
            <p className="msg-body">{m.message}</p>
            <div className="card-links">
              <button className="link-btn" onClick={() => toggleRead(m)}>{m.read ? "Mark unread" : "Mark read"}</button>
              <button className="link-btn danger" onClick={() => remove(m)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
