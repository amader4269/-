"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
      <h1 className="text-3xl font-extrabold text-ink">{t.about.title}</h1>

      {/* 協會簡介 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary-dark">{t.about.introTitle}</h2>
        {t.about.introParagraphs.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-ink/90">
            {p}
          </p>
        ))}
      </section>

      {/* 組織/幹部介紹 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary-dark">{t.about.orgTitle}</h2>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col sm:flex-row gap-6 items-center">
          <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden">
            <Image
              src="https://picsum.photos/seed/cunren-org/300/300"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <p className="text-lg text-ink/80">{t.about.orgPlaceholder}</p>
        </div>
      </section>

      {/* 協會歷史照片牆 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary-dark">{t.about.galleryTitle}</h2>
        <p className="text-base text-ink/60">{t.about.galleryPlaceholder}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/cunren-history-${i}/400/400`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
