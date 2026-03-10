"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

function hexToRgb(hex: string) {
  const value = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(value)) throw new Error("HEX must be 6 characters.");
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function rgbToHsl(r: number, g: number, b: number) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;

  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case rn: h = 60 * (((gn - bn) / d) % 6); break;
      case gn: h = 60 * ((bn - rn) / d + 2); break;
      default: h = 60 * ((rn - gn) / d + 4); break;
    }
  }

  if (h < 0) h += 360;
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number) {
  const sn = s / 100;
  const ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = ln - c / 2;
  let [r1, g1, b1] = [0, 0, 0];

  if (h < 60) [r1, g1, b1] = [c, x, 0];
  else if (h < 120) [r1, g1, b1] = [x, c, 0];
  else if (h < 180) [r1, g1, b1] = [0, c, x];
  else if (h < 240) [r1, g1, b1] = [0, x, c];
  else if (h < 300) [r1, g1, b1] = [x, 0, c];
  else [r1, g1, b1] = [c, 0, x];

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255)
  };
}

export function ColorConverterTool() {
  const [hex, setHex] = useState("#3366FF");
  const [rgb, setRgb] = useState("51, 102, 255");
  const [hsl, setHsl] = useState("225, 100, 60");
  const [notice, setNotice] = useState<Notice>(null);

  const fromHex = () => {
    try {
      const { r, g, b } = hexToRgb(hex);
      const hslValue = rgbToHsl(r, g, b);
      setRgb(`${r}, ${g}, ${b}`);
      setHsl(`${hslValue.h}, ${hslValue.s}, ${hslValue.l}`);
      setNotice({ type: "success", message: "Converted from HEX." });
      trackEvent("tool_used", { tool: "color-converter", action: "hex" });
    } catch (error) {
      setNotice({ type: "error", message: (error as Error).message });
    }
  };

  const fromRgb = () => {
    try {
      const parts = rgb.split(",").map((n) => Number.parseInt(n.trim(), 10));
      if (parts.length !== 3 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) throw new Error("RGB format: r, g, b (0-255).");
      const [r, g, b] = parts;
      const hslValue = rgbToHsl(r, g, b);
      setHex(rgbToHex(r, g, b));
      setHsl(`${hslValue.h}, ${hslValue.s}, ${hslValue.l}`);
      setNotice({ type: "success", message: "Converted from RGB." });
      trackEvent("tool_used", { tool: "color-converter", action: "rgb" });
    } catch (error) {
      setNotice({ type: "error", message: (error as Error).message });
    }
  };

  const fromHsl = () => {
    try {
      const parts = hsl.split(",").map((n) => Number.parseInt(n.trim(), 10));
      if (parts.length !== 3 || Number.isNaN(parts[0]) || Number.isNaN(parts[1]) || Number.isNaN(parts[2])) throw new Error("HSL format: h, s, l.");
      const [h, s, l] = parts;
      if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) throw new Error("HSL ranges: h 0-360, s/l 0-100.");
      const rgbValue = hslToRgb(h, s, l);
      setRgb(`${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}`);
      setHex(rgbToHex(rgbValue.r, rgbValue.g, rgbValue.b));
      setNotice({ type: "success", message: "Converted from HSL." });
      trackEvent("tool_used", { tool: "color-converter", action: "hsl" });
    } catch (error) {
      setNotice({ type: "error", message: (error as Error).message });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">HEX</label>
          <input className="tp-input" value={hex} onChange={(e) => setHex(e.target.value)} />
          <button type="button" className="tp-button-secondary mt-3" onClick={fromHex}>Convert HEX</button>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">RGB</label>
          <input className="tp-input" value={rgb} onChange={(e) => setRgb(e.target.value)} />
          <button type="button" className="tp-button-secondary mt-3" onClick={fromRgb}>Convert RGB</button>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">HSL</label>
          <input className="tp-input" value={hsl} onChange={(e) => setHsl(e.target.value)} />
          <button type="button" className="tp-button-secondary mt-3" onClick={fromHsl}>Convert HSL</button>
        </div>
      </div>
      <div className="h-12 rounded-md border border-slate-200" style={{ backgroundColor: hex }} aria-label="Color preview" />
      {notice ? <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`}>{notice.message}</p> : null}
    </div>
  );
}
