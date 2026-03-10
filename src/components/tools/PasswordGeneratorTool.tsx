"use client";

import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

const CHARSETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.?/"
};

type Options = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

function getRandomIndex(max: number) {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function generatePassword(length: number, pool: string) {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += pool[getRandomIndex(pool.length)];
  }
  return result;
}

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [count, setCount] = useState<1 | 5 | 10>(1);
  const [options, setOptions] = useState<Options>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });
  const [passwords, setPasswords] = useState<string[]>([]);
  const [notice, setNotice] = useState<Notice>(null);

  const pool = useMemo(() => {
    let value = "";
    if (options.uppercase) value += CHARSETS.uppercase;
    if (options.lowercase) value += CHARSETS.lowercase;
    if (options.numbers) value += CHARSETS.numbers;
    if (options.symbols) value += CHARSETS.symbols;
    return value;
  }, [options]);

  const run = () => {
    if (!pool.length) {
      setPasswords([]);
      setNotice({ type: "error", message: "Enable at least one character type." });
      trackEvent("tool_used", { tool: "password-generator", action: "generate", success: false });
      return;
    }

    const generated = Array.from({ length: count }, () => generatePassword(length, pool));
    setPasswords(generated);
    setNotice({ type: "success", message: `${generated.length} password${generated.length > 1 ? "s" : ""} generated.` });
    trackEvent("tool_used", {
      tool: "password-generator",
      action: "generate",
      success: true,
      count,
      length
    });
  };

  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copySingle = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setNotice({ type: "success", message: "Password copied." });
      trackEvent("copy_clicked", { tool: "password-generator", target: "single" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  const copyAll = async () => {
    if (!passwords.length) return;

    try {
      await navigator.clipboard.writeText(passwords.join("\n"));
      setNotice({ type: "success", message: "All passwords copied." });
      trackEvent("copy_clicked", { tool: "password-generator", target: "all", count: passwords.length });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="password-length" className="mb-2 block text-sm font-medium text-slate-700">
              Password length: {length}
            </label>
            <input
              id="password-length"
              type="range"
              min={8}
              max={64}
              value={length}
              onChange={(event) => setLength(Number(event.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">Character sets</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(options) as Array<keyof Options>).map((key) => (
                <label key={key} className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={(event) => setOptions((prev) => ({ ...prev, [key]: event.target.checked }))}
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">Generate count</p>
            <div className="flex flex-wrap gap-2">
              {[1, 5, 10].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={count === value ? "tp-button-primary" : "tp-button-secondary"}
                  onClick={() => setCount(value as 1 | 5 | 10)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Generated passwords</p>
          {passwords.length ? (
            <ul className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
              {passwords.map((password, index) => (
                <li key={`${password}-${index}`} className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <code className="break-all text-sm text-slate-800">{password}</code>
                  <button type="button" className="tp-button-secondary" onClick={() => copySingle(password)}>
                    Copy
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">No passwords generated yet.</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={run}>
          Generate
        </button>
        <button type="button" className="tp-button-secondary" onClick={copyAll} disabled={!passwords.length}>
          Copy all
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
