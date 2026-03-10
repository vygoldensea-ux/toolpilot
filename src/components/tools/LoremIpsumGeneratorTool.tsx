"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
type Notice = { type: "success" | "error"; message: string } | null;

function randomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function generateSentence(wordCount: number) {
  const sentence = Array.from({ length: wordCount }, randomWord).join(" ");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

export function LoremIpsumGeneratorTool() {
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const generate = () => {
    const text = Array.from({ length: count }, () => Array.from({ length: 24 }, () => generateSentence(8)).join(" ")).join("\n\n");
    setOutput(text);
    setNotice({ type: "success", message: "Lorem ipsum generated." });
    trackEvent("tool_used", { tool: "lorem-ipsum-generator", action: "generate", count });
  };

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setNotice({ type: "success", message: "Output copied." });
      trackEvent("copy_clicked", { tool: "lorem-ipsum-generator", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="lorem-count" className="mb-2 block text-sm font-medium text-slate-700">Paragraphs: {count}</label>
        <input id="lorem-count" type="range" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full" />
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={generate}>Generate text</button>
        <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!output}>Copy output</button>
      </div>
      <textarea className="tp-input min-h-64" value={output} readOnly aria-readonly="true" placeholder="Generated text appears here" />
      {notice ? <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`}>{notice.message}</p> : null}
    </div>
  );
}
