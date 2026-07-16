import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_static_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__static_pages_v_version_key" AS ENUM('about-us', 'contact-us', 'privacy-policy', 'terms-of-service', 'cookie-policy', 'faq');
  CREATE TYPE "public"."enum__static_pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__static_pages_v_published_locale" AS ENUM('en', 'ar');
  CREATE TABLE "_static_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_key" "enum__static_pages_v_version_key",
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__static_pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__static_pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_static_pages_v_locales" (
  	"version_title" varchar,
  	"version_content" jsonb,
  	"version_seo_seo_title" varchar,
  	"version_seo_seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "static_pages" ALTER COLUMN "key" DROP NOT NULL;
  ALTER TABLE "static_pages_locales" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "static_pages_locales" ALTER COLUMN "content" DROP NOT NULL;
  ALTER TABLE "static_pages" ADD COLUMN "_status" "enum_static_pages_status" DEFAULT 'draft';
  -- Every row that exists at migration time is content that's already live
  -- on the public site today — mark it published so this schema change
  -- (adding drafts/autosave) doesn't retroactively hide it. Only documents
  -- created from this point on should start out as an unpublished draft.
  UPDATE "static_pages" SET "_status" = 'published';
  ALTER TABLE "_static_pages_v" ADD CONSTRAINT "_static_pages_v_parent_id_static_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."static_pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_static_pages_v_locales" ADD CONSTRAINT "_static_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_static_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "_static_pages_v_parent_idx" ON "_static_pages_v" USING btree ("parent_id");
  CREATE INDEX "_static_pages_v_version_version_key_idx" ON "_static_pages_v" USING btree ("version_key");
  CREATE INDEX "_static_pages_v_version_version_updated_at_idx" ON "_static_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_static_pages_v_version_version_created_at_idx" ON "_static_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_static_pages_v_version_version__status_idx" ON "_static_pages_v" USING btree ("version__status");
  CREATE INDEX "_static_pages_v_created_at_idx" ON "_static_pages_v" USING btree ("created_at");
  CREATE INDEX "_static_pages_v_updated_at_idx" ON "_static_pages_v" USING btree ("updated_at");
  CREATE INDEX "_static_pages_v_snapshot_idx" ON "_static_pages_v" USING btree ("snapshot");
  CREATE INDEX "_static_pages_v_published_locale_idx" ON "_static_pages_v" USING btree ("published_locale");
  CREATE INDEX "_static_pages_v_latest_idx" ON "_static_pages_v" USING btree ("latest");
  CREATE INDEX "_static_pages_v_autosave_idx" ON "_static_pages_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_static_pages_v_locales_locale_parent_id_unique" ON "_static_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "static_pages__status_idx" ON "static_pages" USING btree ("_status");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "_static_pages_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_static_pages_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "_static_pages_v" CASCADE;
  DROP TABLE "_static_pages_v_locales" CASCADE;
  DROP INDEX "static_pages__status_idx";
  ALTER TABLE "static_pages" ALTER COLUMN "key" SET NOT NULL;
  ALTER TABLE "static_pages_locales" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "static_pages_locales" ALTER COLUMN "content" SET NOT NULL;
  ALTER TABLE "static_pages" DROP COLUMN "_status";
  DROP TYPE "public"."enum_static_pages_status";
  DROP TYPE "public"."enum__static_pages_v_version_key";
  DROP TYPE "public"."enum__static_pages_v_version_status";
  DROP TYPE "public"."enum__static_pages_v_published_locale";`)
}
