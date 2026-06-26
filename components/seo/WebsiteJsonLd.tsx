export default function WebsiteJsonLd() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ekotifa",
    "url": "https://ekotifa.id",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ekotifa.id/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
    />
  );
}
