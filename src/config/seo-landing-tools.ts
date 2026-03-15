export type SeoLandingTool = {
  slug: string;
  keyword: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  howToUse: string[];
  exampleInput: string;
  exampleOutput: string;
  useCases?: string[];
  commonMistakes?: string[];
  limitations?: string[];
  securityNotes?: string[];
  examples?: Array<{ title: string; input: string; output: string }>;
  workflowTips?: string[];
  relatedGuides?: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

export const seoLandingTools: SeoLandingTool[] = [
  {
    slug: "timestamp-converter",
    keyword: "timestamp converter",
    name: "Timestamp Converter",
    title: "Timestamp Converter - Unix Time to Date (Free Online)",
    description: "Convert Unix timestamp to readable date and convert date back to Unix time in one click.",
    intro:
      "Timestamp Converter helps developers convert Unix timestamps into readable date time values and convert readable dates back to Unix seconds or milliseconds. This is useful for logs, API payloads, monitoring events, and debugging timezone-sensitive systems.",
    howToUse: [
      "Paste a Unix timestamp or a readable date.",
      "Choose conversion direction and time format.",
      "Copy the result for your API, database, or script."
    ],
    exampleInput: "1719988800",
    exampleOutput: "2024-07-03 00:00:00 UTC",
    useCases: [
      "Timestamp conversion is useful when logs, token expirations, and monitoring systems output Unix time that is difficult to interpret at a glance.",
      "It also helps when you need to convert a human-readable time back into Unix format for tests, cron jobs, APIs, or database fixtures."
    ],
    commonMistakes: [
      "A common mistake is confusing seconds with milliseconds. JavaScript timestamps often use milliseconds, while many APIs store Unix time in seconds.",
      "Timezone assumptions can also cause confusion if a value is read in local time instead of UTC during debugging."
    ],
    limitations: [
      "Timestamp conversion does not tell you how an upstream system interpreted the value. You still need to confirm timezone and storage conventions in the source application."
    ],
    securityNotes: [
      "Avoid pasting private event payloads or signed tokens if they contain sensitive timestamps tied to production user data."
    ],
    examples: [
      {
        title: "Convert JWT expiry to UTC",
        input: "1735689600",
        output: "2025-01-01 00:00:00 UTC"
      }
    ],
    workflowTips: [
      "Check whether the source value is in seconds or milliseconds before assuming the conversion output is wrong.",
      "Keep timezone context next to converted values when comparing application logs, auth tokens, or cron runs.",
      "When debugging multiple time-related systems, compare raw timestamps and readable dates side by side."
    ],
    relatedGuides: ["how-timestamp-converters-work", "converting-unix-timestamps-to-human-dates"],
    faqs: [
      { question: "What is a Unix timestamp?", answer: "A Unix timestamp is the number of seconds or milliseconds since 1970-01-01 UTC and is commonly used in logs, APIs, and tokens." },
      { question: "Does this tool support seconds and milliseconds?", answer: "Yes. You should still check the length of the number because many JavaScript systems use milliseconds while backend APIs often use seconds." },
      { question: "Why use UTC when converting timestamps?", answer: "UTC removes local timezone ambiguity, which makes debugging across environments much easier." }
    ],
    related: ["cron-generator", "jwt-decoder", "json-formatter"]
  },
  {
    slug: "url-encode-decode",
    keyword: "url encode decode",
    name: "URL Encode / Decode",
    title: "URL Encode Decode Tool (Free Online)",
    description: "Encode and decode URL strings for query params, callbacks, and web debugging quickly.",
    intro:
      "URL Encode Decode tool giúp bạn chuyển chuỗi thường thành định dạng an toàn cho URL và decode ngược lại. Đây là thao tác rất phổ biến khi làm query string, redirect callback, OAuth state, và test API endpoint có ký tự đặc biệt.",
    howToUse: [
      "Chọn Encode hoặc Decode.",
      "Dán chuỗi đầu vào vào ô input.",
      "Copy kết quả và dùng trong URL hoặc request của bạn."
    ],
    exampleInput: "email=jade@toolpilot.xyz&name=Jade Truong",
    exampleOutput: "email%3Djade%40toolpilot.xyz%26name%3DJade%20Truong",
    useCases: [
      "URL encoding is useful when query parameters, redirect URLs, callback state values, or search terms contain spaces or reserved characters.",
      "Decode mode helps when you receive encoded parameters from logs, browser address bars, or OAuth redirects and need to inspect the original values."
    ],
    commonMistakes: [
      "Mixing URL encoding with Base64 is a common mistake. They solve different problems and are not interchangeable.",
      "Encoding a full URL multiple times can break redirects because reserved characters become over-escaped."
    ],
    limitations: [
      "This tool helps with standard URL encoding, but some frameworks apply additional form-style rules such as converting spaces to plus signs."
    ],
    securityNotes: [
      "Do not assume encoded query parameters are secure. URL encoding only makes strings safe for transport in a URL context."
    ],
    examples: [
      {
        title: "Encode callback parameter",
        input: "redirect=https://www.toolpilot.xyz/contact?ref=docs",
        output: "redirect%3Dhttps%3A%2F%2Fwww.toolpilot.xyz%2Fcontact%3Fref%3Ddocs"
      }
    ],
    workflowTips: [
      "Encode only the value that needs transport safety instead of encoding the entire URL blindly.",
      "If a callback breaks, decode the value again and compare it against the original source string.",
      "Watch for double-encoding when values pass through multiple layers such as frontend routers and API clients."
    ],
    relatedGuides: ["encoding-urls-for-apis", "decoding-urls-in-web-development"],
    faqs: [
      { question: "What is URL encoding used for?", answer: "It converts reserved characters into a transport-safe format so values can be passed reliably in URLs and query strings." },
      { question: "How is URL encoding different from Base64?", answer: "URL encoding is for safe URL transport, while Base64 converts data into an ASCII-safe text representation for different protocol needs." },
      { question: "Why can URL decoding fail?", answer: "Decode can fail when the string contains broken percent-encoding or has been cut off in the middle of an encoded sequence." }
    ],
    related: ["base64-tools", "json-formatter", "jwt-decoder"]
  },
  {
    slug: "hash-generator",
    keyword: "hash generator",
    name: "Hash Generator",
    title: "Hash Generator (MD5, SHA1, SHA256) - Free Online",
    description: "Generate MD5, SHA1, and SHA256 hashes from text for quick verification.",
    intro:
      "Hash Generator dùng để tạo checksum nhanh từ text input bằng các thuật toán phổ biến như MD5, SHA-1, và SHA-256. Tool này hữu ích khi bạn cần verify dữ liệu, kiểm tra integrity, hoặc tạo test vector cho API/security workflow.",
    howToUse: [
      "Nhập chuỗi cần hash.",
      "Chọn thuật toán hash mong muốn.",
      "Copy hash output để verify hoặc so sánh."
    ],
    exampleInput: "toolpilot",
    exampleOutput: "SHA-256: 40df2f4f9c8c...",
    faqs: [
      { question: "MD5 có còn an toàn không?", answer: "MD5 không phù hợp cho mục đích bảo mật hiện đại, chỉ nên dùng cho checksum cơ bản." },
      { question: "Hash có giải ngược được không?", answer: "Hash là một chiều, không designed để giải mã ngược trực tiếp." },
      { question: "Hash và encryption khác nhau sao?", answer: "Encryption có thể giải mã bằng key, hash thì không." }
    ],
    related: ["base64-tools", "uuid-generator", "json-formatter"]
  },
  {
    slug: "regex-tester",
    keyword: "regex tester",
    name: "Regex Tester",
    title: "Regex Tester Online - Test Patterns Fast",
    description: "Test regular expressions with live matches, flags, and capture groups.",
    intro:
      "Regex Tester giúp bạn kiểm tra pattern ngay lập tức trên sample text để xem match, capture group, và ảnh hưởng của các flags. Đây là tool quan trọng cho validation form, parsing log, extraction data, và rule-based filtering.",
    howToUse: [
      "Nhập regex pattern và flags.",
      "Dán text cần kiểm tra.",
      "Xem kết quả match và tinh chỉnh pattern."
    ],
    exampleInput: "Pattern: /[A-Z]{2}-\\d{4}/g",
    exampleOutput: "Matches: AB-2024, CD-1023",
    useCases: [
      "Regex testing is useful for validating form inputs, extracting data from logs, and checking how patterns behave before they are embedded in code or rules engines.",
      "It also helps when debugging capture groups, alternation, and flags on real sample text instead of guessing from memory."
    ],
    commonMistakes: [
      "Patterns that rely on greedy matching can consume more text than expected and hide the actual bug.",
      "Expensive backtracking can make seemingly valid regex patterns slow on long input strings."
    ],
    limitations: [
      "Regex behavior can vary between engines, so a pattern tested in JavaScript may still behave differently in another runtime or toolchain."
    ],
    securityNotes: [
      "Avoid pasting sensitive production logs if they contain credentials, tokens, or personal data. Use sanitized samples when testing extraction rules."
    ],
    examples: [
      {
        title: "Extract order IDs from logs",
        input: "Pattern: /order-(\\d+)/g\nText: ok order-1024 failed order-2048",
        output: "Matches: order-1024, order-2048 | Group 1: 1024, 2048"
      }
    ],
    workflowTips: [
      "Start with a narrow pattern and realistic sample text before adding more complex groups or flags.",
      "Test edge cases early so a regex that works on ideal input does not fail on real production-like samples.",
      "If the pattern becomes hard to read, simplify it before embedding it in code or automation rules."
    ],
    relatedGuides: ["regex-testing-for-beginners", "common-regex-mistakes-developers-make"],
    faqs: [
      { question: "What is a regex tester used for?", answer: "A regex tester helps you validate patterns against sample text before using them in validation, parsing, or search workflows." },
      { question: "Why can regex be slow?", answer: "Patterns with heavy backtracking or overly greedy rules can become slow on large inputs and should be simplified." },
      { question: "Can this page help debug capture groups?", answer: "Yes. Seeing live matches and capture output makes it easier to confirm whether your groups are behaving as expected." }
    ],
    related: ["json-formatter", "url-encode-decode", "base64-tools"]
  },
  {
    slug: "json-to-csv",
    keyword: "json to csv converter",
    name: "JSON to CSV Converter",
    title: "JSON to CSV Converter - Free Online",
    description: "Convert JSON arrays to CSV format for spreadsheets and data export workflows.",
    intro:
      "JSON to CSV Converter dành cho dev và analyst cần chuyển mảng JSON sang CSV để mở bằng Excel hoặc Google Sheets. Tool này giảm thời gian viết script thủ công khi cần export dữ liệu API cho nghiệp vụ hoặc báo cáo.",
    howToUse: ["Paste JSON array input.", "Run conversion to CSV.", "Copy or download CSV output."],
    exampleInput: '[{"name":"Jade","role":"Founder"}]',
    exampleOutput: "name,role\nJade,Founder",
    faqs: [
      { question: "JSON dạng nào convert tốt nhất?", answer: "Mảng object phẳng là dễ convert nhất và cho cột rõ ràng." },
      { question: "Nested object xử lý sao?", answer: "Thường cần flatten key trước khi convert để tránh mất dữ liệu." },
      { question: "Thứ tự cột lấy ở đâu?", answer: "Có thể dựa trên key của object đầu tiên hoặc custom mapping." }
    ],
    related: ["csv-to-json", "json-formatter", "base64-tools"]
  },
  {
    slug: "csv-to-json",
    keyword: "csv to json converter",
    name: "CSV to JSON Converter",
    title: "CSV to JSON Converter - Free Online",
    description: "Convert CSV rows into JSON objects for APIs, ETL, and app development.",
    intro:
      "CSV to JSON Converter giúp bạn đưa dữ liệu bảng vào luồng phát triển API nhanh hơn. Thay vì parse thủ công, bạn chỉ cần paste CSV và nhận JSON output để test endpoint, import data, hoặc seed database.",
    howToUse: ["Paste CSV with headers.", "Run convert.", "Copy JSON array output for API or app use."],
    exampleInput: "name,role\nJade,Founder",
    exampleOutput: '[{"name":"Jade","role":"Founder"}]',
    faqs: [
      { question: "CSV có cần header không?", answer: "Nên có header để map key JSON rõ ràng." },
      { question: "Tool có parse number/boolean không?", answer: "Có thể hỗ trợ parse type tự động hoặc giữ string theo cấu hình." },
      { question: "Dấu phẩy trong text xử lý sao?", answer: "Chuỗi có dấu phẩy cần bao bằng dấu nháy kép theo chuẩn CSV." }
    ],
    related: ["json-to-csv", "json-formatter", "uuid-generator"]
  },
  {
    slug: "yaml-to-json",
    keyword: "yaml to json",
    name: "YAML to JSON",
    title: "YAML to JSON Converter - Free Online",
    description: "Convert YAML to valid JSON for API configs, infrastructure, and tooling.",
    intro:
      "YAML to JSON Converter phù hợp khi bạn làm với config files và cần đổi nhanh sang JSON để tích hợp với toolchain hoặc API validator. Việc convert chuẩn giúp giảm lỗi indent YAML trước khi deploy.",
    howToUse: ["Paste YAML input.", "Convert to JSON.", "Copy formatted JSON output."],
    exampleInput: "service: toolpilot\nport: 3000",
    exampleOutput: '{"service":"toolpilot","port":3000}',
    faqs: [
      { question: "Indent YAML sai thì sao?", answer: "Tool sẽ báo lỗi parse để bạn sửa indent trước khi convert." },
      { question: "Comment YAML có giữ không?", answer: "Comment thường không đi vào JSON output vì JSON không hỗ trợ comment." },
      { question: "Output có được format đẹp không?", answer: "Nên có tùy chọn pretty JSON để dễ đọc và debug." }
    ],
    related: ["json-to-yaml", "json-formatter", "base64-tools"]
  },
  {
    slug: "json-to-yaml",
    keyword: "json to yaml",
    name: "JSON to YAML",
    title: "JSON to YAML Converter - Free Online",
    description: "Convert JSON to YAML format for deployment files and human-readable config.",
    intro:
      "JSON to YAML Converter giúp chuyển JSON payload sang YAML readable để dùng trong CI/CD, docker compose, hoặc config app. Với devops workflow, conversion nhanh và chính xác giúp tránh lỗi syntax khi rollout.",
    howToUse: ["Paste JSON input.", "Convert to YAML.", "Copy YAML output and validate config."],
    exampleInput: '{"service":"toolpilot","port":3000}',
    exampleOutput: "service: toolpilot\nport: 3000",
    faqs: [
      { question: "JSON invalid có convert được không?", answer: "Không. JSON phải hợp lệ trước, nên dùng JSON Formatter để validate trước." },
      { question: "Mảng và object lồng nhau có hỗ trợ không?", answer: "Có, nhưng output cần kiểm tra lại indent nếu bạn chỉnh tay." },
      { question: "Tool này có phù hợp cho k8s yaml không?", answer: "Có thể dùng để chuyển nhanh, sau đó nên validate schema riêng cho k8s." }
    ],
    related: ["yaml-to-json", "json-formatter", "cron-generator"]
  },
  {
    slug: "sql-formatter",
    keyword: "sql formatter",
    name: "SQL Formatter",
    title: "SQL Formatter Online - Beautify SQL Quickly",
    description: "Format SQL queries for readability with clear indentation and keyword styling.",
    intro:
      "SQL Formatter giúp chuẩn hóa câu query dài để dễ đọc, dễ review và giảm lỗi logic khi debug. Tool này phù hợp cho backend dev, data analyst, và mọi workflow phải xử lý query phức tạp nhiều joins/subqueries.",
    howToUse: ["Paste raw SQL query.", "Run format.", "Copy formatted SQL back to editor or PR."],
    exampleInput: "select id,name from users where status='active' order by created_at desc",
    exampleOutput: "SELECT id, name\nFROM users\nWHERE status = 'active'\nORDER BY created_at DESC;",
    faqs: [
      { question: "Format có đổi logic query không?", answer: "Không, formatter chỉ đổi whitespace/line break nếu parser không sửa nội dung." },
      { question: "Hỗ trợ MySQL/PostgreSQL không?", answer: "Nên hỗ trợ các dialect phổ biến để dùng thực tế." },
      { question: "Có minify SQL ngược lại không?", answer: "Có thể thêm sau, nhưng format readable là nhu cầu chính cho review/debug." }
    ],
    related: ["json-formatter", "regex-tester", "base64-tools"]
  },
  {
    slug: "html-entity-encode-decode",
    keyword: "html entity encode decode",
    name: "HTML Entity Encode / Decode",
    title: "HTML Entity Encode Decode Tool - Free Online",
    description: "Encode and decode HTML entities for safe rendering of special characters.",
    intro:
      "HTML Entity Encode Decode tool giúp chuyển ký tự đặc biệt thành entity an toàn cho HTML hoặc decode lại thành text thường. Điều này hữu ích khi bạn hiển thị user content, làm email templates, hoặc debug dữ liệu escaping trên frontend.",
    howToUse: ["Chọn Encode hoặc Decode.", "Paste input text hoặc entity string.", "Copy output để dùng trong HTML hoặc app."],
    exampleInput: "<div>ToolPilot & SEO</div>",
    exampleOutput: "&lt;div&gt;ToolPilot &amp; SEO&lt;/div&gt;",
    faqs: [
      { question: "Khác gì URL encode?", answer: "HTML entity encode dành cho HTML context, URL encode dành cho URL/query string." },
      { question: "Khi nào cần encode HTML entity?", answer: "Khi render nội dung có ký tự đặc biệt để tránh vỡ layout hoặc XSS context cơ bản." },
      { question: "Tool có hỗ trợ unicode không?", answer: "Nên hỗ trợ cả named và numeric entities cho unicode phổ biến." }
    ],
    related: ["url-encode-decode", "base64-tools", "json-formatter"]
  }
];

export const seoLandingToolBySlug = new Map(seoLandingTools.map((tool) => [tool.slug, tool]));

export function getSeoLandingToolBySlug(slug: string) {
  return seoLandingToolBySlug.get(slug);
}

export function getSeoLandingToolOrThrow(slug: string) {
  const tool = getSeoLandingToolBySlug(slug);

  if (!tool) {
    throw new Error(`Missing SEO landing tool config: ${slug}`);
  }

  return tool;
}
