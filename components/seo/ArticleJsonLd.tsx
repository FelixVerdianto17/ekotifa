export default function ArticleJsonLd({
  title,
  description,
  imageUrl,
  datePublished,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  datePublished?: string;
}) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl ? [imageUrl] : [],
    "author": {
      "@type": "Organization",
      "name": "Ekotifa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ekotifa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ekotifa.id/images/brand/logo.webp"
      }
    },
    ...(datePublished ? { datePublished } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />
  );
}
