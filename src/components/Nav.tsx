"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import type { Locale } from "@/lib/dictionaries";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links: { href: string; label: string }[] = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/activities", label: t.nav.activities },
    { href: "/vision", label: t.nav.vision },
    { href: "/join", label: t.nav.join },
    { href: "/contact", label: t.nav.contact },
  ];

  const otherLocale: Locale = locale === "zh" ? "en" : "zh";

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-secondary/20">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-primary-dark">
          {t.siteName}
        </Link>

        {/* 手機版選單按鈕 */}
        <button
          type="button"
          className="md:hidden min-h-11 min-w-11 flex items-center justify-center rounded-lg border border-secondary/30 text-ink"
          aria-label="開啟選單"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>

        {/* 桌面版選單 */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-ink hover:text-primary px-2 py-2 rounded-md"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setLocale(otherLocale)}
            className="min-h-11 px-4 py-2 rounded-full border-2 border-secondary text-secondary-dark font-semibold hover:bg-secondary hover:text-white transition-colors"
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
        </nav>
      </div>

      {/* 手機版展開選單 */}
      {open && (
        <nav className="md:hidden border-t border-secondary/20 px-4 py-2 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-ink py-3 border-b border-secondary/10"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setLocale(otherLocale);
              setOpen(false);
            }}
            className="my-3 min-h-11 px-4 py-2 rounded-full border-2 border-secondary text-secondary-dark font-semibold self-start"
          >
            {locale === "zh" ? "Switch to English" : "切換為中文"}
          </button>
        </nav>
      )}
    </header>
  );
}
