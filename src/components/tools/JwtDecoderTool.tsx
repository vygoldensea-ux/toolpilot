"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

const EXAMPLE_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0IiwibmFtZSI6IlRvb2xQaWxvdCIsImlhdCI6MTcxMDAwMDAwMH0.signature";

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export function JwtDecoderTool() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const decodeJwt = () => {
    if (!token.trim()) {
      setHeader("");
      setPayload("");
      setNotice({ type: "error", message: "Please paste a token first." });
      return;
    }

    try {
      const parts = token.trim().split(".");

      if (parts.length < 2) {
        throw new Error("JWT must contain at least header and payload sections.");
      }

      const parsedHeader = JSON.parse(decodeBase64Url(parts[0]));
      const parsedPayload = JSON.parse(decodeBase64Url(parts[1]));

      setHeader(JSON.stringify(parsedHeader, null, 2));
      setPayload(JSON.stringify(parsedPayload, null, 2));
      setNotice({ type: "success", message: "JWT decoded." });
      trackEvent("tool_used", { tool: "jwt-decoder", action: "decode", success: true });
    } catch (error) {
      setHeader("");
      setPayload("");
      setNotice({ type: "error", message: `Decode error: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "jwt-decoder", action: "decode", success: false });
    }
  };

  const copySection = async (value: string, label: string) => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setNotice({ type: "success", message: `${label} copied.` });
      trackEvent("copy_clicked", { tool: "jwt-decoder", target: label.toLowerCase() });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  const clearAll = () => {
    setToken("");
    setHeader("");
    setPayload("");
    setNotice(null);
  };

  const loadExample = () => {
    setToken(EXAMPLE_JWT);
    setHeader("");
    setPayload("");
    setNotice({ type: "success", message: "Example token loaded." });
    trackEvent("example_clicked", { tool: "jwt-decoder" });
  };

  return (
    <div className="space-y-6">
      <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        Decoding does not verify token signature or security. Always validate JWTs on trusted backend
        services.
      </p>

      <div>
        <label htmlFor="jwt-input" className="mb-2 block text-sm font-medium text-slate-700">
          JWT token
        </label>
        <textarea
          id="jwt-input"
          className="tp-input min-h-32"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          placeholder="Paste JWT token"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={decodeJwt}>
          Decode token
        </button>
        <button type="button" className="tp-button-secondary" onClick={loadExample}>
          Example token
        </button>
        <button type="button" className="tp-button-secondary" onClick={clearAll}>
          Clear
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="jwt-header" className="text-sm font-medium text-slate-700">
              Header
            </label>
            <button
              type="button"
              className="text-sm font-medium text-brand-700 disabled:text-slate-400"
              onClick={() => copySection(header, "Header")}
              disabled={!header}
            >
              Copy
            </button>
          </div>
          <textarea
            id="jwt-header"
            className="tp-input min-h-52"
            value={header}
            readOnly
            aria-readonly="true"
            placeholder="Decoded header will appear here"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="jwt-payload" className="text-sm font-medium text-slate-700">
              Payload
            </label>
            <button
              type="button"
              className="text-sm font-medium text-brand-700 disabled:text-slate-400"
              onClick={() => copySection(payload, "Payload")}
              disabled={!payload}
            >
              Copy
            </button>
          </div>
          <textarea
            id="jwt-payload"
            className="tp-input min-h-52"
            value={payload}
            readOnly
            aria-readonly="true"
            placeholder="Decoded payload will appear here"
          />
        </div>
      </div>

      {notice ? (
        <p
          className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`}
          role={notice.type === "error" ? "alert" : "status"}
        >
          {notice.message}
        </p>
      ) : null}
    </div>
  );
}
