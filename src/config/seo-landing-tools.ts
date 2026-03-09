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
    faqs: [
      { question: "Timestamp dùng giây hay milliseconds?", answer: "Nhiều hệ thống dùng giây, nhưng JavaScript thường dùng milliseconds. Bạn nên kiểm tra độ dài số để xác định nhanh." },
      { question: "Tool dùng UTC hay local time?", answer: "Mặc định nên hiển thị UTC để tránh lệch timezone khi debug nhiều môi trường." },
      { question: "Khi nào cần convert timestamp?", answer: "Khi đọc log, kiểm tra token expiry, hoặc đối chiếu thời gian giữa frontend và backend." }
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
    faqs: [
      { question: "Khác gì với Base64 encode?", answer: "URL encode dành cho chuỗi trong URL, còn Base64 là encoding dữ liệu nhị phân/text theo bảng ký tự riêng." },
      { question: "Khoảng trắng encode thành gì?", answer: "Thường là %20, tùy ngữ cảnh form-url-encoded có thể dùng dấu +." },
      { question: "Khi nào decode bị lỗi?", answer: "Khi chuỗi không đúng chuẩn percent-encoding hoặc bị cắt giữa chừng." }
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
    faqs: [
      { question: "Regex flags thường dùng là gì?", answer: "g, i, m, s là các flags phổ biến cho global, case-insensitive, multiline, dotAll." },
      { question: "Vì sao regex chạy chậm?", answer: "Pattern quá tham lam hoặc có backtracking nặng sẽ làm chậm trên input lớn." },
      { question: "Tool có hỗ trợ capture groups không?", answer: "Nên hiển thị rõ từng group để debug pattern nhanh hơn." }
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
