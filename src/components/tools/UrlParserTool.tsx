"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

const EXAMPLE_URL = "https://www.toolpilot.xyz/json-formatter?tab=input&mode=pretty";

type Notice = { type: "success" | "error"; message: string } | null;

export function UrlParserTool() {
  const [input, setInput] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const parsed = useMemo(() => {
    try {
      if (!input.trim()) return null;
      return new URL(input.trim());
    } catch {
      return null;
    }
  }, [input]);

  const params = parsed ? Array.from(parsed.searchParams.entries()) : [];

  const parseNow = () => {
    if (!parsed) {
      setNotice({ type: "error", message: "Invalid URL." });
      trackEvent("tool_used", { tool: "url-parser", action: "parse", success: false });
      return;
    }
    setNotice({ type: "success", message: "URL parsed." });
    trackEvent("tool_used", { tool: "url-parser", action: "parse", success: true });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="url-parser-input" className="mb-2 block text-sm font-medium text-slate-700">URL input</label>
        <textarea id="url-parser-input" className="tp-input min-h-28" value={input} onChange={(e) => setInput(e.target.value)} placeholder="https://example.com/path?foo=bar" />
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={parseNow}>Parse URL</button>
        <button type="button" className="tp-button-secondary" onClick={() => { setInput(EXAMPLE_URL); setNotice({ type: "success", message: "Example URL loaded." }); trackEvent("example_clicked", { tool: "url-parser" }); }}>Example URL</button>
      </div>

      <div className="tp-panel p-4">
        {parsed ? (
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-slate-500">Protocol</dt><dd className="text-slate-900">{parsed.protocol}</dd></div>
            <div><dt className="text-slate-500">Hostname</dt><dd className="text-slate-900">{parsed.hostname}</dd></div>
            <div><dt className="text-slate-500">Path</dt><dd className="text-slate-900">{parsed.pathname}</dd></div>
            <div><dt className="text-slate-500">Port</dt><dd className="text-slate-900">{parsed.port || "(default)"}</dd></div>
            <div className="sm:col-span-2"><dt className="text-slate-500">Query params</dt><dd className="text-slate-900">{params.length ? params.map(([k, v]) => `${k}=${v}`).join(", ") : "None"}</dd></div>
          </dl>
        ) : (
          <p className="text-sm text-slate-500">No parsed output yet.</p>
        )}
      </div>

      {notice ? <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`} role={notice.type === "error" ? "alert" : "status"}>{notice.message}</p> : null}
    </div>
  );
}
