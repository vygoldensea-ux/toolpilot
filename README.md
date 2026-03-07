# ToolPilot

ToolPilot is a production-ready Next.js foundation for a scalable developer tools website.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Project structure

- `src/config/site.ts`: central site and tool definitions.
- `src/components/tool/ToolPageLayout.tsx`: reusable shell for all tool pages.
- `src/lib/seo/*`: metadata, canonical URL, and structured data helpers.
- `src/app/*`: file-based routes for home, tools, about, contact, robots, and sitemap.

## Scaling pattern

To add a new tool:

1. Add a new tool object in `src/config/site.ts`.
2. Create a route in `src/app/<tool-slug>/page.tsx` using `ToolPageLayout`.
3. Implement custom UI inside the tool content area while reusing shared sections and SEO helpers.
