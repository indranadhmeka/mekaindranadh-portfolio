"use client";
import { useEffect } from "react";

export default function Tracker({ path }) {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ path }), keepalive: true,
    }).catch(() => {});
  }, [path]);
  return null;
}
