"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

export function ImageToBase64Tool() {
  const [result, setResult] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const onFileChange = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const value = String(reader.result ?? "");
      setResult(value);
      setNotice({ type: "success", message: "Image converted to Base64." });
      trackEvent("tool_used", { tool: "image-to-base64", action: "convert", success: true });
    };
    reader.onerror = () => {
      setResult("");
      setNotice({ type: "error", message: "Failed to read image file." });
      trackEvent("tool_used", { tool: "image-to-base64", action: "convert", success: false });
    };
    reader.readAsDataURL(file);
  };

  const copyOutput = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setNotice({ type: "success", message: "Base64 copied." });
      trackEvent("copy_clicked", { tool: "image-to-base64", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="image-input" className="mb-2 block text-sm font-medium text-slate-700">Upload image</label>
        <input id="image-input" type="file" accept="image/*" className="tp-input" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} />
      </div>
      <div>
        <label htmlFor="image-base64-output" className="mb-2 block text-sm font-medium text-slate-700">Base64 output</label>
        <textarea id="image-base64-output" className="tp-input min-h-64" value={result} readOnly aria-readonly="true" />
      </div>
      <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!result}>
        Copy output
      </button>
      {notice ? <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`}>{notice.message}</p> : null}
    </div>
  );
}
