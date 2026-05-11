"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "./LocaleProvider";

export default function Header() {
  const { t } = useLocale();

  return (
    <header className="p-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <nav className="flex items-center gap-4">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/projects">{t("nav.projects")}</Link>
          <Link href="/resume">{t("nav.resume")}</Link>
          <Link href="/contact">{t("nav.contact")}</Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
