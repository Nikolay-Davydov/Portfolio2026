import "./globals.css";
import { ReactNode } from "react";
import LocaleProvider from "../components/LocaleProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio built with Next.js and TypeScript",
};

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
