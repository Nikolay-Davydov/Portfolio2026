"use client";

import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({ title, description, image, url }: Props) {
  const siteTitle = title ?? "Portfolio";
  const siteDescription =
    description ?? "Portfolio built with Next.js and TypeScript";
  const imageUrl = image ?? "/images/placeholder-1.svg";
  const pageUrl = url ?? "https://github.com/Nikolay-Davydov/Portfolio2026";

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
