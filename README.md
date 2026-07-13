# TAMPDF

Free online file tools (PDF and image) — tampdf.com.

## Stack

- **apps/web** — Next.js 16 (App Router, TypeScript, Tailwind v4) with Payload CMS built in for the admin panel (articles, static pages, media, site settings, usage analytics). Homepage + SEO tool pages. Every tool (merge/compress/rotate PDF, PDF→JPG, compress image, JPG→PDF) runs entirely client-side in the browser via `pdf-lib`, `pdfjs-dist`, and the canvas API — no file is ever uploaded to a server, and no external service (Docker, LibreOffice, etc.) is required to run the app.
- **packages/config** — Shared tool registry (`tools.ts`, `categories.ts`) that drives the homepage, every tool page's content/SEO/FAQ, the sitemap, and the footer. Add a new tool by adding one entry here plus a workspace component.

## Local development

```bash
npm install    # installs all workspaces from the repo root
npm run dev    # apps/web on http://localhost:3000
```

## Deployment

**apps/web** needs a host with a **persistent disk** — a VM, a Railway/Fly.io/Render service with a volume attached, or shared/managed Node.js hosting like Hostinger Business — not a serverless/edge platform like Vercel. The admin CMS (Payload) stores its SQLite database (`tampdf.db`) and uploaded media (`media-uploads/`) directly on disk; on serverless hosts that filesystem is ephemeral/read-only, so every deploy or cold start would silently wipe posts, settings, and uploaded images. Mount a persistent volume covering both paths (or point `DATABASE_URI` at that volume) before going live.

Required env vars in production (see `apps/web/.env.example`): `PAYLOAD_SECRET` (long random string, unique per environment — the app refuses to start without it) and `DATABASE_URI` (SQLite path on the persistent volume).

No Docker and no system-level dependencies (like LibreOffice) are required anywhere in this project — every tool runs in the browser, and Payload CMS runs inside the same Next.js process. This makes the app deployable on managed/shared Node.js hosting without root access.

## Adding a new tool

1. Add a `ToolDefinition` to `packages/config/src/tools.ts` (slug, category, copy, FAQ, related tools).
2. Build a `<Slug>Workspace` client component in `apps/web/components/tools/` implementing the upload → process → download flow.
3. Register it in `apps/web/components/tools/workspace-map.tsx`.

The tool page, its metadata, sitemap entry, and footer links are generated automatically from the registry.
