"use client";

import { useLocale } from "./LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLocale("en")}
        className={locale === "en" ? "font-semibold" : ""}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("ru")}
        className={locale === "ru" ? "font-semibold" : ""}
        aria-pressed={locale === "ru"}
      >
        RU
      </button>
    </div>
  );
}
