type MetadataInput = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
};

export function buildMetadata({
  title = "Portfolio",
  description = "Portfolio built with Next.js and TypeScript",
  url,
  image,
  keywords,
}: MetadataInput = {}) {
  const siteUrl = url ?? "https://github.com/Nikolay-Davydov/Portfolio2026";
  const imageUrl = image ?? "/images/placeholder-1.svg";

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Nikolay Davydov" }],
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: `${title}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
