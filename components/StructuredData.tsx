export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness - Haupteintrag
      {
        "@type": "LocalBusiness",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization",
        "name": "Seniorenbetreuung & Alltagshelfer Nicole Hinrich",
        "alternateName": ["Alltagshelfer Rostock", "Seniorenbetreuung Rostock", "Nicole Hinrich Alltagshilfe"],
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com",
        "logo": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/logo.png",
        "image": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/logo.png",
        "description": "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock und Umgebung. LAGuS-anerkannt für direkte Abrechnung mit Pflegekassen. Entlastungsbetrag bis 131€ monatlich nutzbar.",
        "telephone": "+49-152-59229075",
        "email": "Seniorenbetreuung.alltagshelfer@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rostock",
          "addressRegion": "Mecklenburg-Vorpommern",
          "postalCode": "18055",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 54.0924,
          "longitude": 12.1286
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Rostock",
            "sameAs": "https://de.wikipedia.org/wiki/Rostock"
          },
          {
            "@type": "State",
            "name": "Mecklenburg-Vorpommern"
          }
        ],
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Direkte Abrechnung mit Pflegekasse, Überweisung, Bar",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "16:00"
          }
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Anerkennung als Alltagshelferin",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "LAGuS - Landesamt für Gesundheit und Soziales Mecklenburg-Vorpommern"
          }
        },
        "knowsAbout": [
          "Seniorenbetreuung",
          "Alltagshilfe",
          "Hauswirtschaftliche Hilfe",
          "Kinderbetreuung",
          "Entlastungsleistungen nach § 45b SGB XI",
          "Gewerbliche Reinigung"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#seniorenbetreuung"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#hauswirtschaft"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#kinderbetreuung"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#gewerbliche-reinigung"
            }
          }
        ]
      },
      // Person - Nicole Hinrich
      {
        "@type": "Person",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#person",
        "name": "Nicole Hinrich",
        "jobTitle": "LAGuS-anerkannte Alltagshelferin",
        "description": "Erfahrene und herzliche Alltagshelferin mit offizieller LAGuS-Anerkennung für Seniorenbetreuung in Rostock",
        "worksFor": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "telephone": "+49-152-59229075",
        "email": "Seniorenbetreuung.alltagshelfer@gmail.com",
        "knowsAbout": ["Seniorenbetreuung", "Alltagshilfe", "Hauswirtschaft", "Kinderbetreuung"]
      },
      // Service 1: Seniorenbetreuung
      {
        "@type": "Service",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#seniorenbetreuung",
        "serviceType": "Seniorenbetreuung",
        "name": "Seniorenbetreuung in Rostock",
        "description": "Herzliche und individuelle Seniorenbetreuung im Alltag. Begleitung bei Spaziergängen, Hilfe bei der Nahrungsaufnahme, Gesellschaft, Gedächtnistraining und Begleitung zu Arztterminen.",
        "provider": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rostock"
        },
        "audience": {
          "@type": "PeopleAudience",
          "audienceType": "Senioren",
          "suggestedMinAge": 60
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Seniorenbetreuung Leistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Begleitung bei Spaziergängen und Ausflügen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hilfe bei der Nahrungsaufnahme"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gesellschaft und emotionale Unterstützung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gedächtnistraining und aktivierende Beschäftigung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Begleitung zu Arztterminen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Entlastung für Angehörige"
              }
            }
          ]
        },
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/leistungen#seniorenbetreuung"
      },
      // Service 2: Hauswirtschaftliche Hilfe
      {
        "@type": "Service",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#hauswirtschaft",
        "serviceType": "Hauswirtschaftliche Hilfe",
        "name": "Hauswirtschaftliche Hilfe in Rostock",
        "description": "Professionelle Unterstützung im Haushalt: Reinigung der Wohnräume, Wäsche waschen und bügeln, Einkäufe und Besorgungen, Zubereitung von Mahlzeiten und Gartenarbeiten.",
        "provider": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rostock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hauswirtschaft Leistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reinigung der Wohnräume"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wäsche waschen, bügeln, zusammenlegen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Einkäufe und Besorgungen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Zubereitung von Mahlzeiten"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Leichte Gartenarbeiten"
              }
            }
          ]
        },
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/leistungen#hauswirtschaft"
      },
      // Service 3: Kinderbetreuung
      {
        "@type": "Service",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#kinderbetreuung",
        "serviceType": "Kinderbetreuung",
        "name": "Kinderbetreuung in Rostock",
        "description": "Liebevolle Betreuung für Kinder und Jugendliche. Betreuung nach Schule/Kita, gemeinsames Spielen, kreative Aktivitäten, Spaziergänge und Zubereitung kindgerechter Mahlzeiten.",
        "provider": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rostock"
        },
        "audience": {
          "@type": "PeopleAudience",
          "audienceType": "Kinder und Jugendliche",
          "suggestedMaxAge": 18
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Kinderbetreuung Leistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Betreuung nach Schule und Kita"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gemeinsames Spielen und Vorlesen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kreative Aktivitäten und Basteln"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Zubereitung kindgerechter Mahlzeiten"
              }
            }
          ]
        },
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/leistungen#kinderbetreuung"
      },
      // Service 4: Gewerbliche Reinigung
      {
        "@type": "Service",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#gewerbliche-reinigung",
        "serviceType": "Gewerbliche Reinigung",
        "name": "Gewerbliche Reinigung in Rostock",
        "description": "Professionelle Reinigungsdienstleistungen für Unternehmen, Büros, Arztpraxen und Privathaushalte. Büroreinigung, Grundreinigung, Fensterreinigung und Treppenhausreinigung.",
        "provider": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rostock"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Unternehmen und Privathaushalte"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Reinigungsleistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Büroreinigung und Unterhaltsreinigung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reinigung von Arztpraxen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Grundreinigung und Fensterreinigung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Treppenhausreinigung"
              }
            }
          ]
        },
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/leistungen#gewerbliche-reinigung"
      },
      // WebSite
      {
        "@type": "WebSite",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#website",
        "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com",
        "name": "Seniorenbetreuung & Alltagshelfer Nicole Hinrich",
        "description": "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock",
        "publisher": {
          "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#organization"
        },
        "inLanguage": "de-DE",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      // WebPage - Startseite
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
        "inLanguage": "de-DE",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/logo.png"
        }
      },
      // FAQ Schema
      {
        "@type": "FAQPage",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wie funktioniert die Abrechnung über die Pflegekasse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Als LAGuS-anerkannte Alltagshelferin rechne ich direkt mit Ihrer Pflegekasse ab. Sie müssen nicht in Vorkasse gehen. Ab Pflegegrad 1 haben Sie Anspruch auf den Entlastungsbetrag von bis zu 131€ monatlich für anerkannte Entlastungsleistungen."
            }
          },
          {
            "@type": "Question",
            "name": "Was bedeutet LAGuS-Anerkennung genau?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LAGuS steht für Landesamt für Gesundheit und Soziales. Die Anerkennung bedeutet, dass ich als Alltagshelferin offiziell qualifiziert und zugelassen bin, Leistungen zu erbringen, die direkt mit den Pflegekassen abgerechnet werden können."
            }
          },
          {
            "@type": "Question",
            "name": "Welche Pflegegrade werden unterstützt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ich unterstütze alle Pflegegrade ab Pflegegrad 1. Der Entlastungsbetrag von 131€ monatlich steht bereits ab Pflegegrad 1 zur Verfügung."
            }
          },
          {
            "@type": "Question",
            "name": "Wie schnell können Sie starten?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nach dem kostenlosen Kennenlerngespräch und der Erstellung des Betreuungsplans kann ich in der Regel innerhalb weniger Tage starten – je nach Verfügbarkeit und Ihrem Wunschtermin."
            }
          },
          {
            "@type": "Question",
            "name": "Welche Stadtteile in Rostock bedienen Sie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ich biete Hausbesuche im gesamten Stadtgebiet Rostock an. Sprechen Sie mich gerne an, wenn Sie außerhalb wohnen – gemeinsam finden wir eine Lösung."
            }
          },
          {
            "@type": "Question",
            "name": "Welche Leistungen werden von der Pflegekasse übernommen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seniorenbetreuung und hauswirtschaftliche Tätigkeiten können über den Entlastungsbetrag (131€/Monat ab Pflegegrad 1) direkt mit der Pflegekasse abgerechnet werden. Kinderbetreuung wird privat abgerechnet."
            }
          }
        ]
      },
      // BreadcrumbList für bessere Navigation
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Startseite",
            "item": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Leistungen",
            "item": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/leistungen"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Über mich",
            "item": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/ueber-mich"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Kontakt",
            "item": "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/kontakt"
          }
        ]
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
