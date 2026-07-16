import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// The previous migration (20260716_133706) enabled versions/drafts on
// static-pages and correctly marked every pre-existing document as
// published in the *base* table, but it never gave those documents an
// initial version row. Payload's admin list view always queries the
// versions table (_static_pages_v, filtered to latest=true) once drafts
// are enabled — it does not fall back to the base table — so any document
// with zero version rows is invisible in the admin even though it's fully
// intact and still served correctly on the public site (which reads the
// base table directly).
//
// This migration backfills exactly one "latest" version row per existing
// document from its current base-table content, without touching
// static_pages/static_pages_locales and without creating any new
// document. It is idempotent: the WHERE NOT EXISTS guard means a document
// that already has a latest=true row (e.g. one that was opened/saved in
// the admin since the previous migration deployed) is skipped, so running
// this migration again is a no-op.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    WITH backfilled_versions AS (
      INSERT INTO "_static_pages_v" (
        "parent_id", "version_key", "version_slug", "version_updated_at", "version_created_at",
        "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest", "autosave"
      )
      SELECT
        sp."id", sp."key"::text::"enum__static_pages_v_version_key", sp."slug", sp."updated_at", sp."created_at",
        'published', now(), now(), false, NULL, true, false
      FROM "static_pages" sp
      WHERE NOT EXISTS (
        SELECT 1 FROM "_static_pages_v" v WHERE v."parent_id" = sp."id" AND v."latest" = true
      )
      RETURNING "id" AS "version_id", "parent_id"
    )
    INSERT INTO "_static_pages_v_locales" (
      "version_title", "version_content", "version_seo_seo_title", "version_seo_seo_description", "_locale", "_parent_id"
    )
    SELECT
      spl."title", spl."content", spl."seo_seo_title", spl."seo_seo_description", spl."_locale", bv."version_id"
    FROM "static_pages_locales" spl
    JOIN backfilled_versions bv ON bv."parent_id" = spl."_parent_id";
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Intentional no-op. This migration only backfills version history for
  // documents that already existed — there's no reliable way to tell a
  // backfilled version row apart from a real one an editor has since
  // created (e.g. by publishing further edits), so reversing this could
  // delete legitimate version history. Nothing here touches
  // static_pages/static_pages_locales, so there's nothing unsafe left
  // behind by leaving this backfill in place.
}
