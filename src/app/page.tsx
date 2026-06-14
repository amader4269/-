"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { LINE_ADD_FRIEND_URL } from "@/lib/constants";
import { activities } from "@/lib/activities";
import Calendar from "@/components/Calendar";

export default function Home() {
  const { locale, t } = useLanguage();
  const featured = activities.slice(0, 3);

  return (
    <div>
      {/* Banner */}
      <section className="relative">
        <div className="relative h-72 sm:h-96 w-full">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1_su_ao_nanfang_aerial_2022.jpg/1280px-1_su_ao_nanfang_aerial_2022.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
              {t.home.heroTitle}
            </h1>
            <p className="mt-4 text-lg sm:text-2xl text-white drop-shadow-lg max-w-2xl">
              {t.home.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <Calendar />

      {/* 快速導引區 */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/activities"
            className="min-h-16 flex items-center justify-center text-center rounded-2xl bg-primary text-white text-xl font-bold px-4 py-5 shadow hover:brightness-95"
          >
            {t.home.quickLinks.activities}
          </Link>
          <Link
            href="/about"
            className="min-h-16 flex items-center justify-center text-center rounded-2xl bg-secondary text-white text-xl font-bold px-4 py-5 shadow hover:brightness-95"
          >
            {t.home.quickLinks.about}
          </Link>
          <Link
            href="/join"
            className="min-h-16 flex items-center justify-center text-center rounded-2xl bg-primary-dark text-white text-xl font-bold px-4 py-5 shadow hover:brightness-95"
          >
            {t.home.quickLinks.join}
          </Link>
          <a
            href={LINE_ADD_FRIEND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-16 flex items-center justify-center text-center rounded-2xl bg-line text-white text-xl font-bold px-4 py-5 shadow hover:brightness-95"
          >
            {t.home.quickLinks.line}
          </a>
        </div>
      </section>

      {/* 精選活動預覽 */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-ink mb-6">{t.home.featuredTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((activity) => (
            <Link
              key={activity.id}
              href="/activities"
              className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={activity.cover_image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-ink/60">{activity.date}</p>
                <h3 className="text-lg font-bold text-ink mt-1">
                  {locale === "zh" ? activity.title_zh : activity.title_en}
                </h3>
                <p className="text-base text-ink/70 mt-2 line-clamp-2">
                  {locale === "zh" ? activity.summary_zh : activity.summary_en}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
