export type NavItem = {
  label: string;
  href: string;
};

export type ToolExample = {
  title: string;
  input: string;
  output: string;
};

export type ToolDefinition = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  intro: string;
  howToUse: string[];
  example: ToolExample;
  guideHeading: string;
  guideParagraphs: string[];
  faqs: Array<{ question: string; answer: string }>;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
};

export type ToolRegistryStatus = "live" | "planned";

export type ToolRegistryItem = {
  slug: string;
  name: string;
  summary: string;
  keywords: string[];
  status: ToolRegistryStatus;
};

export const siteConfig = {
  name: "ToolPilot",
  domain: "toolpilot.xyz",
  baseUrl: "https://toolpilot.xyz",
  description:
    "ToolPilot is a collection of online developer tools for formatting, encoding, decoding, and automation workflows.",
  social: {
    ogImage: "/og-default.svg"
  },
  navigation: [
    { label: "Tools", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "HTML Sitemap", href: "/sitemap" }
  ] satisfies NavItem[]
} as const;

export const tools: ToolDefinition[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    summary: "Format, minify, and validate JSON instantly in your browser.",
    description:
      "Use this JSON formatter to beautify JSON, minify payloads, and validate syntax before shipping API integrations.",
    intro:
      "This JSON formatter is built for developers who need fast feedback while working with APIs, config files, logs, and request payloads. You can paste raw text, run format to get clean indentation, run minify for compact output, and validate to catch syntax problems. The tool runs in your browser for quick iteration and supports copy actions for immediate reuse in code editors, API clients, and documentation.",
    howToUse: [
      "Paste JSON into the input editor.",
      "Click Format to beautify JSON with readable indentation.",
      "Click Minify when you need compact JSON for payloads or snapshots.",
      "Use Validate to confirm syntax before copying output."
    ],
    example: {
      title: "Format nested API payload",
      input: '{"service":"toolpilot","flags":{"seo":true,"a11y":true}}',
      output: '{\n  "service": "toolpilot",\n  "flags": {\n    "seo": true,\n    "a11y": true\n  }\n}'
    },
    guideHeading: "How developers use this JSON formatter in real workflows",
    guideParagraphs: [
      "When debugging APIs, teams often receive JSON that is valid but hard to scan quickly. A JSON beautifier improves readability by expanding nested structures into predictable indentation levels. This makes it easier to review field names, compare payload versions, and verify that optional keys are present. For backend and frontend engineers, readability directly reduces time spent chasing data-shape issues during integration work.",
      "A JSON validator is equally important when payloads are assembled from templates, copied from logs, or edited by hand. Small mistakes such as trailing commas, unquoted keys, or malformed strings can break local test runs and CI jobs. Running validation before committing changes catches these errors early. It also gives clearer error feedback than a generic parser failure buried in a stack trace.",
      "Minified output is useful for practical tasks like creating compact fixtures, testing transport size, or storing snapshots where whitespace should be removed. This page keeps format, minify, and validation in one place so the workflow stays simple. If you also inspect encoded payloads or token data, continue with Base64 Tools and JWT Decoder from the related tools section for a connected debugging flow across formats.",
      "Teams that publish API docs can also use a JSON beautifier to present examples that are easy to read and diff. Consistent formatting improves onboarding for new contributors and helps reviewers spot breaking changes quickly. When docs and tests share readable payloads, collaboration gets smoother and mistakes are easier to catch before deployment.",
      "For automation-heavy projects, a JSON validator is valuable in pre-commit checks and CI scripts where malformed fixtures can waste pipeline time. Validating early and often keeps toolchains predictable. This page is intentionally simple so it can serve as a quick checkpoint before data enters your application code, request builders, or job processors."
    ],
    faqs: [
      {
        question: "Does this JSON formatter send my data to a server?",
        answer:
          "The MVP implementation processes content in the browser and does not require a database or account."
      },
      {
        question: "What is the difference between a JSON beautifier and JSON validator?",
        answer:
          "Beautifying changes whitespace for readability, while validation checks whether syntax is valid JSON."
      },
      {
        question: "When should I use minified JSON?",
        answer:
          "Use minified JSON for compact payloads, fixture snapshots, and cases where whitespace should be removed."
      }
    ],
    keywords: ["json formatter", "json beautifier", "json validator"],
    seoTitle: "JSON Formatter, Beautifier and Validator",
    seoDescription:
      "Free JSON formatter, JSON beautifier, and JSON validator for developers. Format, minify, validate, and copy JSON quickly.",
    relatedSlugs: ["jwt-decoder", "base64-tools", "uuid-generator"]
  },
  {
    slug: "base64-tools",
    name: "Base64 Encode / Decode",
    summary: "Encode text to Base64 or decode Base64 to readable text.",
    description:
      "Use this Base64 encoder decoder to convert plain text and Base64 values quickly with clear output and error handling.",
    intro:
      "Base64 Tools provides a simple encode and decode workflow for developers working with API tokens, payload fragments, environment values, and transport-safe text formats. Switch modes depending on your task, paste input, run the action, and copy output. The interface keeps the flow minimal so you can move between troubleshooting and implementation without context switching.",
    howToUse: [
      "Select Encode to convert plain text into Base64.",
      "Select Decode to transform Base64 text into readable UTF-8 text.",
      "Use Example Input to test quickly.",
      "Copy the result directly into your app, script, or docs."
    ],
    example: {
      title: "Encode app name",
      input: "ToolPilot",
      output: "VG9vbFBpbG90"
    },
    guideHeading: "When to use a Base64 encoder decoder",
    guideParagraphs: [
      "Base64 encode operations are common when systems require ASCII-safe transport or when binary-like values are represented in text channels. Developers frequently see this pattern in HTTP headers, OAuth integrations, temporary debugging flows, and toolchain outputs. A reliable base64 encode utility helps verify values quickly before they are passed into scripts, APIs, or config variables.",
      "Base64 decode capability is just as useful when inspecting incoming data. During incident analysis or integration work, you may receive encoded blobs from services, browser storage, or message queues. Decoding those values into readable text helps verify whether the expected data reached your system. Quick decode feedback can reduce back-and-forth when checking upstream formatting assumptions.",
      "This page keeps both directions in one interface so you can move from encode to decode without opening another tab. It also includes explicit error states for invalid input, which is useful when payloads include broken padding or non-Base64 characters. For adjacent tasks, use JSON Formatter to clean decoded JSON and JWT Decoder to inspect token claims after decoding the payload section.",
      "Because this Base64 encoder decoder supports quick mode switching, it works well during iterative debugging where values are transformed multiple times across services. You can encode outbound data, decode responses, and confirm both sides of a protocol loop with minimal friction. This reduces dependency on ad-hoc scripts and keeps troubleshooting in a repeatable flow.",
      "It is still important to remember that Base64 does not provide confidentiality. When handling credentials or private data, use secure transport and proper encryption. Treat this tool as a formatting and inspection aid only. For secure implementations, pair this workflow with backend validation, secret management, and protocol-level security controls."
    ],
    faqs: [
      {
        question: "Is Base64 the same as encryption?",
        answer:
          "No. Base64 is an encoding format, not an encryption method, and should not be treated as security."
      },
      {
        question: "Why might Base64 decode fail?",
        answer:
          "Decode can fail if input has invalid characters, incorrect padding, or non-UTF-8 content."
      },
      {
        question: "Can I switch between encode and decode quickly?",
        answer:
          "Yes. The tool includes a direct mode toggle so you can test both directions in one workflow."
      }
    ],
    keywords: ["base64 encode", "base64 decode", "base64 encoder decoder"],
    seoTitle: "Base64 Encode and Decode Tool",
    seoDescription:
      "Fast Base64 encode and Base64 decode utility for developers. Convert text, handle errors, and copy output in one page.",
    relatedSlugs: ["json-formatter", "jwt-decoder", "cron-generator"]
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    summary: "Generate UUID v4 values in one click for IDs and test data.",
    description:
      "Create random UUID v4 strings in batches of 1, 5, or 10 and copy single values or full sets instantly.",
    intro:
      "This UUID generator is designed for everyday engineering tasks where unique identifiers are needed quickly. Generate one UUID for a quick test, or generate 5 or 10 UUIDs for fixtures, seed scripts, and batch import preparation. The output list supports copy per item and copy all to reduce repetitive manual work.",
    howToUse: [
      "Choose Generate 1, Generate 5, or Generate 10.",
      "Click Regenerate to create a fresh set with the same count.",
      "Copy one UUID with the row action, or copy all values together.",
      "Paste IDs into tests, migrations, or temporary datasets."
    ],
    example: {
      title: "Generate one UUID v4",
      input: "count: 1",
      output: "8c0250f1-3f2d-4fcc-90eb-6a4198b3ec8b"
    },
    guideHeading: "Why a UUID v4 generator matters in development",
    guideParagraphs: [
      "A UUID v4 generator is useful whenever identifiers must be unique without coordinating with a central service. In local development, engineers often need IDs before a database record exists. Generating UUIDs on demand helps build realistic request payloads, integration tests, and contract examples quickly while keeping test data deterministic in structure.",
      "Batch generation is especially practical in test preparation. Instead of repeatedly invoking code or writing helper scripts, you can generate 5 or 10 IDs in one action and copy all results immediately. This speeds up fixture creation, reduces accidental duplicates, and keeps exploratory testing efficient when you need many independent entities in a short session.",
      "Although UUIDs are easy to create, consistency of format matters. This tool always outputs canonical UUID v4 strings and keeps the interface focused on high-frequency actions: generate, regenerate, copy one, and copy all. If your workflow also involves payload inspection or encoded values, pair this page with JSON Formatter and Base64 Tools to keep your data-handling pipeline in one tool suite.",
      "A uuid generator is also useful for load testing and synthetic data generation where primary keys must remain collision-resistant across parallel test workers. Having immediate batch output speeds up setup for distributed test suites and helps ensure each run has isolated entity identifiers without waiting on persistence layers to allocate IDs.",
      "In documentation workflows, UUID examples help demonstrate resource references in a realistic way. Engineers can quickly generate clean sample values for API guides, mock responses, and onboarding material. Keeping this utility close to other ToolPilot pages means you can generate identifiers, format payloads, and inspect encoded values within the same consistent environment."
    ],
    faqs: [
      {
        question: "Which UUID version does this tool generate?",
        answer: "This page generates UUID v4 values intended for random identifiers."
      },
      {
        question: "Can I generate multiple UUIDs at once?",
        answer: "Yes. You can generate 1, 5, or 10 UUIDs per action."
      },
      {
        question: "Can I copy all generated UUIDs in one action?",
        answer: "Yes. Use Copy all to place the full list on your clipboard."
      }
    ],
    keywords: ["uuid generator", "uuid v4 generator"],
    seoTitle: "UUID Generator (UUID v4)",
    seoDescription:
      "Generate UUID v4 values online. Create 1, 5, or 10 UUIDs, copy individual IDs, or copy all at once.",
    relatedSlugs: ["json-formatter", "base64-tools", "jwt-decoder"]
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    summary: "Decode JWT header and payload into readable JSON instantly.",
    description:
      "Use this JWT decoder to inspect token structure, view claims, and copy parsed header or payload sections.",
    intro:
      "JWT Decoder helps developers inspect JSON Web Tokens during authentication and API debugging. Paste a token and decode the header and payload into pretty JSON for fast claim review. The interface includes clear error handling for malformed tokens and copy actions for each decoded section. A visible warning reminds users that decoding does not verify token integrity or security.",
    howToUse: [
      "Paste a JWT token into the input field.",
      "Click Decode token to parse the header and payload sections.",
      "Copy header or payload JSON with section-level copy buttons.",
      "Use the warning guidance and validate signatures server-side."
    ],
    example: {
      title: "Decode token payload",
      input: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0IiwibmFtZSI6IkRldiJ9.signature",
      output: '{\n  "sub": "1234",\n  "name": "Dev"\n}'
    },
    guideHeading: "JWT decoding best practices for developers",
    guideParagraphs: [
      "A jwt decoder is most useful when authentication flows fail and you need to inspect token structure quickly. By decoding header and payload, you can check algorithm declarations, issuer claims, audience fields, expiration timestamps, and custom attributes. This visibility helps isolate whether failures are caused by claim content, clock drift, or routing between services.",
      "It is important to distinguish decode from verification. Decode jwt tools parse Base64URL segments into readable JSON, but they do not validate signatures against a trusted secret or public key. A token can look correct in decoded form while still being invalid or tampered with. Production security checks must always run on the server side in trusted infrastructure.",
      "This page is optimized for troubleshooting speed: paste, decode, copy sections, and move on. It works well alongside JSON Formatter when you need to reformat claim payloads for documentation, and alongside Base64 Tools when you inspect encoded segments independently. Together, these utilities reduce friction in auth debugging without adding unnecessary UI complexity.",
      "A practical workflow is to decode jwt values during incident triage, confirm key claims such as `exp`, `iss`, and `aud`, then validate the same token in your backend service logs. This separates presentation checks from trust checks and prevents false confidence. You gain fast visibility while preserving security boundaries in production systems.",
      "For teams maintaining multiple environments, decoded output also helps detect configuration drift. If staging and production tokens carry different claims or issuer formats, side-by-side comparison can reveal deployment mismatches. The section-level copy actions make it easier to capture evidence in tickets and communicate findings with other engineers."
    ],
    faqs: [
      {
        question: "Does this JWT decoder verify signatures?",
        answer:
          "No. It decodes token sections only; signature verification must be handled separately on trusted systems."
      },
      {
        question: "Why do I see an error for some tokens?",
        answer:
          "Errors occur when the token is malformed, missing parts, or contains invalid Base64URL data."
      },
      {
        question: "Can I copy decoded header and payload separately?",
        answer: "Yes. Each section includes its own copy action for easier debugging workflows."
      }
    ],
    keywords: ["jwt decoder", "decode jwt"],
    seoTitle: "JWT Decoder - Decode JWT Tokens",
    seoDescription:
      "Decode JWT tokens online and inspect header and payload claims. Copy parsed JSON and troubleshoot auth flows quickly.",
    relatedSlugs: ["json-formatter", "base64-tools", "uuid-generator"]
  },
  {
    slug: "cron-generator",
    name: "Cron Generator",
    summary: "Generate common cron expressions with readable schedule presets.",
    description:
      "Use this cron expression generator to create recurring schedules for jobs, automations, and server tasks.",
    intro:
      "Cron Generator simplifies scheduling by turning common intervals into ready-to-use cron expressions. Choose a preset such as every minute, every 5 minutes, hourly, daily, weekly, or monthly. The page shows the expression and a clear human-readable explanation, then lets you copy the result directly into your scheduler configuration.",
    howToUse: [
      "Select a schedule preset from the list.",
      "Review the generated cron expression.",
      "Read the human explanation to confirm run timing.",
      "Copy the expression and paste it into your job scheduler."
    ],
    example: {
      title: "Run every weekday at 9:30",
      input: "Weekdays + 09:30",
      output: "30 9 * * 1-5"
    },
    guideHeading: "Using a cron expression generator safely",
    guideParagraphs: [
      "A cron generator helps teams avoid syntax mistakes when configuring recurring jobs. Even experienced engineers can misplace fields under time pressure, especially when jumping between environments or scheduler variants. Preset-driven generation reduces human error and speeds up routine automation work for backups, report generation, and queue maintenance.",
      "Understanding what the expression means is as important as generating it. This page pairs each cron expression with a plain-language explanation so you can confirm intended timing before deployment. That extra verification step is valuable when jobs have operational impact, such as billing tasks, cleanup jobs, or workflows that trigger downstream systems.",
      "For best results, treat generated expressions as part of a documented runbook. Record timezone assumptions and test schedules in staging before production rollout. When cron jobs produce or consume structured payloads, JSON Formatter can validate job outputs, while UUID Generator can help create stable identifiers for test executions and audit trace data.",
      "A cron expression generator is especially helpful for teams that rotate on-call responsibilities. Standardized presets reduce ambiguity when handoffs occur, and clear descriptions make schedules easier to audit during incident response. Instead of decoding syntax manually each time, engineers can quickly confirm what is expected to run and when.",
      "Before applying a generated schedule in production, verify whether your scheduler interprets days and timezone settings exactly as expected. Small differences between platforms can change execution timing. Keeping expression generation and review in one page lowers the chance of silent scheduling errors and supports more reliable operations."
    ],
    faqs: [
      {
        question: "What format does this cron generator output?",
        answer:
          "The page currently outputs standard 5-field cron expressions commonly used by many schedulers."
      },
      {
        question: "Can I copy the generated cron expression?",
        answer: "Yes. A copy action is provided next to the generated expression."
      },
      {
        question: "Why include a human-readable explanation?",
        answer:
          "It helps confirm schedule intent and prevents accidental timing mistakes before deployment."
      }
    ],
    keywords: ["cron generator", "cron expression generator"],
    seoTitle: "Cron Generator and Cron Expression Generator",
    seoDescription:
      "Generate cron expressions for common schedules. Use this cron expression generator to create and copy reliable job timing rules.",
    relatedSlugs: ["json-formatter", "uuid-generator", "base64-tools"]
  }
];

export const toolsBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

const plannedTools: ToolRegistryItem[] = [
  {
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    summary: "Convert Unix timestamps to human-readable dates and back.",
    keywords: ["timestamp converter", "unix timestamp converter"],
    status: "live"
  },
  {
    slug: "url-encode-decode",
    name: "URL Encode / Decode",
    summary: "Encode and decode URL-safe strings for query parameters and APIs.",
    keywords: ["url encode decode", "url encoder decoder"],
    status: "live"
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    summary: "Generate hashes like MD5, SHA-1, and SHA-256 for test and verification workflows.",
    keywords: ["hash generator", "sha256 generator"],
    status: "live"
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    summary: "Test regular expressions with live match feedback and capture group inspection.",
    keywords: ["regex tester", "regular expression tester"],
    status: "live"
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    summary: "Convert JSON arrays to CSV for spreadsheets and export workflows.",
    keywords: ["json to csv converter"],
    status: "live"
  },
  {
    slug: "csv-to-json",
    name: "CSV to JSON Converter",
    summary: "Convert CSV data into JSON objects for APIs and application workflows.",
    keywords: ["csv to json converter"],
    status: "live"
  },
  {
    slug: "yaml-to-json",
    name: "YAML to JSON",
    summary: "Convert YAML config to valid JSON quickly.",
    keywords: ["yaml to json"],
    status: "live"
  },
  {
    slug: "json-to-yaml",
    name: "JSON to YAML",
    summary: "Convert JSON into YAML for readable config files.",
    keywords: ["json to yaml"],
    status: "live"
  },
  {
    slug: "sql-formatter",
    name: "SQL Formatter",
    summary: "Format SQL queries for readability and review.",
    keywords: ["sql formatter"],
    status: "live"
  },
  {
    slug: "html-entity-encode-decode",
    name: "HTML Entity Encode / Decode",
    summary: "Encode and decode HTML entities for safe rendering.",
    keywords: ["html entity encode decode"],
    status: "live"
  }
];

export const toolRegistry: ToolRegistryItem[] = [
  ...tools.map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    summary: tool.summary,
    keywords: tool.keywords,
    status: "live" as const
  })),
  ...plannedTools
];

export const liveToolRegistry = toolRegistry.filter((tool) => tool.status === "live");
export const plannedToolRegistry = toolRegistry.filter((tool) => tool.status === "planned");
export const toolRegistryBySlug = new Map(toolRegistry.map((tool) => [tool.slug, tool]));

export function getToolBySlug(slug: string) {
  return toolsBySlug.get(slug);
}

export function getToolRegistryBySlug(slug: string) {
  return toolRegistryBySlug.get(slug);
}
