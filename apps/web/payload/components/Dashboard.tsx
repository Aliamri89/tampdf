import type { AdminViewServerProps } from "payload";
import { getDashboardStats } from "../lib/dashboard-stats";
import { toolLabel } from "../lib/tool-labels";
import styles from "./Dashboard.module.css";

type Language = "en" | "ar";

const STRINGS = {
  en: {
    title: "TAMPDF Dashboard",
    subtitle:
      "Internal usage statistics, tracked directly by the application. Google Analytics 4 and Microsoft Clarity data will appear here automatically once their IDs are added under Settings → Analytics.",
    websiteVisits: "Website Visits",
    processedFiles: "Processed Files",
    mostUsedTools: "Most Used Tools",
    recentActivity: "Recent Activity",
    toolStatistics: "Tool Statistics",
    totalVisits: "Total Visits",
    totalProcessed: "Total Processed",
    today: "Today",
    thisWeek: "This Week",
    thisMonth: "This Month",
    noToolUsage: "No tool usage recorded yet.",
    noActivity: "No activity yet.",
    success: "Success",
    failed: "Failed",
    never: "Never",
    colTool: "Tool",
    colUses: "Uses",
    colProcessedFiles: "Processed Files",
    colSuccess: "Success",
    colFailed: "Failed",
    colLastUsage: "Last Usage",
  },
  ar: {
    title: "لوحة تحكم TAMPDF",
    subtitle:
      "إحصائيات استخدام داخلية، تُسجَّل مباشرة من التطبيق. ستظهر بيانات Google Analytics 4 و Microsoft Clarity هنا تلقائياً بمجرد إضافة معرّفاتها ضمن الإعدادات ← التحليلات.",
    websiteVisits: "زيارات الموقع",
    processedFiles: "الملفات المُعالجة",
    mostUsedTools: "الأدوات الأكثر استخداماً",
    recentActivity: "النشاط الأخير",
    toolStatistics: "إحصائيات الأدوات",
    totalVisits: "إجمالي الزيارات",
    totalProcessed: "إجمالي المُعالج",
    today: "اليوم",
    thisWeek: "هذا الأسبوع",
    thisMonth: "هذا الشهر",
    noToolUsage: "لا يوجد استخدام مسجَّل للأدوات بعد.",
    noActivity: "لا يوجد نشاط بعد.",
    success: "نجاح",
    failed: "فشل",
    never: "أبداً",
    colTool: "الأداة",
    colUses: "مرات الاستخدام",
    colProcessedFiles: "الملفات المُعالجة",
    colSuccess: "نجاح",
    colFailed: "فشل",
    colLastUsage: "آخر استخدام",
  },
} satisfies Record<Language, Record<string, string>>;

function resolveLanguage(language: string): Language {
  return language === "ar" ? "ar" : "en";
}

function formatDate(value: string | null, language: Language, never: string): string {
  if (!value) return never;
  // Arabic month/weekday names, but Western digits — the convention used
  // throughout Payload's own admin UI and most bilingual tech products.
  return new Date(value).toLocaleString(language === "ar" ? "ar" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    numberingSystem: "latn",
  });
}

function formatNumber(value: number, language: Language): string {
  return value.toLocaleString(language === "ar" ? "ar" : "en-US", { numberingSystem: "latn" });
}

function StatCard({ label, value, language }: { label: string; value: number; language: Language }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardLabel}>{label}</p>
      <p className={styles.cardValue}>{formatNumber(value, language)}</p>
    </div>
  );
}

export async function Dashboard({ initPageResult }: AdminViewServerProps) {
  const payload = initPageResult.req.payload;
  const language = resolveLanguage(initPageResult.req.i18n.language);
  const t = STRINGS[language];
  const stats = await getDashboardStats(payload);
  const maxToolUses = Math.max(1, ...stats.mostUsedTools.map((tool) => tool.uses));

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{t.title}</h1>
      <p className={styles.subtitle}>{t.subtitle}</p>

      <h2 className={styles.sectionTitle}>{t.websiteVisits}</h2>
      <div className={styles.cardGrid}>
        <StatCard label={t.totalVisits} value={stats.visits.total} language={language} />
        <StatCard label={t.today} value={stats.visits.today} language={language} />
        <StatCard label={t.thisWeek} value={stats.visits.week} language={language} />
        <StatCard label={t.thisMonth} value={stats.visits.month} language={language} />
      </div>

      <h2 className={styles.sectionTitle}>{t.processedFiles}</h2>
      <div className={styles.cardGrid}>
        <StatCard label={t.totalProcessed} value={stats.processedFiles.total} language={language} />
        <StatCard label={t.today} value={stats.processedFiles.today} language={language} />
        <StatCard label={t.thisWeek} value={stats.processedFiles.week} language={language} />
        <StatCard label={t.thisMonth} value={stats.processedFiles.month} language={language} />
      </div>

      <div className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionTitle}>{t.mostUsedTools}</h2>
          <div className={styles.panel}>
            {stats.mostUsedTools.length === 0 || maxToolUses === 0 ? (
              <p className={styles.empty}>{t.noToolUsage}</p>
            ) : (
              stats.mostUsedTools.map((tool) => (
                <div className={styles.barRow} key={tool.tool}>
                  <span>{toolLabel(tool.tool, language)}</span>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: `${Math.round((tool.uses / maxToolUses) * 100)}%` }}
                    />
                  </div>
                  <span className={styles.barCount}>{formatNumber(tool.uses, language)}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div>
          <h2 className={styles.sectionTitle}>{t.recentActivity}</h2>
          <div className={styles.panel}>
            {stats.recentActivity.length === 0 ? (
              <p className={styles.empty}>{t.noActivity}</p>
            ) : (
              <div className={styles.activityList}>
                {stats.recentActivity.map((item, index) => (
                  <div className={styles.activityRow} key={index}>
                    <span>{toolLabel(item.tool, language)}</span>
                    <span
                      className={`${styles.badge} ${item.success ? styles.badgeSuccess : styles.badgeFailed}`}
                    >
                      {item.success ? t.success : t.failed}
                    </span>
                    <span>{formatDate(item.createdAt, language, t.never)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>{t.toolStatistics}</h2>
      <div className={styles.panel}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t.colTool}</th>
              <th>{t.colUses}</th>
              <th>{t.colProcessedFiles}</th>
              <th>{t.colSuccess}</th>
              <th>{t.colFailed}</th>
              <th>{t.colLastUsage}</th>
            </tr>
          </thead>
          <tbody>
            {stats.toolStats.map((tool) => (
              <tr key={tool.tool}>
                <td>{toolLabel(tool.tool, language)}</td>
                <td>{formatNumber(tool.uses, language)}</td>
                <td>{formatNumber(tool.processedFiles, language)}</td>
                <td>{formatNumber(tool.successCount, language)}</td>
                <td>{formatNumber(tool.failedCount, language)}</td>
                <td>{formatDate(tool.lastUsage, language, t.never)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
