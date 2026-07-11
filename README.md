# Fileati

Free online file tools (PDF, image, and document conversion) — fileati.com.

## Stack

- **apps/web** — Next.js 16 (App Router, TypeScript, Tailwind v4). Homepage + SEO tool pages. Client-side tools (merge/split/compress PDF, compress image, image→PDF) run entirely in the browser via `pdf-lib` and the canvas API — no upload.
- **apps/worker** — Fastify service that runs PDF↔Word conversions using headless LibreOffice. Dockerized. Called from `apps/web`'s `/api/convert/[type]` route, never exposed to the browser directly.
- **packages/config** — Shared tool registry (`tools.ts`, `categories.ts`) that drives the homepage, every tool page's content/SEO/FAQ, the sitemap, and the footer. Add a new tool by adding one entry here plus a workspace component.

## Local development

```bash
npm install                 # installs all workspaces from the repo root

npm run dev                 # apps/web on http://localhost:3000
docker compose up --build   # apps/worker (with LibreOffice) on http://localhost:8787
```

To enable PDF↔Word conversion locally, copy `apps/web/.env.example` to `apps/web/.env.local`, set `WORKER_URL=http://localhost:8787` and `WORKER_API_KEY` to match the key docker-compose is using (`dev-secret` by default, or set a `WORKER_API_KEY` env var before running `docker compose up`). Without it, those two tools show a friendly "temporarily unavailable" message — every other tool works with zero configuration.

`npm run dev:worker` also works without Docker if `soffice` (LibreOffice) is on your PATH.

## Deployment

- **apps/web** → Vercel (or any Next.js host).
- **apps/worker** → any Docker host (Railway, Fly.io, Render, ECS). Build with `apps/worker/Dockerfile`. Set `WORKER_API_KEY` on the worker and mirror it in `apps/web`'s `WORKER_API_KEY` env var; set `WORKER_URL` on the web app to the deployed worker's URL.

## Adding a new tool

1. Add a `ToolDefinition` to `packages/config/src/tools.ts` (slug, category, copy, FAQ, related tools).
2. Build a `<Slug>Workspace` client component in `apps/web/components/tools/` implementing the upload → process → download flow.
3. Register it in `apps/web/components/tools/workspace-map.tsx`.

The tool page, its metadata, sitemap entry, and footer links are generated automatically from the registry.
