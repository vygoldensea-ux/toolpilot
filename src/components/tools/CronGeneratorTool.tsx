"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type CronPreset = {
  id: string;
  label: string;
  expression: string;
  explanation: string;
};

const PRESETS: CronPreset[] = [
  {
    id: "every-minute",
    label: "Every minute",
    expression: "* * * * *",
    explanation: "Runs every minute."
  },
  {
    id: "every-5-minutes",
    label: "Every 5 minutes",
    expression: "*/5 * * * *",
    explanation: "Runs at 5-minute intervals each hour."
  },
  {
    id: "every-hour",
    label: "Every hour",
    expression: "0 * * * *",
    explanation: "Runs at minute 0 of every hour."
  },
  {
    id: "every-day",
    label: "Every day",
    expression: "0 0 * * *",
    explanation: "Runs daily at midnight."
  },
  {
    id: "every-week",
    label: "Every week",
    expression: "0 0 * * 0",
    explanation: "Runs weekly on Sunday at midnight."
  },
  {
    id: "every-month",
    label: "Every month",
    expression: "0 0 1 * *",
    explanation: "Runs monthly on day 1 at midnight."
  }
];

export function CronGeneratorTool() {
  const [selectedId, setSelectedId] = useState(PRESETS[0].id);
  const [copied, setCopied] = useState(false);

  const selected = useMemo(
    () => PRESETS.find((preset) => preset.id === selectedId) ?? PRESETS[0],
    [selectedId]
  );

  const copyExpression = async () => {
    try {
      await navigator.clipboard.writeText(selected.expression);
      setCopied(true);
      trackEvent("copy_clicked", { tool: "cron-generator", target: "expression" });
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-slate-700">Choose schedule</legend>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PRESETS.map((preset) => (
            <label
              key={preset.id}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              <input
                type="radio"
                name="cron-preset"
                value={preset.id}
                checked={selectedId === preset.id}
                onChange={(event) => {
                  setSelectedId(event.target.value);
                  trackEvent("tool_used", { tool: "cron-generator", action: "select_preset", preset: event.target.value });
                }}
              />
              {preset.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cron-expression" className="mb-2 block text-sm font-medium text-slate-700">
          Cron expression
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input id="cron-expression" className="tp-input" value={selected.expression} readOnly />
          <button type="button" className="tp-button-secondary sm:min-w-24" onClick={copyExpression}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-600">{selected.explanation}</p>
    </div>
  );
}
