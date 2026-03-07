"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

function generateUuidV4() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = Math.floor(Math.random() * 16);
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function createUuids(count: number) {
  return Array.from({ length: count }, () => generateUuidV4());
}

export function UuidGeneratorTool() {
  const [count, setCount] = useState<1 | 5 | 10>(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [notice, setNotice] = useState<Notice>(null);

  const regenerate = (nextCount = count) => {
    const list = createUuids(nextCount);
    setUuids(list);
    setNotice({ type: "success", message: `${list.length} UUID${list.length > 1 ? "s" : ""} generated.` });
    trackEvent("tool_used", { tool: "uuid-generator", action: "generate", count: nextCount });
  };

  useEffect(() => {
    regenerate(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copySingle = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setNotice({ type: "success", message: "UUID copied." });
      trackEvent("copy_clicked", { tool: "uuid-generator", target: "single" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  const copyAll = async () => {
    if (!uuids.length) return;

    try {
      await navigator.clipboard.writeText(uuids.join("\n"));
      setNotice({ type: "success", message: "All UUIDs copied." });
      trackEvent("copy_clicked", { tool: "uuid-generator", target: "all", count: uuids.length });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        {[1, 5, 10].map((value) => (
          <button
            key={value}
            type="button"
            className={count === value ? "tp-button-primary" : "tp-button-secondary"}
            onClick={() => {
              const selected = value as 1 | 5 | 10;
              setCount(selected);
              regenerate(selected);
            }}
          >
            Generate {value}
          </button>
        ))}
        <button type="button" className="tp-button-secondary" onClick={() => regenerate()}>
          Regenerate
        </button>
        <button type="button" className="tp-button-secondary" onClick={copyAll} disabled={!uuids.length}>
          Copy all
        </button>
      </div>

      {uuids.length ? (
        <ul className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
          {uuids.map((uuid) => (
            <li key={uuid} className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <code className="text-sm text-slate-800">{uuid}</code>
              <button type="button" className="tp-button-secondary" onClick={() => copySingle(uuid)}>
                Copy
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-500">No UUIDs generated yet.</p>
      )}

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
