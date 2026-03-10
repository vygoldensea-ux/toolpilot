"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

const EXAMPLE_MD = `# ToolPilot Markdown\n\n- fast\n- clean\n- SEO-ready\n\n**Hello developers**`;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderMarkdown(md: string) {
  const escaped = escapeHtml(md);
  return escaped
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^- (.*)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*<\/li>)/g, "<ul>$1</ul>")
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

export function MarkdownPreviewTool() {
  const [input, setInput] = useState(EXAMPLE_MD);
  const output = useMemo(() => renderMarkdown(input), [input]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Markdown input</label>
          <textarea className="tp-input min-h-64" value={input} onChange={(e) => { setInput(e.target.value); trackEvent("tool_used", { tool: "markdown-preview", action: "edit" }); }} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Preview</label>
          <div className="tp-input min-h-64 overflow-auto bg-white text-slate-800" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-secondary" onClick={() => { setInput(EXAMPLE_MD); trackEvent("example_clicked", { tool: "markdown-preview" }); }}>Example markdown</button>
      </div>
    </div>
  );
}
