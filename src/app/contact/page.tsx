"use client";

import { useLanguage } from "@/lib/language-context";
import { LINE_ADD_FRIEND_URL } from "@/lib/constants";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-extrabold text-ink">{t.contact.title}</h1>

      <dl className="space-y-4 text-lg text-ink/90">
        <div>
          <dt className="font-bold text-primary-dark">{t.contact.addressLabel}</dt>
          <dd>{t.contact.address}</dd>
        </div>
        <div>
          <dt className="font-bold text-primary-dark">{t.contact.phoneLabel}</dt>
          <dd>
            <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, "")}`} className="underline">
              {t.contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-primary-dark">{t.contact.emailLabel}</dt>
          <dd>
            <a href={`mailto:${t.contact.email.split(" ")[0]}`} className="underline">
              {t.contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-primary-dark">{t.contact.facebookLabel}</dt>
          <dd>
            <a
              href={t.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {t.contact.facebookUrl}
            </a>
          </dd>
        </div>
      </dl>

      {/* 地圖嵌入區（佔位） */}
      <div className="rounded-2xl bg-secondary/10 h-64 flex items-center justify-center text-center text-ink/60 text-lg px-4">
        {t.contact.mapNote}
      </div>

      <a
        href={LINE_ADD_FRIEND_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center min-h-12 px-8 py-3 rounded-full bg-line text-white text-lg font-bold hover:brightness-95"
      >
        {t.common.lineButton}
      </a>
    </div>
  );
}
