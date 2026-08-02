import { Client } from "pg";

/**
 * TEMPORARY DIAGNOSTIC SCRIPT — remove once the Hostinger/Supabase
 * connection issue is resolved. Runs before Payload ever initializes, so
 * it tells us whether a build failure comes from the raw Postgres
 * connection itself (Hostinger env var / network / Supabase auth) or from
 * something inside Payload's own init path.
 *
 * Prints only non-secret parts of DATABASE_URI (protocol, username, host,
 * port, database name) — the password is never printed, only its length.
 */

const raw = process.env.DATABASE_URI;

if (!raw) {
  console.error("[debug-db] DATABASE_URI is not set at all in this environment.");
  process.exit(1);
}

let parsed;
try {
  parsed = new URL(raw);
} catch (err) {
  console.error("[debug-db] DATABASE_URI is not a valid URL — cannot parse it.", err);
  process.exit(1);
}

console.log("[debug-db] Parsed DATABASE_URI (password redacted):");
console.log(`  protocol : ${parsed.protocol}`);
console.log(`  username : ${parsed.username}`);
console.log(`  password : ${parsed.password ? `<set, ${parsed.password.length} chars>` : "<empty>"}`);
console.log(`  host     : ${parsed.hostname}`);
console.log(`  port     : ${parsed.port}`);
console.log(`  database : ${parsed.pathname.replace(/^\//, "")}`);

const client = new Client({
  connectionString: raw,
  // Mirrors the exact SSL logic in payload.config.ts so this test reflects
  // the real connection Payload would make, not a looser/stricter one.
  ssl: raw.includes("supabase.co") ? { rejectUnauthorized: false } : undefined,
  connectionTimeoutMillis: 8_000,
});

try {
  console.log("[debug-db] Attempting raw pg connection (bypassing Payload entirely)...");
  await client.connect();
  const result = await client.query(
    "select current_user, inet_server_addr()::text as server_addr, version()",
  );
  console.log("[debug-db] Connection succeeded.");
  console.log(`  current_user : ${result.rows[0].current_user}`);
  console.log(`  server_addr  : ${result.rows[0].server_addr}`);
  console.log(`  version      : ${result.rows[0].version}`);
  await client.end();
  console.log(
    "[debug-db] Raw pg connection test PASSED — the failure (if it still occurs later in the build) is inside Payload's own init, not the DB credentials/network.",
  );
  process.exit(0);
} catch (err) {
  const pgErr = err;
  console.error("[debug-db] Raw pg connection test FAILED.");
  console.error(`  error code    : ${pgErr.code ?? "(none)"}`);
  console.error(`  error message : ${pgErr.message ?? String(err)}`);
  console.error(
    "[debug-db] This confirms the failure is at the network/credentials level (Hostinger env var value or Supabase auth), before Payload is even involved.",
  );
  process.exit(1);
}

