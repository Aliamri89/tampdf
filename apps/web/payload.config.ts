import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { ar } from "@payloadcms/translations/languages/ar";
import { en } from "@payloadcms/translations/languages/en";
import { buildConfig } from "payload";
import sharp from "sharp";

import { FAQs } from "./payload/collections/FAQs";
import { Media } from "./payload/collections/Media";
import { PageVisitEvents } from "./payload/collections/PageVisitEvents";
import { Posts } from "./payload/collections/Posts";
import { StaticPages } from "./payload/collections/StaticPages";
import { ToolUsageEvents } from "./payload/collections/ToolUsageEvents";
import { Users } from "./payload/collections/Users";
import { Settings } from "./payload/globals/Settings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Postgres pool sizing is phase-dependent because build and runtime pull in
// opposite directions against Supabase's project-wide 15-connection Session
// pooler cap. `next build` spins up several short-lived worker processes that
// each open their own pool, so every build process must stay tiny for their
// sum to fit under 15. Runtime, by contrast, is a SINGLE long-lived process
// that must serve admin writes -- each of which holds a connection for a whole
// transaction -- alongside frontend reads; capping it at 2 there starved every
// write, which then failed to acquire a connection within
// `connectionTimeoutMillis` (8s) and returned a 500 ("Something went wrong").
// Override per environment with DATABASE_POOL_MAX if needed.
const IS_BUILD_PHASE = process.env.NEXT_PHASE === "phase-production-build";
const DB_POOL_MAX = Number(
  process.env.DATABASE_POOL_MAX ?? (IS_BUILD_PHASE ? 2 : 8),
);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, "payload"),
    },
    meta: {
      titleSuffix: " - TAMPDF Admin",
    },
    components: {
      views: {
        dashboard: {
          Component: "/components/Dashboard#Dashboard",
        },
      },
    },
  },
  collections: [Posts, StaticPages, FAQs, Media, ToolUsageEvents, PageVisitEvents, Users],
  globals: [Settings],
  editor: lexicalEditor(),
  // Admin UI chrome (menus, buttons, validation/confirmation messages, dates)
  // is Arabic by default; English stays available per-user via Account →
  // Language. This is independent of `localization` below, which controls
  // bilingual document CONTENT (e.g. post title/body), not the UI itself.
  i18n: {
    supportedLanguages: { ar, en },
    fallbackLanguage: "ar",
  },
  routes: {
    admin: "/amriadmin",
  },
  secret: process.env.PAYLOAD_SECRET || "",
  // Optional: setting this to the site's real origin (e.g. https://tampdf.com)
  // makes Payload enforce a CSRF origin allowlist for authenticated requests.
  // Without it, the allowlist is empty and origin-checking is skipped
  // entirely — safe for this single-admin app, but stricter is better once
  // the production domain is known.
  serverURL: process.env.SERVER_URL || undefined,
  typescript: {
    outputFile: path.resolve(dirname, "payload/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      // Supabase (and most managed Postgres) requires TLS but presents a
      // cert that Node's default strict verification rejects; this matches
      // the standard pattern for connecting from serverless/managed hosts.
      ssl: process.env.DATABASE_URI?.includes("supabase.co")
        ? { rejectUnauthorized: false }
        : undefined,
      // Phase-aware (see DB_POOL_MAX above): tiny during build so parallel
      // build workers stay under Supabase's 15-connection cap, larger at
      // runtime so admin writes don't starve behind frontend reads.
      max: DB_POOL_MAX,
      // Return idle connections to the pooler promptly instead of letting
      // them linger toward the 15-connection cap, and let short-lived
      // build/migrate workers release their connections when they go idle so
      // they don't accumulate at the pooler across deploys.
      idleTimeoutMillis: 10_000,
      allowExitOnIdle: true,
      // `pg` has no default connection-acquisition timeout — if the pool
      // can't get a connection (e.g. the project is transiently at
      // Supabase's 15-connection Session pooler cap from something else
      // entirely), it waits forever with no error. That's a silent hang,
      // not a failure: nothing ever throws for Payload to catch or log,
      // and the request just sits there until the reverse proxy in front
      // of the app gives up on its own and returns a generic 504 —
      // exactly the failure mode observed on the live deployment, with
      // nothing in the app's own error handling to show for it. Bounding
      // this turns that into a fast, catchable error instead.
      connectionTimeoutMillis: 8_000,
      // Same idea for an individual query that starts but never returns
      // (e.g. blocked on a lock) — bound it instead of letting it hang
      // indefinitely too.
      query_timeout: 15_000,
    },
  }),
  // Payload's SharpDependency type is a narrower structural subset of the
  // installed sharp package's own (broader) type signature; this is a
  // known type-only mismatch, not a runtime issue.
  sharp: sharp as unknown as Parameters<typeof buildConfig>[0]["sharp"],
  localization: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    fallback: true,
  },
});
