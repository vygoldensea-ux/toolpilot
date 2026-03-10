"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

const EXAMPLE_JSON = `{"name":"ToolPilot","version":1,"active":true}`;

export function JsonValidatorTool() {
  const [input, setInput] = useState("");
  const [pretty, setPretty] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const validate = () => {
    try {
      const parsed = JSON.parse(input);
      setPretty(JSON.stringify(parsed, null, 2));
      setNotice({ type: "success", message: "Valid JSON." });
      trackEvent("tool_used", { tool: "json-validator", action: "validate", success: true });
    } catch (error) {
      setPretty("");
      setNotice({ type: "error", message: `Invalid JSON: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "json-validator", action: "validate", success: false });
    }
  };

  const loadExample = () => {
    setInput(EXAMPLE_JSON);
    setPretty("");
    setNotice({ type: "success", message: "Example JSON loaded." });
    trackEvent("example_clicked", { tool: "json-validator" });
  };

  const copyOutput = async () => {
    if (!pretty) return;
    try {
      await navigator.clipboard.writeText(pretty);
      setNotice({ type: "success", message: "Output copied." });
      trackEvent("copy_clicked", { tool: "json-validator", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="json-validator-input" className="mb-2 block text-sm font-medium text-slate-700">JSON input</label>
          <textarea id="json-validator-input" className="tp-input min-h-56" value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"hello":"world"}' />
        </div>
        <div>
          <label htmlFor="json-validator-output" className="mb-2 block text-sm font-medium text-slate-700">Validation output</label>
          <textarea id="json-validator-output" className="tp-input min-h-56" value={pretty} readOnly aria-readonly="true" placeholder="Validated and formatted JSON appears here" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={validate}>Validate JSON</button>
        <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!pretty}>Copy output</button>
        <button type="button" className="tp-button-secondary" onClick={loadExample}>Example JSON</button>
        <button type="button" className="tp-button-secondary" onClick={() => { setInput(""); setPretty(""); setNotice(null); }}>Clear</button>
      </div>

      {notice ? <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`} role={notice.type === "error" ? "alert" : "status"}>{notice.message}</p> : null}
    </div>
  );
}
