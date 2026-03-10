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
  domain: "www.toolpilot.xyz",
  baseUrl: "https://www.toolpilot.xyz",
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
    seoTitle: "JSON Formatter Online",
    seoDescription:
      "Free JSON formatter, JSON beautifier, and JSON validator for developers. Format, minify, validate, and copy JSON quickly.",
    relatedSlugs: ["json-to-csv", "csv-to-json", "yaml-to-json"]
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
    seoTitle: "Base64 Encode Decode Online",
    seoDescription:
      "Fast Base64 encode and Base64 decode utility for developers. Convert text, handle errors, and copy output in one page.",
    relatedSlugs: ["url-encode-decode", "html-entity-encode-decode", "jwt-decoder"]
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
    seoTitle: "UUID Generator Online",
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
    seoTitle: "JWT Decoder Online",
    seoDescription:
      "Decode JWT tokens online and inspect header and payload claims. Copy parsed JSON and troubleshoot auth flows quickly.",
    relatedSlugs: ["uuid-generator", "hash-generator", "base64-tools"]
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
    seoTitle: "Cron Expression Generator",
    seoDescription:
      "Generate cron expressions for common schedules. Use this cron expression generator to create and copy reliable job timing rules.",
    relatedSlugs: ["json-formatter", "uuid-generator", "base64-tools"]
  },
  {
    slug: "json-to-csharp",
    name: "JSON to C# Classes Converter",
    summary: "Generate C# model classes from JSON with nested object and list support.",
    description:
      "Convert JSON to C# classes online. Generate strongly typed C# models for .NET and Unity projects in seconds.",
    intro:
      "JSON to C# Classes Converter helps developers turn sample payloads into ready-to-use C# models quickly. Paste JSON, set your root class name, and generate classes with nested objects and arrays mapped to List<T>. You can also include [System.Serializable] for workflows that need Unity-style serialization.",
    howToUse: [
      "Paste a valid JSON object into the input editor.",
      "Set a root class name and toggle [System.Serializable] if needed.",
      "Click Generate classes to build nested C# models.",
      "Copy the output or download it as a .cs file."
    ],
    example: {
      title: "Generate model classes from API payload",
      input: "{\"user\":{\"id\":1,\"name\":\"Jade\"},\"tags\":[\"seo\",\"tools\"]}",
      output:
        "public class RootObject { public User User { get; set; } public List<string> Tags { get; set; } }"
    },
    guideHeading: "When to use a JSON to C# classes generator",
    guideParagraphs: [
      "Converting payloads into typed models manually is repetitive and error-prone when APIs evolve quickly. A JSON to C# converter reduces setup time by generating property scaffolding directly from real input data, including nested objects and arrays.",
      "This is useful for .NET backends, Unity clients, and integration tests where stable models improve readability and reduce runtime casting. Instead of hand-writing boilerplate, you can start with generated classes and refine naming or nullable rules in your IDE.",
      "The tool is fully client-side, so payload transformation happens in the browser. That makes it practical for rapid prototyping and local debugging when you need model output instantly without adding server dependencies.",
      "Using a dedicated converter page also helps teams standardize model generation workflows. Engineers can share one URL, test sample payload changes, and copy or download classes in a predictable format.",
      "For data workflows, pair this page with JSON Formatter and JSON Diff to validate and compare payloads before generating final C# classes."
    ],
    faqs: [
      {
        question: "Does this tool support nested objects and arrays?",
        answer:
          "Yes. Nested objects become child classes and arrays are mapped to List<T> when element types can be inferred."
      },
      {
        question: "Can I include [System.Serializable]?",
        answer:
          "Yes. Enable the toggle to add [System.Serializable] above each generated class for serialization-friendly workflows."
      },
      {
        question: "Can I download the generated classes as a .cs file?",
        answer: "Yes. After generation, use the download button to export the output as a .cs file."
      }
    ],
    keywords: ["json to c# classes", "json to csharp converter", "json to c# model"],
    seoTitle: "JSON to C# Classes Converter – Generate C# Models from JSON",
    seoDescription:
      "Convert JSON to C# classes instantly. Generate nested C# models with List<T> support, copy output, or download a .cs file online.",
    relatedSlugs: ["json-formatter", "json-diff", "json-to-csv", "csv-to-json"]
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    summary: "Generate secure random passwords with length and character controls.",
    description:
      "Use this password generator to create strong random passwords with options for uppercase, lowercase, numbers, and symbols.",
    intro:
      "Password Generator provides a fast way to create random passwords for development, staging, and account setup workflows. Configure length, choose allowed character sets, and generate one or multiple passwords instantly. You can copy one password or copy all generated values in one action.",
    howToUse: [
      "Choose password length with the slider.",
      "Select character sets: uppercase, lowercase, numbers, and symbols.",
      "Choose how many passwords to generate.",
      "Click Generate and copy one result or all results."
    ],
    example: {
      title: "Generate multiple random passwords",
      input: "length: 20, sets: upper+lower+number+symbol, count: 5",
      output: "N8j!dP3$uL6@xQ2#vR1* ..."
    },
    guideHeading: "Why developers use an online password generator",
    guideParagraphs: [
      "Strong random passwords are essential for test accounts, admin access, and temporary credentials during development. A configurable generator reduces manual mistakes and avoids predictable patterns from hand-crafted strings.",
      "By controlling length and character types, teams can align generated values with policy requirements across environments. This is especially useful when onboarding services that enforce complexity rules.",
      "Generating multiple passwords in one action speeds up setup for QA matrices, staging users, and automation credentials. Copy-all support also reduces repetitive clicks when creating many accounts quickly.",
      "The utility runs fully in the browser and does not require backend calls, which keeps workflows lightweight and fast for everyday engineering tasks.",
      "Use this tool alongside Hash Generator when you need to transform generated passwords into deterministic hash outputs for testing and verification."
    ],
    faqs: [
      {
        question: "Can I generate multiple passwords at once?",
        answer: "Yes. You can generate 1, 5, or 10 passwords per run."
      },
      {
        question: "What if I disable all character sets?",
        answer:
          "The tool will show an error and require at least one character set to be enabled before generation."
      },
      {
        question: "Can I copy all generated passwords in one click?",
        answer: "Yes. Use the Copy all button to copy every generated password at once."
      }
    ],
    keywords: ["password generator", "random password generator", "secure password generator"],
    seoTitle: "Password Generator Online",
    seoDescription:
      "Generate random secure passwords online with length control and character toggles. Create one or multiple passwords and copy instantly.",
    relatedSlugs: ["hash-generator", "base64-tools", "uuid-generator"]
  },
  {
    slug: "json-diff",
    name: "JSON Diff",
    summary: "Compare two JSON documents and highlight structural and value differences.",
    description:
      "Use this JSON diff checker to compare JSON A and JSON B, highlight differences, and copy the diff result quickly.",
    intro:
      "JSON Diff helps developers compare two JSON documents during API debugging, config review, and payload regression checks. Paste JSON A and JSON B, run comparison, and inspect added, removed, or changed fields with clear path-level output.",
    howToUse: [
      "Paste JSON A into the first input.",
      "Paste JSON B into the second input.",
      "Click Compare JSON to find added, removed, and changed values.",
      "Review highlighted differences and copy the result if needed."
    ],
    example: {
      title: "Compare API response versions",
      input: "JSON A has version=1, JSON B has version=2 and a new status field",
      output: "CHANGED $.version, ADDED $.status"
    },
    guideHeading: "How JSON diff improves debugging workflows",
    guideParagraphs: [
      "Comparing raw JSON manually is slow when payloads contain nested objects and arrays. A JSON diff utility highlights exact change paths so you can focus on meaningful differences instead of scanning line by line.",
      "This is useful for contract testing, release verification, and incident triage where teams need quick visibility into what changed between two payload versions.",
      "Pretty-printed side-by-side views make nested structures easier to inspect, while diff summaries provide copyable output for tickets, PR discussions, or debugging notes.",
      "The tool runs completely client-side and processes only local input in the browser, which keeps it lightweight for fast iteration.",
      "For complete JSON workflows, pair JSON Diff with JSON Formatter for validation and with JSON-to-CSV converters when changes need to be reviewed in tabular form."
    ],
    faqs: [
      {
        question: "What kinds of differences are detected?",
        answer:
          "The tool reports added fields, removed fields, and changed values across objects and arrays using path-based diff output."
      },
      {
        question: "Do I need valid JSON in both inputs?",
        answer:
          "Yes. Both JSON A and JSON B must be valid JSON before the tool can run a comparison."
      },
      {
        question: "Can I copy the diff output?",
        answer: "Yes. After comparison, use Copy result to export the diff summary to your clipboard."
      }
    ],
    keywords: ["json diff", "json compare", "json difference checker"],
    seoTitle: "JSON Diff Tool – Compare JSON Online",
    seoDescription:
      "Compare two JSON documents online. Highlight added, removed, and changed fields with a clear JSON diff view and copyable results.",
    relatedSlugs: ["json-formatter", "json-to-csv", "csv-to-json", "json-to-yaml"]
  },
  {
    slug: "json-validator",
    name: "JSON Validator",
    summary: "Validate JSON syntax and inspect errors before using payloads in production.",
    description:
      "Validate JSON online and catch syntax errors fast. Use this JSON validator to verify payloads and prevent parsing issues.",
    intro:
      "JSON Validator gives developers a fast way to validate payloads before running tests, shipping integrations, or storing configs. Paste JSON input, run validation, and review clear error messages if syntax is invalid.",
    howToUse: [
      "Paste JSON input into the editor.",
      "Click Validate JSON.",
      "Review success output or inspect the syntax error message.",
      "Copy validated output if needed."
    ],
    example: {
      title: "Validate API payload",
      input: "{\"service\":\"toolpilot\",\"enabled\":true}",
      output: "Valid JSON."
    },
    guideHeading: "Why validate JSON before deployment",
    guideParagraphs: [
      "A JSON validator prevents avoidable runtime errors by catching malformed payloads early. This is useful in API testing, configuration updates, and webhook workflows where one syntax issue can break a pipeline.",
      "Developers often copy data from logs, docs, and request builders. Quick validation confirms structural correctness before payloads enter application code.",
      "Use this tool alongside JSON Formatter and JSON Diff when you need to clean, validate, and compare payload versions as part of one workflow."
    ],
    faqs: [
      {
        question: "Does JSON Validator also format output?",
        answer: "Yes. Valid input can be returned in readable formatted JSON for easier inspection."
      },
      {
        question: "Will invalid JSON show exact parse errors?",
        answer: "Yes. The tool reports parser errors so you can fix malformed keys, commas, or quotes quickly."
      },
      {
        question: "Is validation done on the server?",
        answer: "No. Validation runs client-side in your browser."
      }
    ],
    keywords: ["json validator", "validate json online", "json syntax checker"],
    seoTitle: "JSON Validator Online",
    seoDescription:
      "Validate JSON syntax instantly. Find JSON errors, verify payloads, and copy clean output with this free JSON validator.",
    relatedSlugs: ["json-formatter", "json-diff", "json-to-csv", "csv-to-json"]
  },
  {
    slug: "xml-formatter",
    name: "XML Formatter",
    summary: "Format and beautify XML with readable indentation for debugging and review.",
    description:
      "Beautify XML online with clean indentation. Use this XML formatter to improve readability and validate XML structure quickly.",
    intro:
      "XML Formatter helps developers convert compact XML into readable output for faster debugging. Paste raw XML, run format, and copy beautified output for logs, integrations, and documentation.",
    howToUse: [
      "Paste XML input.",
      "Click Format XML.",
      "Review formatted XML output.",
      "Copy output for your app, script, or docs."
    ],
    example: {
      title: "Beautify XML response",
      input: "<root><service>toolpilot</service></root>",
      output: "<root>\n  <service>toolpilot</service>\n</root>"
    },
    guideHeading: "Using XML formatter in integration workflows",
    guideParagraphs: [
      "Raw XML from APIs and legacy systems is often difficult to scan. Formatting makes nested nodes readable and helps teams review data structure faster.",
      "A formatter is especially useful when comparing response versions or preparing sample payloads in technical documentation.",
      "For mixed format tasks, pair XML Formatter with URL Parser and Base64 tools to inspect and transform related request data."
    ],
    faqs: [
      {
        question: "Can XML Formatter detect invalid XML?",
        answer: "Yes. The tool returns an error when XML is malformed."
      },
      {
        question: "Does formatting change XML meaning?",
        answer: "No. It changes whitespace and indentation for readability."
      },
      {
        question: "Can I copy formatted XML?",
        answer: "Yes. Use the copy output action after formatting."
      }
    ],
    keywords: ["xml formatter", "xml beautifier", "format xml online"],
    seoTitle: "XML Formatter Online",
    seoDescription:
      "Format and beautify XML instantly. Improve XML readability, catch invalid XML, and copy clean output online.",
    relatedSlugs: ["json-formatter", "url-parser", "base64-tools"]
  },
  {
    slug: "url-parser",
    name: "URL Parser",
    summary: "Parse URLs into protocol, hostname, path, and query parameters.",
    description:
      "Parse URL components online. Extract protocol, hostname, path, and query params for debugging and API workflows.",
    intro:
      "URL Parser helps developers inspect URL structure quickly during routing, tracking, and integration tasks. Paste a full URL to extract protocol, hostname, path, and query parameters in one view.",
    howToUse: [
      "Paste a full URL into the input field.",
      "Click Parse URL.",
      "Review protocol, hostname, path, and query params.",
      "Use parsed values in debugging or documentation."
    ],
    example: {
      title: "Parse tracking URL",
      input: "https://www.toolpilot.xyz/path?a=1&b=2",
      output: "protocol=https, hostname=www.toolpilot.xyz, path=/path, query=a=1,b=2"
    },
    guideHeading: "Why URL parsing matters in web development",
    guideParagraphs: [
      "URL parsing is essential when debugging redirects, callback URLs, and route handlers. Seeing each component separately reduces mistakes in query handling.",
      "Developers can quickly verify protocol, host, and path logic when troubleshooting API gateways or frontend routing issues.",
      "For related workflows, combine URL Parser with URL Encode Decode and Base64 Tools when manipulating encoded parameters."
    ],
    faqs: [
      {
        question: "Does URL Parser read query parameters?",
        answer: "Yes. Query params are parsed and listed in key=value format."
      },
      {
        question: "Can it parse invalid URLs?",
        answer: "No. The input must be a valid URL."
      },
      {
        question: "Is URL parsing done client-side?",
        answer: "Yes. Parsing runs locally in your browser."
      }
    ],
    keywords: ["url parser", "parse url online", "url components parser"],
    seoTitle: "URL Parser Online",
    seoDescription:
      "Parse URLs into protocol, hostname, path, and query params. Fast online URL parser for developers.",
    relatedSlugs: ["url-encode-decode", "base64-tools", "json-formatter"]
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    summary: "Convert colors between HEX, RGB, and HSL formats instantly.",
    description:
      "Convert HEX to RGB and HSL, RGB to HEX, and HSL to RGB online. Quick color converter for UI and frontend workflows.",
    intro:
      "Color Converter provides a simple utility for frontend and design-engineering tasks. Convert between HEX, RGB, and HSL formats and preview the resulting color to verify output quickly.",
    howToUse: [
      "Enter a HEX, RGB, or HSL value.",
      "Click the matching convert action.",
      "Review converted color formats.",
      "Use color output in CSS, design tokens, or UI code."
    ],
    example: {
      title: "Convert brand color",
      input: "#3366FF",
      output: "RGB 51, 102, 255 | HSL 225, 100, 60"
    },
    guideHeading: "Color format conversion for frontend teams",
    guideParagraphs: [
      "Modern design systems use multiple color formats across tools and codebases. A converter helps teams move quickly between token definitions and CSS implementations.",
      "Converting values accurately avoids style drift and reduces manual errors in UI updates and theming workflows.",
      "Use this page with Markdown Preview and HTML Entity tools when preparing technical documentation that includes color examples."
    ],
    faqs: [
      {
        question: "Which formats are supported?",
        answer: "The tool supports HEX, RGB, and HSL conversions."
      },
      {
        question: "Can I preview the converted color?",
        answer: "Yes. A color preview block updates based on the current HEX value."
      },
      {
        question: "Does conversion run in the browser?",
        answer: "Yes. No server calls are required."
      }
    ],
    keywords: ["color converter", "hex to rgb", "rgb to hsl converter"],
    seoTitle: "Color Converter (HEX RGB HSL) Online",
    seoDescription:
      "Convert HEX, RGB, and HSL color values online. Fast color converter with visual preview for developers.",
    relatedSlugs: ["markdown-preview", "html-entity-encode-decode", "url-encode-decode"]
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    summary: "Edit markdown and preview rendered output live.",
    description:
      "Live markdown editor and preview tool. Write markdown and see formatted output instantly in your browser.",
    intro:
      "Markdown Preview is a lightweight editor for writing and checking markdown quickly. Type markdown input and view rendered output side-by-side for docs, README files, and notes.",
    howToUse: [
      "Write or paste markdown in the input panel.",
      "Review live preview output on the right.",
      "Load sample markdown if you need a template.",
      "Copy final markdown into docs or repositories."
    ],
    example: {
      title: "Preview README section",
      input: "# ToolPilot\n\n**Fast tools**",
      output: "Rendered heading and bold text"
    },
    guideHeading: "Live markdown preview for documentation workflows",
    guideParagraphs: [
      "Technical teams rely on markdown for documentation, runbooks, and project READMEs. Live preview helps validate formatting before publishing.",
      "A side-by-side editor reduces context switching and makes it easier to catch heading or list issues quickly.",
      "Use Markdown Preview with Random String Generator and Lorem Ipsum Generator when creating placeholder docs or template content."
    ],
    faqs: [
      {
        question: "Does preview update in real time?",
        answer: "Yes. Output updates as you type."
      },
      {
        question: "Can I load sample markdown?",
        answer: "Yes. Use the example button to insert starter markdown."
      },
      {
        question: "Is markdown parsing server-side?",
        answer: "No. Parsing is client-side."
      }
    ],
    keywords: ["markdown preview", "markdown editor online", "live markdown preview"],
    seoTitle: "Markdown Preview Online",
    seoDescription:
      "Use a live markdown editor with instant preview. Write, test, and format markdown online for docs and READMEs.",
    relatedSlugs: ["lorem-ipsum-generator", "random-string-generator", "html-entity-encode-decode"]
  },
  {
    slug: "htaccess-generator",
    name: ".htaccess Generator",
    summary: "Generate common .htaccess rules for redirects, caching, and security tasks.",
    description:
      "Create .htaccess rules online for HTTPS redirects, www redirects, static caching, and hotlink protection.",
    intro:
      ".htaccess Generator helps developers build common Apache rules quickly without starting from scratch. Toggle presets and generate a ready-to-copy configuration block for deployment.",
    howToUse: [
      "Select the rules you need from preset options.",
      "Review generated .htaccess output.",
      "Copy output and apply it to your server config.",
      "Test rules in staging before production rollout."
    ],
    example: {
      title: "Generate HTTPS redirect",
      input: "Enable Force HTTPS",
      output: "RewriteCond %{HTTPS} !=on ..."
    },
    guideHeading: "Using an htaccess generator safely",
    guideParagraphs: [
      "Writing rewrite rules manually is error-prone, especially when combining redirects and caching directives. A generator reduces syntax mistakes and speeds up setup.",
      "Preset-driven output helps teams use consistent rules across projects while still allowing manual review before deployment.",
      "Pair this utility with URL Parser to verify redirect behavior and with Regex Tester when refining rewrite patterns."
    ],
    faqs: [
      {
        question: "Can I generate HTTPS redirect rules?",
        answer: "Yes. The tool includes a Force HTTPS preset."
      },
      {
        question: "Can I combine multiple rules?",
        answer: "Yes. Select multiple options and the output will include all chosen blocks."
      },
      {
        question: "Should I test generated rules first?",
        answer: "Yes. Always validate .htaccess changes in staging before production."
      }
    ],
    keywords: ["htaccess generator", "apache rewrite rules", "htaccess redirect generator"],
    seoTitle: ".htaccess Generator Online",
    seoDescription:
      "Generate .htaccess rules for HTTPS redirects, www redirects, caching, and hotlink protection.",
    relatedSlugs: ["url-parser", "regex-tester", "url-encode-decode"]
  },
  {
    slug: "image-to-base64",
    name: "Image to Base64",
    summary: "Upload an image and convert it to Base64 data URI format.",
    description:
      "Convert images to Base64 online. Upload an image file and copy Base64 output for embedding and testing.",
    intro:
      "Image to Base64 helps developers convert local images into Base64 data URIs for prototyping, testing, and embedding scenarios. Upload an image and copy the generated Base64 string instantly.",
    howToUse: [
      "Upload an image file from your device.",
      "Wait for conversion to Base64 data URI.",
      "Copy output and use it in HTML, CSS, or API tests.",
      "Clear and upload a different image if needed."
    ],
    example: {
      title: "Convert PNG asset",
      input: "logo.png",
      output: "data:image/png;base64,iVBORw0KGgoAAA..."
    },
    guideHeading: "When to use image to base64 conversion",
    guideParagraphs: [
      "Base64 image strings are useful for quick prototypes, test fixtures, and inline embedding where external file requests are inconvenient.",
      "Converting locally in the browser keeps the workflow lightweight and avoids backend upload dependencies for simple transformation tasks.",
      "For encoded-data workflows, combine this page with Base64 Tools and HTML Entity Encode/Decode utilities."
    ],
    faqs: [
      {
        question: "What output format is returned?",
        answer: "The tool outputs a Base64 data URI including MIME type."
      },
      {
        question: "Does the image upload to a server?",
        answer: "No. File reading and conversion are client-side."
      },
      {
        question: "Can I copy the generated Base64?",
        answer: "Yes. Use the copy output button after conversion."
      }
    ],
    keywords: ["image to base64", "convert image to base64", "base64 image converter"],
    seoTitle: "Image to Base64 Converter Online",
    seoDescription:
      "Upload an image and convert it to Base64 data URI instantly. Free online image to Base64 converter for developers.",
    relatedSlugs: ["base64-tools", "html-entity-encode-decode", "url-encode-decode"]
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    summary: "Generate placeholder text paragraphs for layouts, docs, and mock content.",
    description:
      "Generate lorem ipsum placeholder text online with configurable paragraph count and quick copy support.",
    intro:
      "Lorem Ipsum Generator creates placeholder text for UI mockups, content blocks, and documentation drafts. Choose paragraph count, generate output, and copy text immediately.",
    howToUse: [
      "Adjust the paragraph count.",
      "Click Generate text.",
      "Review output in the text area.",
      "Copy output into your design or document."
    ],
    example: {
      title: "Generate placeholder paragraphs",
      input: "count: 3",
      output: "Three lorem ipsum paragraphs"
    },
    guideHeading: "Why placeholder text generation is useful",
    guideParagraphs: [
      "Placeholder content is helpful when building layouts before final copy is available. It lets teams validate spacing, typography, and flow quickly.",
      "A built-in generator reduces manual copy-paste from third-party sources and keeps mock content creation inside your existing workflow.",
      "Use this with Markdown Preview and Text Diff when drafting documentation templates or comparing content variants."
    ],
    faqs: [
      {
        question: "Can I control paragraph count?",
        answer: "Yes. Use the slider to select the number of paragraphs."
      },
      {
        question: "Can I copy generated text?",
        answer: "Yes. The tool includes a copy output action."
      },
      {
        question: "Is text generated server-side?",
        answer: "No. Generation runs fully in the browser."
      }
    ],
    keywords: ["lorem ipsum generator", "placeholder text generator", "dummy text generator"],
    seoTitle: "Lorem Ipsum Generator Online",
    seoDescription:
      "Generate lorem ipsum placeholder text online. Choose paragraph count, generate instantly, and copy output.",
    relatedSlugs: ["markdown-preview", "random-string-generator", "text-diff"]
  },
  {
    slug: "text-diff",
    name: "Text Diff Checker",
    summary: "Compare two text blocks and highlight added or removed lines.",
    description:
      "Compare text online with line-by-line highlighting. Use this text diff checker to spot changes quickly.",
    intro:
      "Text Diff Checker helps developers compare two text blocks and identify line-level changes quickly. Paste old and new text, run compare, and review added or removed lines in a clear visual diff.",
    howToUse: [
      "Paste original text into Text A.",
      "Paste updated text into Text B.",
      "Click Compare text.",
      "Review added and removed lines in the diff output."
    ],
    example: {
      title: "Compare changelog draft",
      input: "Version 1 notes vs Version 2 notes",
      output: "Highlighted added and removed lines"
    },
    guideHeading: "Text diff for review and documentation workflows",
    guideParagraphs: [
      "Diffing text manually is inefficient when revisions are frequent. A line-based checker reveals changes quickly so teams can review edits with less friction.",
      "This is useful for release notes, config files, prompt versions, and documentation updates where precise line changes matter.",
      "For JSON-focused comparisons, pair this page with JSON Diff and JSON Formatter to handle structured payload changes."
    ],
    faqs: [
      {
        question: "What type of diff is supported?",
        answer: "The tool compares line-by-line differences between two text blocks."
      },
      {
        question: "Can I compare large text blocks?",
        answer: "Yes, within normal browser memory limits."
      },
      {
        question: "Does this tool require uploads?",
        answer: "No. Input is processed client-side."
      }
    ],
    keywords: ["text diff", "text compare tool", "line diff checker"],
    seoTitle: "Text Diff Checker Online",
    seoDescription:
      "Compare two text blocks and highlight line differences online. Fast text diff checker for developers.",
    relatedSlugs: ["json-diff", "lorem-ipsum-generator", "random-string-generator"]
  },
  {
    slug: "random-string-generator",
    name: "Random String Generator",
    summary: "Generate random strings with configurable length and character types.",
    description:
      "Generate random strings online with letters, numbers, and symbols. Configure length and copy output instantly.",
    intro:
      "Random String Generator helps developers create test identifiers, mock keys, and seed data quickly. Configure length and character sets, generate a value, and copy it into your workflow.",
    howToUse: [
      "Set output length with the slider.",
      "Choose character sets: letters, numbers, symbols.",
      "Click Generate string.",
      "Copy the generated value."
    ],
    example: {
      title: "Generate API test key",
      input: "length: 24, letters+numbers+symbols",
      output: "a8T!v4Qz#2Lm9pX$7nH1kY0@"
    },
    guideHeading: "Random string generation for testing and automation",
    guideParagraphs: [
      "Random strings are useful for test data, temporary identifiers, and automation workflows where unique values are needed quickly.",
      "Configurable character sets help align generated strings with validation rules in forms, APIs, and auth systems.",
      "Use this page together with Password Generator and Hash Generator when building repeatable credential and verification workflows."
    ],
    faqs: [
      {
        question: "Can I choose which characters to include?",
        answer: "Yes. Enable or disable letters, numbers, and symbols."
      },
      {
        question: "What output length is supported?",
        answer: "You can configure output length using the slider."
      },
      {
        question: "Can I copy the generated string?",
        answer: "Yes. Use the copy output button after generation."
      }
    ],
    keywords: ["random string generator", "generate random string", "string generator online"],
    seoTitle: "Random String Generator Online",
    seoDescription:
      "Generate random strings with configurable length and character sets. Free online random string generator for developers.",
    relatedSlugs: ["password-generator", "hash-generator", "lorem-ipsum-generator"]
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
