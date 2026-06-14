"use client";

import { useLanguage } from "@/lib/language-context";
import { LINE_ADD_FRIEND_URL } from "@/lib/constants";

export default function LineButton() {
  const { t } = useLanguage();

  return (
    <a
      href={LINE_ADD_FRIEND_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-line px-5 py-3 text-white font-bold text-lg shadow-lg hover:brightness-95 transition-[filter]"
    >
      <span aria-hidden>💬</span>
      {t.common.lineButton}
    </a>
  );
}
