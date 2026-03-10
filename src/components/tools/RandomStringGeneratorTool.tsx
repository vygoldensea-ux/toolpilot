"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

const CHARSETS = {
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*"
};

function randomFromPool(pool: string) {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return pool[array[0] % pool.length];
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

export function RandomStringGeneratorTool() {
  const [length, setLength] = useState(16);
  const [letters, setLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [result, setResult] = useState("");
  const [notice, setNotice] = useState<string>("");

  const generate = () => {
    let pool = "";
    if (letters) pool += CHARSETS.letters;
    if (numbers) pool += CHARSETS.numbers;
    if (symbols) pool += CHARSETS.symbols;
    if (!pool) {
      setNotice("Enable at least one character set.");
      return;
    }
    const value = Array.from({ length }, () => randomFromPool(pool)).join("");
    setResult(value);
    setNotice("Random string generated.");
    trackEvent("tool_used", { tool: "random-string-generator", action: "generate", length });
  };

  const copyOutput = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setNotice("Output copied.");
      trackEvent("copy_clicked", { tool: "random-string-generator", target: "output" });
    } catch {
      setNotice("Copy failed. Please copy manually.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Length: {length}</label>
        <input type="range" min={4} max={128} value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full" />
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <label className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked={letters} onChange={(e) => setLetters(e.target.checked)} /> Letters</label>
        <label className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} /> Numbers</label>
        <label className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} /> Symbols</label>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={generate}>Generate string</button>
        <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!result}>Copy output</button>
      </div>
      <textarea className="tp-input min-h-28" value={result} readOnly aria-readonly="true" placeholder="Generated string appears here" />
      {notice ? <p className="text-sm text-slate-600">{notice}</p> : null}
    </div>
  );
}
