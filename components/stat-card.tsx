"use client";

import { useI18n } from "@/lib/i18n/provider";


/**
 * Stat Card
 *
 * Metric panel with label, value, and optional trend.
 */

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
}

export default function StatCard({ label, value, trend, trendUp }: StatCardProps) {
  const { t } = useI18n();
  return (
    <div className="panel rounded-xl p-4 sm:p-5 transition-all duration-150 hover:border-border-hover">
      <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1.5">{value}</p>
      {trend && (
        <p className={`text-xs font-medium mt-1.5 flex items-center gap-1 ${trendUp ? "text-success" : "text-error"}`}>
          <span>{trendUp ? "↑" : "↓"}</span>
          <span>{trendUp ? t("Up") : t("Down")} {trend}</span>
        </p>
      )}
    </div>
  );
}
