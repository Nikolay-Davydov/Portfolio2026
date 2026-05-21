"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (!menuOpen) return;

  const handleClickOutside = (e: MouseEvent) => {
    const nav = document.querySelector("nav");
    if (nav && !nav.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLogo}>
        Portfolio
      </Link>

      {/* Десктоп меню */}
      <div className={styles.navLinksWrap}>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${activeSection === item.id ? styles.linkActive : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Кнопка бургер — только на мобильном */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineTop : ""}`} />
        <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineMid : ""}`} />
        <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineBot : ""}`} />
      </button>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.mobileLink} ${activeSection === item.id ? styles.linkActive : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
