"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-secondary/20 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 space-y-2">
        <p className="text-lg font-semibold text-ink">{t.siteName}</p>
        <p className="text-base text-ink/80">
          {t.contact.phoneLabel}: {t.contact.phone}
        </p>
        <p className="text-base text-ink/80">
          {t.contact.emailLabel}: {t.contact.email}
        </p>
        <p className="text-base text-ink/80">
          {t.contact.addressLabel}: {t.contact.address}
        </p>
        <p className="text-base text-ink/80">
          <a
            href={t.contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            {t.contact.facebookLabel}
          </a>
        </p>
        <p className="text-sm text-ink/60 pt-4">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
