export default function OrganizationJsonLd() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ekotifa",
    "url": "https://ekotifa.id",
    "logo": "https://ekotifa.id/images/brand/logo.webp",
    "sameAs": [
      "https://www.instagram.com/ekotifa.id"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
    />
  );
}
