"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

const EXAMPLE_XML = `<root><service>toolpilot</service><features><item>format</item><item>seo</item></features></root>`;

function formatXml(xml: string) {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(xml, "application/xml");
  if (parsed.getElementsByTagName("parsererror").length) {
    throw new Error("Invalid XML.");
  }

  const serialized = new XMLSerializer().serializeToString(parsed);
  const withBreaks = serialized.replace(/></g, ">\n<");
  const lines = withBreaks.split("\n");
  let indent = 0;

  return lines
    .map((line) => {
      if (/^<\//.test(line)) {
        indent = Math.max(indent - 1, 0);
      }
      const pad = "  ".repeat(indent);
      if (/^<[^!?/][^>]*[^/]?>$/.test(line) && !/<\/.*>$/.test(line)) {
        indent += 1;
      }
      return `${pad}${line}`;
    })
    .join("\n");
}

export function XmlFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const run = () => {
    try {
      const formatted = formatXml(input);
      setOutput(formatted);
      setNotice({ type: "success", message: "XML formatted." });
      trackEvent("tool_used", { tool: "xml-formatter", action: "format", success: true });
    } catch (error) {
      setOutput("");
      setNotice({ type: "error", message: `Invalid XML: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "xml-formatter", action: "format", success: false });
    }
  };

  const loadExample = () => {
    setInput(EXAMPLE_XML);
    setOutput("");
    setNotice({ type: "success", message: "Example XML loaded." });
    trackEvent("example_clicked", { tool: "xml-formatter" });
  };

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setNotice({ type: "success", message: "Output copied." });
      trackEvent("copy_clicked", { tool: "xml-formatter", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="xml-input" className="mb-2 block text-sm font-medium text-slate-700">XML input</label>
          <textarea id="xml-input" className="tp-input min-h-56" value={input} onChange={(e) => setInput(e.target.value)} placeholder="<root><item>value</item></root>" />
        </div>
        <div>
          <label htmlFor="xml-output" className="mb-2 block text-sm font-medium text-slate-700">Formatted XML</label>
          <textarea id="xml-output" className="tp-input min-h-56" value={output} readOnly aria-readonly="true" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={run}>Format XML</button>
        <button type="button" className="tp-button-secondary" onClick={loadExample}>Example XML</button>
        <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!output}>Copy output</button>
      </div>
      {notice ? <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`} role={notice.type === "error" ? "alert" : "status"}>{notice.message}</p> : null}
    </div>
  );
}
