import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'split-pdf';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'delete-pdf-pages';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'reorder-pdf-pages';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'crop-pdf';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'resize-pdf';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'png-to-pdf';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'split-pdf';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'delete-pdf-pages';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'reorder-pdf-pages';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'crop-pdf';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'resize-pdf';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'png-to-pdf';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ALTER COLUMN "related_tool" SET DATA TYPE text;
  DROP TYPE "public"."enum_posts_related_tool";
  CREATE TYPE "public"."enum_posts_related_tool" AS ENUM('merge-pdf', 'compress-pdf', 'pdf-to-jpg', 'rotate-pdf', 'compress-image', 'image-to-pdf', 'rotate-images');
  ALTER TABLE "posts" ALTER COLUMN "related_tool" SET DATA TYPE "public"."enum_posts_related_tool" USING "related_tool"::"public"."enum_posts_related_tool";
  ALTER TABLE "tool_usage_events" ALTER COLUMN "tool" SET DATA TYPE text;
  DROP TYPE "public"."enum_tool_usage_events_tool";
  CREATE TYPE "public"."enum_tool_usage_events_tool" AS ENUM('merge-pdf', 'compress-pdf', 'pdf-to-jpg', 'rotate-pdf', 'compress-image', 'image-to-pdf', 'rotate-images');
  ALTER TABLE "tool_usage_events" ALTER COLUMN "tool" SET DATA TYPE "public"."enum_tool_usage_events_tool" USING "tool"::"public"."enum_tool_usage_events_tool";`)
}
