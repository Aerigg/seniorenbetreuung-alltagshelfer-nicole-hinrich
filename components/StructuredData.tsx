export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization",
        "name": "Seniorenbetreuung & Alltagshelfer Nicole Hinrich",
        "alternateName": "Alltagshelfer Rostock",
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com",
        "logo": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/logo.png",
        "image": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/logo.png",
        "description": "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock und Umgebung. Mit Anerkennung vom LAGuS zur direkten Abrechnung mit Pflegekassen.",
        "telephone": "+49-152-59229075",
        "email": "Seniorenbetreuung.alltagshelfer@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rostock",
          "addressRegion": "Mecklenburg-Vorpommern",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 54.0924,
          "longitude": 12.1286
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 54.0924,
            "longitude": 12.1286
          },
          "geoRadius": "50000"
        },
        "priceRange": "€€",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "16:00"
          }
        ],
        "sameAs": [
          // Hier können später Social Media Profile hinzugefügt werden
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#person",
        "name": "Nicole Hinrich",
        "jobTitle": "Alltagshelferin",
        "worksFor": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "telephone": "+49-152-59229075",
        "email": "Seniorenbetreuung.alltagshelfer@gmail.com"
      },
      {
        "@type": "Service",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#service",
        "serviceType": "Seniorenbetreuung",
        "provider": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rostock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Betreuungsleistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Seniorenbetreuung",
                "description": "Individuelle Betreuung und Begleitung im Alltag für Senioren"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hauswirtschaftliche Hilfe",
                "description": "Professionelle Unterstützung im Haushalt, Reinigung und Wäschepflege"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kinderbetreuung",
                "description": "Liebevolle Betreuung für Kinder und Jugendliche, besonders mit Pflegestufen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gewerbliche Reinigung",
                "description": "Professionelle Reinigung für Unternehmen, Büros, Arztpraxen und Privathaushalte"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#website",
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com",
        "name": "Seniorenbetreuung & Alltagshelfer Nicole Hinrich",
        "description": "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock",
        "publisher": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "inLanguage": "de-DE"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#webpage",
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com",
        "name": "Seniorenbetreuung & Alltagshelfer Nicole Hinrich | Rostock",
        "isPartOf": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#website"
        },
        "about": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "description": "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock und Umgebung. Mit Anerkennung vom LAGuS zur direkten Abrechnung mit Pflegekassen.",
        "inLanguage": "de-DE"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
