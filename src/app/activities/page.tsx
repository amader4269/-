"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { activities, type Activity, type ActivityCategory } from "@/lib/activities";

const CATEGORY_KEYS: ActivityCategory[] = ["elder", "community", "festival", "education"];

export default function ActivitiesPage() {
  const { locale, t } = useLanguage();
  const [filter, setFilter] = useState<ActivityCategory | "all">("all");
  const [selected, setSelected] = useState<Activity | null>(null);

  const filtered =
    filter === "all" ? activities : activities.filter((a) => a.category === filter);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-ink mb-2">{t.activities.title}</h1>
      <p className="text-base text-ink/60 mb-6">{t.activities.dataNote}</p>

      {/* 分類篩選 */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`min-h-11 px-5 py-2 rounded-full text-lg font-semibold border-2 transition-colors ${
            filter === "all"
              ? "bg-primary text-white border-primary"
              : "bg-white text-ink border-secondary/30"
          }`}
        >
          {t.activities.filterAll}
        </button>
        {CATEGORY_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`min-h-11 px-5 py-2 rounded-full text-lg font-semibold border-2 transition-colors ${
              filter === key
                ? "bg-primary text-white border-primary"
                : "bg-white text-ink border-secondary/30"
            }`}
          >
            {t.activities.categories[key]}
          </button>
        ))}
      </div>

      {/* 活動卡片列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((activity) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => setSelected(activity)}
            className="text-left rounded-2xl overflow-hidden bg-white shadow hover:shadow-md transition-shadow"
          >
            <div className="relative h-40 w-full">
              <Image src={activity.cover_image} alt="" fill className="object-cover" />
            </div>
            <div className="p-4">
              <span className="inline-block text-sm font-semibold text-secondary-dark bg-secondary/10 rounded-full px-3 py-1">
                {t.activities.categories[activity.category]}
              </span>
              <p className="text-sm text-ink/60 mt-2">
                {activity.date}
                {activity.time ? ` ${activity.time}` : ""}
              </p>
              <h3 className="text-lg font-bold text-ink mt-1">
                {locale === "zh" ? activity.title_zh : activity.title_en}
              </h3>
              <p className="text-base text-ink/70 mt-2 line-clamp-2">
                {locale === "zh" ? activity.summary_zh : activity.summary_en}
              </p>
              <span className="inline-block mt-3 text-primary font-semibold">
                {t.common.readMore} →
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* 活動詳細內容 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 w-full">
              <Image src={selected.cover_image} alt="" fill className="object-cover" />
            </div>
            <div className="p-6 space-y-4">
              <span className="inline-block text-sm font-semibold text-secondary-dark bg-secondary/10 rounded-full px-3 py-1">
                {t.activities.categories[selected.category]}
              </span>
              <h2 className="text-2xl font-bold text-ink">
                {locale === "zh" ? selected.title_zh : selected.title_en}
              </h2>
              <p className="text-sm text-ink/60">
                {selected.date}
                {selected.time ? ` ${selected.time}` : ""}
              </p>
              <p className="text-lg leading-relaxed text-ink/90">
                {locale === "zh" ? selected.content_zh : selected.content_en}
              </p>
              {selected.gallery_images.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {selected.gallery_images.map((src, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="min-h-11 px-6 py-2 rounded-full bg-primary text-white text-lg font-semibold"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
