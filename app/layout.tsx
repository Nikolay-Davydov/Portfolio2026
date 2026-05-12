import "./globals.css";
import { ReactNode } from "react";
import LocaleProvider from "../components/LocaleProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildMetadata } from "../lib/seo";
import profile from "../data/profile";

export const metadata = buildMetadata({
  title: `${profile.name} — Portfolio`,
  description: profile.summary,
  url: "https://github.com/Nikolay-Davydov/Portfolio2026",
  image: "/images/placeholder-1.svg",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <Header />
          <main className="container mx-auto p-6">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
