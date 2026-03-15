export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  ordered?: string[];
};

export type GuideDefinition = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  relatedToolSlugs: string[];
  sections: GuideSection[];
};

export const guides: GuideDefinition[] = [
  {
    slug: "how-to-format-and-validate-json-safely",
    title: "How to Format and Validate JSON Safely",
    description:
      "Learn a safe workflow for formatting and validating JSON while debugging APIs, logs, and structured payloads.",
    author: "ToolPilot Team",
    publishDate: "2026-03-15",
    relatedToolSlugs: ["json-formatter", "json-validator", "json-diff"],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "JSON formatting is commonly required when debugging APIs or working with logs. A readable payload makes it easier to inspect nested fields, verify data shape, and catch mistakes before those payloads flow into production systems."
        ]
      },
      {
        heading: "Common Issues",
        bullets: ["Missing commas", "Invalid quotes", "Trailing commas"]
      },
      {
        heading: "Workflow",
        ordered: [
          "Paste JSON",
          "Run formatter",
          "Validate structure",
          "Inspect nested objects"
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Using JSON formatters helps developers quickly identify structural errors and move from raw payload inspection to reliable debugging with less friction."
        ]
      }
    ]
  },
  {
    slug: "common-jwt-decoding-mistakes",
    title: "Common JWT Decoding Mistakes",
    description:
      "Understand the difference between decoding and verification, avoid token expiry mistakes, and reduce security mistakes when sharing JWTs.",
    author: "ToolPilot Team",
    publishDate: "2026-03-15",
    relatedToolSlugs: ["jwt-decoder", "base64-tools", "json-formatter"],
    sections: [
      {
        heading: "Decode vs Verify",
        paragraphs: [
          "A decoder only turns the Base64URL sections of a JWT into readable JSON. It does not prove that the signature is valid or that the token should be trusted."
        ]
      },
      {
        heading: "Token expiration misunderstandings",
        paragraphs: [
          "Developers often inspect the `exp` claim and assume the token is immediately invalid in every system. Timezone assumptions, clock drift, and environment mismatch can all create confusion during debugging."
        ]
      },
      {
        heading: "Security risks when sharing tokens",
        paragraphs: [
          "Even if a token is expired, it can still reveal internal claim structure. Avoid sharing real tokens in public channels, bug reports, or screenshots unless you have fully sanitized them."
        ]
      }
    ]
  },
  {
    slug: "when-to-use-base64-encoding",
    title: "When to Use Base64 Encoding",
    description:
      "A practical guide to what Base64 does, where it shows up in APIs, and when it should not be used as a security mechanism.",
    author: "ToolPilot Team",
    publishDate: "2026-03-15",
    relatedToolSlugs: ["base64-tools", "url-encode-decode", "html-entity-encode-decode"],
    sections: [
      {
        heading: "What Base64 actually does",
        paragraphs: [
          "Base64 turns binary or plain text data into an ASCII-safe text representation. It is a transport and representation format, not an encryption method."
        ]
      },
      {
        heading: "Typical API use cases",
        paragraphs: [
          "Base64 appears in auth headers, email content, binary payload transport, token segments, and systems that need text-safe representations of structured or binary data."
        ]
      },
      {
        heading: "When Base64 should not be used",
        paragraphs: [
          "Base64 should not be treated as a way to hide secrets. Anyone who can see the encoded value can usually decode it instantly, so real confidentiality still requires encryption and proper access control."
        ]
      }
    ]
  },
  {
    slug: "debugging-apis-with-json-comparison-tools",
    title: "Debugging APIs with JSON Comparison Tools",
    description:
      "Use JSON comparison workflows to spot payload changes, inspect API regressions, and understand contract drift faster.",
    author: "ToolPilot Team",
    publishDate: "2026-03-15",
    relatedToolSlugs: ["json-diff", "json-formatter", "json-validator"],
    sections: [
      {
        heading: "Why JSON diff is useful",
        paragraphs: [
          "APIs often fail because a field changed shape, disappeared, or started returning a slightly different value. A JSON diff tool makes those differences obvious without hand-scanning large payloads."
        ]
      },
      {
        heading: "Comparing API responses",
        paragraphs: [
          "Comparing staging and production responses, before-and-after deploy snapshots, or expected versus actual fixtures can quickly surface contract drift and serialization mistakes."
        ]
      },
      {
        heading: "Tracking changes in payloads",
        paragraphs: [
          "Once differences are visible, teams can trace whether the change came from backend logic, client formatting, or upstream data sources. This shortens debugging loops and improves collaboration across services."
        ]
      }
    ]
  }
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));

export function getGuideBySlug(slug: string) {
  return guideBySlug.get(slug);
}
