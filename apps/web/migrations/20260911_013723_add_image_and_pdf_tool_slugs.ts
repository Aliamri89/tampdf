import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'extract-pdf-pages';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'add-page-numbers';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'add-watermark';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'remove-watermark';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'pdf-to-images';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'images-to-pdf';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'flip-pdf';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'edit-pdf-metadata';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'remove-pdf-metadata';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'pdf-info';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'resize-image';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'crop-image';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'flip-image';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'png-to-jpg';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'jpg-to-png';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'webp-to-jpg';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'jpg-to-webp';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'webp-to-png';
  ALTER TYPE "public"."enum_posts_related_tool" ADD VALUE 'png-to-webp';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'extract-pdf-pages';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'add-page-numbers';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'add-watermark';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'remove-watermark';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'pdf-to-images';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'images-to-pdf';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'flip-pdf';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'edit-pdf-metadata';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'remove-pdf-metadata';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'pdf-info';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'resize-image';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'crop-image';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'flip-image';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'png-to-jpg';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'jpg-to-png';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'webp-to-jpg';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'jpg-to-webp';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'webp-to-png';
  ALTER TYPE "public"."enum_tool_usage_events_tool" ADD VALUE 'png-to-webp';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ALTER COLUMN "related_tool" SET DATA TYPE text;
  DROP TYPE "public"."enum_posts_related_tool";
  CREATE TYPE "public"."enum_posts_related_tool" AS ENUM('merge-pdf', 'compress-pdf', 'pdf-to-jpg', 'rotate-pdf', 'compress-image', 'image-to-pdf', 'rotate-images', 'split-pdf', 'delete-pdf-pages', 'reorder-pdf-pages', 'crop-pdf', 'resize-pdf', 'png-to-pdf');
  ALTER TABLE "posts" ALTER COLUMN "related_tool" SET DATA TYPE "public"."enum_posts_related_tool" USING "related_tool"::"public"."enum_posts_related_tool";
  ALTER TABLE "tool_usage_events" ALTER COLUMN "tool" SET DATA TYPE text;
  DROP TYPE "public"."enum_tool_usage_events_tool";
  CREATE TYPE "public"."enum_tool_usage_events_tool" AS ENUM('merge-pdf', 'compress-pdf', 'pdf-to-jpg', 'rotate-pdf', 'compress-image', 'image-to-pdf', 'rotate-images', 'split-pdf', 'delete-pdf-pages', 'reorder-pdf-pages', 'crop-pdf', 'resize-pdf', 'png-to-pdf');
  ALTER TABLE "tool_usage_events" ALTER COLUMN "tool" SET DATA TYPE "public"."enum_tool_usage_events_tool" USING "tool"::"public"."enum_tool_usage_events_tool";`)
}
