type ToolIconKind =
  | "json"
  | "code"
  | "key"
  | "token"
  | "time"
  | "link"
  | "hash"
  | "search"
  | "table"
  | "document"
  | "color"
  | "markdown"
  | "image"
  | "text";

type ToolIconProps = {
  slug: string;
  className?: string;
};

const iconBySlug: Record<string, ToolIconKind> = {
  "json-formatter": "json",
  "json-validator": "json",
  "json-diff": "json",
  "json-to-csv": "table",
  "json-to-yaml": "document",
  "json-to-csharp": "code",
  "csv-to-json": "table",
  "yaml-to-json": "document",
  "base64-tools": "token",
  "uuid-generator": "key",
  "password-generator": "key",
  "jwt-decoder": "token",
  "cron-generator": "time",
  "timestamp-converter": "time",
  "url-encode-decode": "link",
  "url-parser": "link",
  "hash-generator": "hash",
  "regex-tester": "search",
  "sql-formatter": "code",
  "html-entity-encode-decode": "code",
  "xml-formatter": "code",
  "color-converter": "color",
  "markdown-preview": "markdown",
  "htaccess-generator": "document",
  "image-to-base64": "image",
  "lorem-ipsum-generator": "text",
  "text-diff": "text"
};

function IconPaths({ kind }: { kind: ToolIconKind }) {
  switch (kind) {
    case "json":
      return <path d="M9 5C7.3 5 6 6.3 6 8v1.2c0 .8-.3 1.2-.9 1.5-.4.2-.7.6-.7 1.1s.3.9.7 1.1c.6.3.9.7.9 1.5V16c0 1.7 1.3 3 3 3m6-14c1.7 0 3 1.3 3 3v1.2c0 .8.3 1.2.9 1.5.4.2.7.6.7 1.1s-.3.9-.7 1.1c-.6.3-.9.7-.9 1.5V16c0 1.7-1.3 3-3 3M12 9v6" />;
    case "code":
      return <path d="m9 8-4 4 4 4m6-8 4 4-4 4M13 6l-2 12" />;
    case "key":
      return <path d="M14.5 9.5a3.5 3.5 0 1 0-3 5.4c.8 0 1.5-.2 2.1-.7l1.9 1.9h1.5v-1.5H18v-1.5h1.5v-1.8l-2.1-2.1c-.8.2-1.7.3-2.9.3Z" />;
    case "token":
      return <path d="M12 3l7 4v10l-7 4-7-4V7l7-4Zm0 4.5L8.5 9.3V14l3.5 1.9 3.5-1.9V9.3L12 7.5Z" />;
    case "time":
      return <path d="M12 5v7l4 2m4-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />;
    case "link":
      return <path d="M10 14 8.2 15.8a3 3 0 0 1-4.2-4.2L7 8.6m7 1.4 1.8-1.8a3 3 0 1 1 4.2 4.2L17 15.4M8.5 15.5l7-7" />;
    case "hash":
      return <path d="M9 4 7 20m10-16-2 16M4 9h16M3 15h16" />;
    case "search":
      return <path d="M10.5 17a6.5 6.5 0 1 1 4.6-1.9L20 20m-8.8-10.4h.01" />;
    case "table":
      return <path d="M4 5h16v14H4zm0 4h16M9 5v14m6-14v14" />;
    case "document":
      return <path d="M8 3h6l4 4v14H8zM14 3v4h4M10 12h6M10 16h6" />;
    case "color":
      return <path d="M12 4c3.9 0 7 2.7 7 6 0 1.6-1.1 2.6-2.5 2.6H15c-.6 0-1 .4-1 1 0 .2.1.4.1.6.1.3.2.7.2 1 0 1.5-1.3 2.8-3 2.8-4.1 0-7.3-3.2-7.3-7 0-3.9 3.4-7 8-7Zm-3 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1.7a1 1 0 1 0 0-.01Zm3 1.7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />;
    case "markdown":
      return <path d="M4 6h16v12H4zm2 9V9l3 3 3-3v6m2 0V9l4 6v-6" />;
    case "image":
      return <path d="M4 6h16v12H4zm3 8 2.5-3 2 2 2.5-3 3 4m-8-4h.01" />;
    case "text":
      return <path d="M5 7h14M5 12h14M5 17h8" />;
  }
}

export function ToolIcon({ slug, className = "" }: ToolIconProps) {
  const kind = iconBySlug[slug] ?? "code";

  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-brand-700 ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconPaths kind={kind} />
      </svg>
    </span>
  );
}
