"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="p-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
