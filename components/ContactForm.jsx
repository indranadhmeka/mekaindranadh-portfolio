"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", error: "", errors: {} });
  const busy = state.status === "sending";

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "sending", error: "", errors: {} });
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return setState({ status: "error", error: data.error || "Something went wrong.", errors: data.errors || {} });
      form.reset();
      setState({ status: "sent", emailed: !!data.emailed, error: "", errors: {} });   // shown only after the server confirmed it saved the message
    } catch {
      setState({ status: "error", error: "Network error. Check your connection and try again.", errors: {} });
    }
  }

  if (state.status === "sent")
    return (
      <div className={`notice ${state.emailed ? "ok" : "err"}`} role="status">
        <strong>{state.emailed ? "Message sent." : "Message saved."}</strong>{" "}
        {state.emailed
          ? "Thanks for reaching out. I'll reply by email."
          : "Thanks for reaching out — it was saved, but the email notification failed to send. I'll still see it in my inbox."}
        <button className="link-btn" onClick={() => setState({ status: "idle", emailed: false, error: "", errors: {} })}>Send another</button>
      </div>
    );

  const { errors } = state;
  return (
    <form onSubmit={onSubmit} noValidate className="form">
      <label>Name
        <input name="name" autoComplete="name" required maxLength={80} aria-invalid={!!errors.name} />
        {errors.name && <span className="field-err">{errors.name}</span>}
      </label>
      <label>Email
        <input name="email" type="email" autoComplete="email" required maxLength={120} aria-invalid={!!errors.email} />
        {errors.email && <span className="field-err">{errors.email}</span>}
      </label>
      <label>Message
        <textarea name="message" rows={5} required minLength={10} maxLength={2000} aria-invalid={!!errors.message} />
        {errors.message && <span className="field-err">{errors.message}</span>}
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
      {state.status === "error" && <p className="notice err" role="alert">{state.error}</p>}
      <button className="btn" disabled={busy}>{busy ? "Sending…" : "Send message"}</button>
    </form>
  );
}
