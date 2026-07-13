import type { Payload, Where } from "payload";
import { TOOL_SLUGS } from "../collections/ToolUsageEvents";

export interface DateWindowCounts {
  total: number;
  today: number;
  week: number;
  month: number;
}

export interface ToolStat {
  tool: string;
  uses: number;
  processedFiles: number;
  successCount: number;
  failedCount: number;
  lastUsage: string | null;
}

export interface RecentActivityItem {
  tool: string;
  success: boolean;
  createdAt: string;
}

export interface DashboardStats {
  visits: DateWindowCounts;
  processedFiles: DateWindowCounts;
  toolStats: ToolStat[];
  mostUsedTools: ToolStat[];
  recentActivity: RecentActivityItem[];
}

function getWindowStarts() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const isoDayOfWeek = (startOfToday.getDay() + 6) % 7; // 0 = Monday
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfToday.getDate() - isoDayOfWeek);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  return { startOfToday, startOfWeek, startOfMonth };
}

async function countInWindows(
  payload: Payload,
  collection: "page-visit-events" | "tool-usage-events",
  extraWhere?: Where,
): Promise<DateWindowCounts> {
  const { startOfToday, startOfWeek, startOfMonth } = getWindowStarts();
  const baseWhere = extraWhere ?? {};

  const [total, today, week, month] = await Promise.all([
    payload.count({ collection, where: baseWhere }),
    payload.count({
      collection,
      where: { ...baseWhere, createdAt: { greater_than_equal: startOfToday.toISOString() } },
    }),
    payload.count({
      collection,
      where: { ...baseWhere, createdAt: { greater_than_equal: startOfWeek.toISOString() } },
    }),
    payload.count({
      collection,
      where: { ...baseWhere, createdAt: { greater_than_equal: startOfMonth.toISOString() } },
    }),
  ]);

  return { total: total.totalDocs, today: today.totalDocs, week: week.totalDocs, month: month.totalDocs };
}

async function getToolStat(payload: Payload, tool: string): Promise<ToolStat> {
  const [uses, successCount, mostRecent] = await Promise.all([
    payload.count({ collection: "tool-usage-events", where: { tool: { equals: tool } } }),
    payload.count({
      collection: "tool-usage-events",
      where: { tool: { equals: tool }, success: { equals: true } },
    }),
    payload.find({
      collection: "tool-usage-events",
      where: { tool: { equals: tool } },
      sort: "-createdAt",
      limit: 1,
    }),
  ]);

  return {
    tool,
    uses: uses.totalDocs,
    processedFiles: successCount.totalDocs,
    successCount: successCount.totalDocs,
    failedCount: uses.totalDocs - successCount.totalDocs,
    lastUsage: (mostRecent.docs[0]?.createdAt as string | undefined) ?? null,
  };
}

export async function getDashboardStats(payload: Payload): Promise<DashboardStats> {
  const [visits, processedFiles, toolStats, recentActivityResult] = await Promise.all([
    countInWindows(payload, "page-visit-events"),
    countInWindows(payload, "tool-usage-events", { success: { equals: true } }),
    Promise.all(TOOL_SLUGS.map((tool) => getToolStat(payload, tool))),
    payload.find({
      collection: "tool-usage-events",
      sort: "-createdAt",
      limit: 10,
    }),
  ]);

  const mostUsedTools = [...toolStats].sort((a, b) => b.uses - a.uses).slice(0, 5);

  const recentActivity: RecentActivityItem[] = recentActivityResult.docs.map((doc) => ({
    tool: doc.tool as string,
    success: doc.success as boolean,
    createdAt: doc.createdAt as string,
  }));

  return { visits, processedFiles, toolStats, mostUsedTools, recentActivity };
}
