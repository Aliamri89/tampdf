import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Additive only: one new table. (The generator also wanted to re-add the page_visit_events
// locale enum values, which migration 20260923_000000 already added by hand and which would
// fail on a database that has it — deliberately left out.)
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"adsense_enabled" boolean DEFAULT true,
  	"adsense_publisher_id" varchar,
  	"adsense_slot_tool" varchar,
  	"adsense_slot_blog" varchar,
  	"tracking_ga4_enabled" boolean DEFAULT true,
  	"tracking_clarity_enabled" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services" CASCADE;`)
}
