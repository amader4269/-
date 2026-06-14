"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function VisionPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <h1 className="text-3xl font-extrabold text-ink">{t.vision.title}</h1>

      <p className="text-lg leading-relaxed text-ink/90">{t.vision.introParagraph}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {t.vision.items.map((item, i) => (
          <div key={i} className="rounded-2xl bg-white shadow overflow-hidden">
            <div className="relative h-36 w-full">
              <Image
                src={`https://picsum.photos/seed/cunren-vision-${i}/500/350`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-primary-dark">{item.title}</h2>
              <p className="text-base text-ink/80 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="rounded-2xl bg-secondary/10 p-6 text-center space-y-3">
        <h2 className="text-2xl font-bold text-ink">{t.vision.feedbackTitle}</h2>
        <p className="text-lg text-ink/80">{t.vision.feedbackDescription}</p>
        <a
          href={t.vision.feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-h-11 px-8 py-3 rounded-full bg-secondary text-white text-lg font-bold hover:brightness-95"
        >
          {t.vision.feedbackButton}
        </a>
      </section>
    </div>
  );
}
