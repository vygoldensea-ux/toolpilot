"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

type DiffItem = {
  path: string;
  type: "added" | "removed" | "changed";
  left: unknown;
  right: unknown;
};

const EXAMPLE_A = `{
  "service": "toolpilot",
  "version": 1,
  "flags": {
    "seo": true,
    "analytics": false
  },
  "tools": ["json-formatter", "base64-tools"]
}`;

const EXAMPLE_B = `{
  "service": "toolpilot",
  "version": 2,
  "flags": {
    "seo": true,
    "analytics": true
  },
  "tools": ["json-formatter", "json-diff"],
  "status": "beta"
}`;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function walkDiff(left: unknown, right: unknown, path = "$"): DiffItem[] {
  if (Array.isArray(left) && Array.isArray(right)) {
    const max = Math.max(left.length, right.length);
    const result: DiffItem[] = [];

    for (let i = 0; i < max; i += 1) {
      const nextPath = `${path}[${i}]`;
      if (i >= left.length) {
        result.push({ path: nextPath, type: "added", left: undefined, right: right[i] });
        continue;
      }
      if (i >= right.length) {
        result.push({ path: nextPath, type: "removed", left: left[i], right: undefined });
        continue;
      }
      result.push(...walkDiff(left[i], right[i], nextPath));
    }

    return result;
  }

  if (isObject(left) && isObject(right)) {
    const keys = new Set([...Object.keys(left), ...Object.keys(right)]);
    const result: DiffItem[] = [];

    keys.forEach((key) => {
      const nextPath = `${path}.${key}`;
      const leftHas = Object.prototype.hasOwnProperty.call(left, key);
      const rightHas = Object.prototype.hasOwnProperty.call(right, key);

      if (!leftHas && rightHas) {
        result.push({ path: nextPath, type: "added", left: undefined, right: right[key] });
        return;
      }
      if (leftHas && !rightHas) {
        result.push({ path: nextPath, type: "removed", left: left[key], right: undefined });
        return;
      }

      result.push(...walkDiff(left[key], right[key], nextPath));
    });

    return result;
  }

  if (Object.is(left, right)) {
    return [];
  }

  return [{ path, type: "changed", left, right }];
}

function stringify(value: unknown) {
  if (typeof value === "string") return value;
  return JSON.stringify(value, null, 2);
}

export function JsonDiffTool() {
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [leftPretty, setLeftPretty] = useState("");
  const [rightPretty, setRightPretty] = useState("");
  const [diffs, setDiffs] = useState<DiffItem[]>([]);
  const [notice, setNotice] = useState<Notice>(null);

  const diffAsText = useMemo(
    () =>
      diffs
        .map((item) => {
          return `${item.type.toUpperCase()} ${item.path}\nA: ${stringify(item.left)}\nB: ${stringify(item.right)}`;
        })
        .join("\n\n"),
    [diffs]
  );

  const compare = () => {
    try {
      const left = JSON.parse(leftInput);
      const right = JSON.parse(rightInput);
      setLeftPretty(JSON.stringify(left, null, 2));
      setRightPretty(JSON.stringify(right, null, 2));
      const result = walkDiff(left, right);
      setDiffs(result);
      setNotice({
        type: "success",
        message: result.length ? `Found ${result.length} difference${result.length > 1 ? "s" : ""}.` : "No differences found."
      });
      trackEvent("tool_used", { tool: "json-diff", action: "compare", success: true, differences: result.length });
    } catch (error) {
      setDiffs([]);
      setLeftPretty("");
      setRightPretty("");
      setNotice({ type: "error", message: `Invalid JSON: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "json-diff", action: "compare", success: false });
    }
  };

  const copyResult = async () => {
    if (!diffAsText) return;

    try {
      await navigator.clipboard.writeText(diffAsText);
      setNotice({ type: "success", message: "Diff result copied." });
      trackEvent("copy_clicked", { tool: "json-diff", target: "result" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  const loadExample = () => {
    setLeftInput(EXAMPLE_A);
    setRightInput(EXAMPLE_B);
    setDiffs([]);
    setNotice({ type: "success", message: "Example JSON loaded." });
    trackEvent("example_clicked", { tool: "json-diff" });
  };

  const clearAll = () => {
    setLeftInput("");
    setRightInput("");
    setLeftPretty("");
    setRightPretty("");
    setDiffs([]);
    setNotice(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="json-diff-a" className="mb-2 block text-sm font-medium text-slate-700">
            JSON A
          </label>
          <textarea
            id="json-diff-a"
            className="tp-input min-h-56"
            value={leftInput}
            onChange={(event) => setLeftInput(event.target.value)}
            placeholder='{"name":"ToolPilot"}'
          />
        </div>

        <div>
          <label htmlFor="json-diff-b" className="mb-2 block text-sm font-medium text-slate-700">
            JSON B
          </label>
          <textarea
            id="json-diff-b"
            className="tp-input min-h-56"
            value={rightInput}
            onChange={(event) => setRightInput(event.target.value)}
            placeholder='{"name":"ToolPilot","status":"beta"}'
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={compare}>
          Compare JSON
        </button>
        <button type="button" className="tp-button-secondary" onClick={copyResult} disabled={!diffs.length}>
          Copy result
        </button>
        <button type="button" className="tp-button-secondary" onClick={loadExample}>
          Example JSON
        </button>
        <button type="button" className="tp-button-secondary" onClick={clearAll}>
          Clear
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Pretty JSON A</p>
          <textarea className="tp-input min-h-48" value={leftPretty} readOnly aria-readonly="true" />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Pretty JSON B</p>
          <textarea className="tp-input min-h-48" value={rightPretty} readOnly aria-readonly="true" />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-700">Differences</p>
        {diffs.length ? (
          <ul className="space-y-3">
            {diffs.map((item) => {
              const colorClass =
                item.type === "added"
                  ? "border-emerald-200 bg-emerald-50"
                  : item.type === "removed"
                    ? "border-amber-200 bg-amber-50"
                    : "border-blue-200 bg-blue-50";

              return (
                <li key={`${item.path}-${item.type}`} className={`rounded-md border px-4 py-3 text-sm ${colorClass}`}>
                  <p className="font-semibold text-slate-900">
                    {item.type.toUpperCase()}: {item.path}
                  </p>
                  <p className="mt-1 text-xs text-slate-700">A: {stringify(item.left)}</p>
                  <p className="mt-1 text-xs text-slate-700">B: {stringify(item.right)}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">No diff output yet.</p>
        )}
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
