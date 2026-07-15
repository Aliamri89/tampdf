import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "tool_usage_events" ADD COLUMN "error_name" varchar;
  ALTER TABLE "tool_usage_events" ADD COLUMN "error_message" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "tool_usage_events" DROP COLUMN "error_name";
  ALTER TABLE "tool_usage_events" DROP COLUMN "error_message";`)
}
