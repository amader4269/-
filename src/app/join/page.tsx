"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { LINE_ADD_FRIEND_URL } from "@/lib/constants";

export default function JoinPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-10">
      <h1 className="text-3xl font-extrabold text-ink">{t.join.title}</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary-dark">{t.join.introTitle}</h2>
        {t.join.introParagraphs.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-ink/90">
            {p}
          </p>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary-dark">{t.join.formTitle}</h2>
        <p className="text-base text-ink/60">{t.join.formNote}</p>

        {submitted ? (
          <div className="rounded-2xl bg-secondary/10 p-6 text-lg text-ink">
            {t.join.form.submit} ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-ink mb-1">
                {t.join.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full min-h-12 rounded-lg border-2 border-secondary/30 px-4 text-lg focus:border-primary outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-lg font-medium text-ink mb-1">
                {t.join.form.contact}
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                className="w-full min-h-12 rounded-lg border-2 border-secondary/30 px-4 text-lg focus:border-primary outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-ink mb-1">
                {t.join.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border-2 border-secondary/30 px-4 py-2 text-lg focus:border-primary outline-none"
              />
            </div>
            <button
              type="submit"
              className="min-h-12 px-8 py-3 rounded-full bg-primary text-white text-lg font-bold hover:brightness-95"
            >
              {t.join.form.submit}
            </button>
          </form>
        )}
      </section>

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
