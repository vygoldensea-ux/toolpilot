"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Mode = "encode" | "decode";
type Notice = { type: "success" | "error"; message: string } | null;

function encodeUtf8ToBase64(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function decodeBase64ToUtf8(value: string) {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export function Base64Tool() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const labels = useMemo(
    () =>
      mode === "encode"
        ? {
            input: "Plain text",
            output: "Base64 output",
            action: "Encode",
            example: "Example text"
          }
        : {
            input: "Base64 input",
            output: "Decoded text",
            action: "Decode",
            example: "Example Base64"
          },
    [mode]
  );

  const run = () => {
    if (!input.trim()) {
      setOutput("");
      setNotice({ type: "error", message: "Please provide input." });
      return;
    }

    try {
      const result = mode === "encode" ? encodeUtf8ToBase64(input) : decodeBase64ToUtf8(input.trim());
      setOutput(result);
      setNotice({ type: "success", message: `Text ${mode}d successfully.` });
      trackEvent("tool_used", { tool: "base64-tools", action: mode, success: true });
    } catch {
      setOutput("");
      setNotice({ type: "error", message: "Invalid input for selected mode." });
      trackEvent("tool_used", { tool: "base64-tools", action: mode, success: false });
    }
  };

  const loadExample = () => {
    if (mode === "encode") {
      setInput("ToolPilot");
    } else {
      setInput("VG9vbFBpbG90");
    }
    setOutput("");
    setNotice({ type: "success", message: "Example input loaded." });
    trackEvent("example_clicked", { tool: "base64-tools", mode });
  };

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setNotice({ type: "success", message: "Output copied." });
      trackEvent("copy_clicked", { tool: "base64-tools", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Base64 mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "encode"}
          className={mode === "encode" ? "tp-button-primary" : "tp-button-secondary"}
          onClick={() => {
            setMode("encode");
            setOutput("");
            setNotice(null);
          }}
        >
          Encode
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "decode"}
          className={mode === "decode" ? "tp-button-primary" : "tp-button-secondary"}
          onClick={() => {
            setMode("decode");
            setOutput("");
            setNotice(null);
          }}
        >
          Decode
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="base64-input" className="mb-2 block text-sm font-medium text-slate-700">
            {labels.input}
          </label>
          <textarea
            id="base64-input"
            className="tp-input min-h-52"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={mode === "encode" ? "Enter text to encode" : "Enter Base64 to decode"}
          />
        </div>

        <div>
          <label htmlFor="base64-output" className="mb-2 block text-sm font-medium text-slate-700">
            {labels.output}
          </label>
          <textarea
            id="base64-output"
            className="tp-input min-h-52"
            value={output}
            readOnly
            aria-readonly="true"
            placeholder="Result"
          />
          {!output ? <p className="mt-2 text-xs text-slate-500">No output yet.</p> : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={run}>
          {labels.action}
        </button>
        <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!output}>
          Copy output
        </button>
        <button type="button" className="tp-button-secondary" onClick={loadExample}>
          {labels.example}
        </button>
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
