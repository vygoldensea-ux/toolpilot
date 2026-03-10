"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type Notice = { type: "success" | "error"; message: string } | null;

type CSharpProperty = {
  name: string;
  type: string;
};

type CSharpClass = {
  name: string;
  properties: CSharpProperty[];
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const EXAMPLE_JSON = `{
  "user": {
    "id": 42,
    "name": "Jade",
    "roles": ["admin", "editor"],
    "preferences": {
      "theme": "light",
      "notifications": true
    }
  },
  "projects": [
    { "id": 1, "title": "ToolPilot", "active": true },
    { "id": 2, "title": "Landing Page", "active": false }
  ]
}`;

function toPascalCase(value: string) {
  const normalized = value.replace(/[^a-zA-Z0-9]+/g, " ").trim();
  const words = normalized.split(/\s+/).filter(Boolean);
  const pascal = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  if (!pascal) {
    return "Value";
  }

  return /^\d/.test(pascal) ? `N${pascal}` : pascal;
}

function inferNumberType(value: number) {
  if (!Number.isFinite(value)) return "double";
  if (!Number.isInteger(value)) return "double";
  if (value >= -2147483648 && value <= 2147483647) return "int";
  return "long";
}

function mergeArrayType(types: string[]) {
  const unique = Array.from(new Set(types));
  if (unique.length === 1) return unique[0];
  if (unique.every((type) => ["int", "long", "double"].includes(type))) {
    return unique.includes("double") ? "double" : unique.includes("long") ? "long" : "int";
  }
  return "object";
}

function generateClassesFromJson(input: unknown, rootClassName: string, includeSerializable: boolean) {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new Error("Root JSON must be an object.");
  }

  const classes: CSharpClass[] = [];
  const usedClassNames = new Set<string>();

  function getUniqueClassName(baseName: string) {
    const base = toPascalCase(baseName);
    if (!usedClassNames.has(base)) {
      usedClassNames.add(base);
      return base;
    }

    let i = 2;
    while (usedClassNames.has(`${base}${i}`)) i += 1;
    const next = `${base}${i}`;
    usedClassNames.add(next);
    return next;
  }

  function resolveType(value: unknown, suggestedClassName: string): string {
    if (value === null || value === undefined) return "object";

    if (Array.isArray(value)) {
      if (!value.length) return "List<object>";

      const definedItems = value.filter((item) => item !== null && item !== undefined);
      if (!definedItems.length) return "List<object>";

      if (definedItems.every((item) => isRecord(item))) {
        const className = getUniqueClassName(`${suggestedClassName}Item`);
        buildClass(className, definedItems[0]);
        return `List<${className}>`;
      }

      const elementTypes = definedItems.map((item) => resolveType(item, `${suggestedClassName}Item`));
      return `List<${mergeArrayType(elementTypes)}>`;
    }

    switch (typeof value) {
      case "string":
        return "string";
      case "number":
        return inferNumberType(value);
      case "boolean":
        return "bool";
      case "object": {
        const objectValue = value as Record<string, unknown>;
        const className = getUniqueClassName(suggestedClassName);
        buildClass(className, objectValue);
        return className;
      }
      default:
        return "object";
    }
  }

  function buildClass(className: string, objectValue: Record<string, unknown>) {
    const properties: CSharpProperty[] = Object.entries(objectValue).map(([key, value]) => ({
      name: toPascalCase(key),
      type: resolveType(value, `${className}${toPascalCase(key)}`)
    }));

    classes.push({ name: className, properties });
  }

  const root = getUniqueClassName(rootClassName || "RootObject");
  buildClass(root, input as Record<string, unknown>);

  const fileParts: string[] = ["using System;", "using System.Collections.Generic;", ""];

  classes.forEach((classDef) => {
    if (includeSerializable) {
      fileParts.push("[System.Serializable]");
    }
    fileParts.push(`public class ${classDef.name}`);
    fileParts.push("{");
    classDef.properties.forEach((property) => {
      fileParts.push(`    public ${property.type} ${property.name} { get; set; }`);
    });
    fileParts.push("}");
    fileParts.push("");
  });

  return fileParts.join("\n").trim();
}

export function JsonToCSharpTool() {
  const [input, setInput] = useState("");
  const [className, setClassName] = useState("RootObject");
  const [serializable, setSerializable] = useState(false);
  const [output, setOutput] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const downloadFilename = useMemo(() => {
    const clean = toPascalCase(className || "RootObject");
    return `${clean}.cs`;
  }, [className]);

  const run = () => {
    try {
      const parsed = JSON.parse(input);
      const generated = generateClassesFromJson(parsed, className, serializable);
      setOutput(generated);
      setNotice({ type: "success", message: "C# classes generated." });
      trackEvent("tool_used", { tool: "json-to-csharp", action: "generate", success: true });
    } catch (error) {
      setOutput("");
      setNotice({ type: "error", message: `Invalid input: ${(error as Error).message}` });
      trackEvent("tool_used", { tool: "json-to-csharp", action: "generate", success: false });
    }
  };

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setNotice({ type: "success", message: "C# output copied." });
      trackEvent("copy_clicked", { tool: "json-to-csharp", target: "output" });
    } catch {
      setNotice({ type: "error", message: "Copy failed. Please copy manually." });
    }
  };

  const downloadOutput = () => {
    if (!output) return;

    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    trackEvent("tool_used", { tool: "json-to-csharp", action: "download" });
  };

  const loadExample = () => {
    setInput(EXAMPLE_JSON);
    setOutput("");
    setNotice({ type: "success", message: "Example JSON loaded." });
    trackEvent("example_clicked", { tool: "json-to-csharp" });
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setNotice(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div>
          <label htmlFor="json-csharp-input" className="mb-2 block text-sm font-medium text-slate-700">
            JSON input
          </label>
          <textarea
            id="json-csharp-input"
            className="tp-input min-h-64"
            placeholder='{"id":1,"name":"ToolPilot"}'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="csharp-class-name" className="mb-2 block text-sm font-medium text-slate-700">
              Root class name
            </label>
            <input
              id="csharp-class-name"
              className="tp-input"
              value={className}
              onChange={(event) => setClassName(event.target.value)}
              placeholder="RootObject"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={serializable}
              onChange={(event) => setSerializable(event.target.checked)}
            />
            Include [System.Serializable]
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="json-csharp-output" className="mb-2 block text-sm font-medium text-slate-700">
          Generated C# classes
        </label>
        <textarea
          id="json-csharp-output"
          className="tp-input min-h-72 font-mono text-xs"
          value={output}
          readOnly
          aria-readonly="true"
          placeholder="C# output will appear here"
        />
        {!output ? <p className="mt-2 text-xs text-slate-500">No output yet.</p> : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" onClick={run}>
          Generate classes
        </button>
        <button type="button" className="tp-button-secondary" onClick={copyOutput} disabled={!output}>
          Copy output
        </button>
        <button type="button" className="tp-button-secondary" onClick={downloadOutput} disabled={!output}>
          Download .cs
        </button>
        <button type="button" className="tp-button-secondary" onClick={loadExample}>
          Example JSON
        </button>
        <button type="button" className="tp-button-secondary" onClick={clearAll}>
          Clear
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
