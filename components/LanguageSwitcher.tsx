"use client";

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-2">
      <a href="/en" className="hover:underline">
        EN
      </a>
      <a href="/ru" className="hover:underline">
        RU
      </a>
    </div>
  );
}
