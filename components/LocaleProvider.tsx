"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../locales/en/common.json";
import ru from "../locales/ru/common.json";

type Locale = "en" | "ru";

const messages: Record<Locale, any> = {
  en,
  ru,
};

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: (k: string) => k,
});

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "ru" || stored === "en") {
      const id = setTimeout(() => setLocale(stored as Locale), 0);
      return () => clearTimeout(id);
    }
    return;
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = (key: string) => {
    const parts = key.split(".");
    let v: any = messages[locale];
    for (const p of parts) {
      if (!v) return key;
      v = v[p];
    }
    return typeof v === "string" ? v : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
