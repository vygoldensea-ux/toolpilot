"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type DiffLine = { type: "same" | "added" | "removed"; text: string };

function diffLines(a: string, b: string): DiffLine[] {
  const left = a.split("\n");
  const right = b.split("\n");
  const max = Math.max(left.length, right.length);
  const output: DiffLine[] = [];

  for (let i = 0; i < max; i += 1) {
    const l = left[i];
    const r = right[i];
    if (l === r) {
      output.push({ type: "same", text: l ?? "" });
    } else {
      if (l !== undefined) output.push({ type: "removed", text: l });
      if (r !== undefined) output.push({ type: "added", text: r });
    }
  }

  return output;
}

export function TextDiffTool() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [ran, setRan] = useState(false);

  const result = useMemo(() => diffLines(a, b), [a, b]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Text A</label>
          <textarea className="tp-input min-h-56" value={a} onChange={(e) => setA(e.target.value)} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Text B</label>
          <textarea className="tp-input min-h-56" value={b} onChange={(e) => setB(e.target.value)} />
        </div>
      </div>

      <button type="button" className="tp-button-primary" onClick={() => { setRan(true); trackEvent("tool_used", { tool: "text-diff", action: "compare" }); }}>Compare text</button>

      <div className="space-y-2">
        {ran ? result.map((line, idx) => (
          <p key={`${line.type}-${idx}`} className={`rounded-md border px-3 py-2 text-sm ${line.type === "added" ? "border-emerald-200 bg-emerald-50" : line.type === "removed" ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white"}`}>
            {line.type === "added" ? "+ " : line.type === "removed" ? "- " : "  "}
            {line.text}
          </p>
        )) : <p className="text-sm text-slate-500">No diff output yet.</p>}
      </div>
    </div>
  );
}
