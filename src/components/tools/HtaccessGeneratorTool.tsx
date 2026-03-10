"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type RuleKey = "forceHttps" | "wwwRedirect" | "cacheStatic" | "blockHotlink";
type Notice = { type: "success" | "error"; message: string } | null;

const RULES: Record<RuleKey, string> = {
  forceHttps: `RewriteEngine On\nRewriteCond %{HTTPS} !=on\nRewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`,
  wwwRedirect: `RewriteEngine On\nRewriteCond %{HTTP_HOST} !^www\\. [NC]\nRewriteRule ^ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`,
  cacheStatic: `<IfModule mod_expires.c>\n  ExpiresActive On\n  ExpiresByType text/css "access plus 1 month"\n  ExpiresByType application/javascript "access plus 1 month"\n</IfModule>`,
  blockHotlink: `RewriteEngine On\nRewriteCond %{HTTP_REFERER} !^$\nRewriteCond %{HTTP_REFERER} !^https?://(www\\.)?toolpilot\\.xyz [NC]\nRewriteRule \\.(jpg|jpeg|png|gif)$ - [F,NC,L]`
};

const LABELS: Record<RuleKey, string> = {
  forceHttps: "Force HTTPS",
  wwwRedirect: "Redirect to www",
  cacheStatic: "Cache static files",
  blockHotlink: "Block image hotlink"
};

export function HtaccessGeneratorTool() {
  const [notice, setNotice] = useState<Notice>(null);
  const [selected, setSelected] = useState<Record<RuleKey, boolean>>({
    forceHttps: true,
    wwwRedirect: false,
    cacheStatic: true,
    blockHotlink: false
  });

  const output = useMemo(() => {
    return (Object.keys(selected) as RuleKey[])
      .filter((key) => selected[key])
      .map((key) => `# ${LABELS[key]}\n${RULES[key]}`)
      .join("\n\n");
  }, [selected]);

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setNotice({ type: "success", message: "Output copied." });
      trackEvent("copy_clicked", { tool: "htaccess-generator", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-2 sm:grid-cols-2">
        {(Object.keys(selected) as RuleKey[]).map((key) => (
          <label key={key} className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
            <input type="checkbox" checked={selected[key]} onChange={(e) => { setSelected((prev) => ({ ...prev, [key]: e.target.checked })); trackEvent("tool_used", { tool: "htaccess-generator", action: "toggle", rule: key }); }} />
            {LABELS[key]}
          </label>
        ))}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Generated .htaccess</label>
        <textarea className="tp-input min-h-72 font-mono text-xs" value={output} readOnly aria-readonly="true" />
      </div>

      <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!output}>
        Copy output
      </button>
      {notice ? (
        <p className={`text-sm ${notice.type === "error" ? "text-red-600" : "text-slate-600"}`} role={notice.type === "error" ? "alert" : "status"}>
          {notice.message}
        </p>
      ) : null}
    </div>
  );
}
