import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio built with Next.js and TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-6 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="p-6 text-sm text-center">
          © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
