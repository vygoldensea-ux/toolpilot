"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

const EXAMPLE_JSON = `{"tool":"ToolPilot","features":["format","minify","validate"],"active":true}`;

type Notice = { type: "success" | "error"; message: string } | null;

export function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const parseJson = () => JSON.parse(input);

  const handleFormat = () => {
    try {
      const parsed = parseJson();
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setNotice({ type: "success", message: "JSON formatted successfully." });
      trackEvent("tool_used", { tool: "json-formatter", action: "format", success: true });
    } catch (error) {
      setNotice({ type: "error", message: `Invalid JSON: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "json-formatter", action: "format", success: false });
    }
  };

  const handleMinify = () => {
    try {
      const parsed = parseJson();
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setNotice({ type: "success", message: "JSON minified successfully." });
      trackEvent("tool_used", { tool: "json-formatter", action: "minify", success: true });
    } catch (error) {
      setNotice({ type: "error", message: `Invalid JSON: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "json-formatter", action: "minify", success: false });
    }
  };

  const handleValidate = () => {
    try {
      parseJson();
      setNotice({ type: "success", message: "Valid JSON." });
      trackEvent("tool_used", { tool: "json-formatter", action: "validate", success: true });
    } catch (error) {
      setNotice({ type: "error", message: `Invalid JSON: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "json-formatter", action: "validate", success: false });
    }
  };

  const handleCopy = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setNotice({ type: "success", message: "Output copied." });
      trackEvent("copy_clicked", { tool: "json-formatter", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setNotice(null);
  };

  const handleExample = () => {
    setInput(EXAMPLE_JSON);
    setOutput("");
    setNotice({ type: "success", message: "Example JSON loaded." });
    trackEvent("example_clicked", { tool: "json-formatter" });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="json-input" className="mb-2 block text-sm font-medium text-slate-700">
            JSON input
          </label>
          <textarea
            id="json-input"
            className="tp-input min-h-56"
            placeholder='{"hello":"world"}'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="json-output" className="mb-2 block text-sm font-medium text-slate-700">
            Output
          </label>
          <textarea
            id="json-output"
            className="tp-input min-h-56"
            placeholder="Formatted output will appear here"
            value={output}
            readOnly
            aria-readonly="true"
          />
          {!output ? <p className="mt-2 text-xs text-slate-500">No output yet.</p> : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={handleFormat}>
          Format
        </button>
        <button type="button" className="tp-button-secondary" onClick={handleMinify}>
          Minify
        </button>
        <button type="button" className="tp-button-secondary" onClick={handleValidate}>
          Validate
        </button>
        <button type="button" className="tp-button-secondary" onClick={handleCopy} disabled={!output}>
          Copy output
        </button>
        <button type="button" className="tp-button-secondary" onClick={handleExample}>
          Example JSON
        </button>
        <button type="button" className="tp-button-secondary" onClick={handleClear}>
          Clear
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
