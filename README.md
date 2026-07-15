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

**apps/web** needs a host with a **persistent disk** for uploaded media (`media-uploads/`) — a VM, a Railway/Fly.io/Render service with a volume attached, or shared/managed Node.js hosting like Hostinger Business — not a serverless/edge platform like Vercel. The admin CMS (Payload) stores its data in an external Postgres database (see `DATABASE_URI` below), so the database itself survives redeploys regardless of host; only uploaded media still needs a persistent volume/disk, or every deploy wipes uploaded images.

Payload's SQLite adapter was tried first but dropped: shared Node.js hosts like Hostinger's Business plan cap the number of OS threads/processes a single account can spawn, and SQLite's client (`libsql`, a Rust binary) opens a new OS thread per connection — under load this hits the cap and crashes with `OS can't spawn worker thread`. An external Postgres (e.g. Supabase's free tier) connects over the network instead and doesn't have this failure mode.

### Environment variables

See `apps/web/.env.example` for the canonical, commented list. No `NEXT_PUBLIC_*` variables are used — the site's public URL is a compile-time constant in `packages/config/src/index.ts`, not an env var.

| Variable | Required? | What it is |
| --- | --- | --- |
| `PAYLOAD_SECRET` | **Required** | Long random string used to sign Payload's auth tokens/cookies. Must be generated (not copied from anywhere) — e.g. `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. Unique per environment; the app throws `Error: missing secret key` at startup if it's unset. |
| `DATABASE_URI` | **Required** | Postgres connection string, e.g. `postgresql://user:pass@host:5432/dbname`. Point this at a managed Postgres instance (this project uses Supabase's free tier — use the **Session pooler** connection string, not the Direct connection one, since most shared hosts including Hostinger only support outbound IPv4 and the Direct connection is IPv6-only by default). If the password contains special characters (e.g. `@`), percent-encode them in the URI. |
| `SERVER_URL` | Optional | The site's real public origin, e.g. `https://tampdf.com` (no trailing path). Enables Payload's CSRF origin allowlist for authenticated requests. Safe to leave unset for this single-admin app; recommended once the production domain is live. |

Set `PAYLOAD_SECRET` and `DATABASE_URI` in Hostinger's Node.js app environment-variables panel (not committed to git — they're per-environment secrets/config). No other env vars are read anywhere in this codebase.

No Docker and no system-level dependencies (like LibreOffice) are required anywhere in this project — every tool runs in the browser, and Payload CMS runs inside the same Next.js process. This makes the app deployable on managed/shared Node.js hosting without root access.

### Database schema / migrations

`npm run build` runs `payload migrate` before `next build` (see `apps/web/package.json`). This applies the SQL migrations in `apps/web/migrations/` to create/update the Postgres schema — required because `next build` prerenders pages that query Payload (e.g. `/contact`, `/blog`), so the tables must already exist before the build starts, not just before the server starts serving requests. On a brand-new database (first deploy) this creates every table from scratch; on subsequent deploys it applies only new migrations.

Migration files are generated locally against Payload's schema (they don't require a reachable database connection to generate — only to apply). If your dev machine can't reach the production database either, generate with a placeholder `DATABASE_URI` set to any syntactically-valid Postgres URL.

**Whenever you add or change a Payload collection/global** (fields in `apps/web/payload/`), generate a new migration and commit it:

```bash
npm run migrate:create -w web   # generates apps/web/migrations/<timestamp>_<name>.ts
```

Without this, `next build` will fail on a fresh database with errors like `relation "settings" does not exist` — the schema in the committed migrations must stay in sync with `payload.config.ts`. As a safety net, `getSettings()`, `findStaticPage()`, and the blog list/detail pages catch database errors and fall back to empty/dictionary content instead of crashing the build — but that's a fallback for resilience, not a substitute for keeping migrations up to date.

## Adding a new tool

1. Add a `ToolDefinition` to `packages/config/src/tools.ts` (slug, category, copy, FAQ, related tools).
2. Build a `<Slug>Workspace` client component in `apps/web/components/tools/` implementing the upload → process → download flow.
3. Register it in `apps/web/components/tools/workspace-map.tsx`.

The tool page, its metadata, sitemap entry, and footer links are generated automatically from the registry.
