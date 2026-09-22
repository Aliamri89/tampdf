import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'es';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'fr';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'de';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'it';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'pt';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'nl';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'tr';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'ru';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'zh';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'ja';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'ko';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'hi';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'id';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'vi';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'th';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'pl';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'sv';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'da';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'no';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'fi';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'cs';
  ALTER TYPE "public"."enum_page_visit_events_locale" ADD VALUE 'el';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_visit_events" ALTER COLUMN "locale" SET DATA TYPE text;
  DROP TYPE "public"."enum_page_visit_events_locale";
  CREATE TYPE "public"."enum_page_visit_events_locale" AS ENUM('en', 'ar');
  ALTER TABLE "page_visit_events" ALTER COLUMN "locale" SET DATA TYPE "public"."enum_page_visit_events_locale" USING "locale"::"public"."enum_page_visit_events_locale";`)
}
