export default function SchemaOrg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://anda-atmen.at/#organization",
    name: "Anda-Atmen",
    description:
      "Holotropes Atmen Seminare in Österreich. Erfahrene Therapeuten begleiten Sie auf Ihrem Weg zu tieferer Selbsterkenntnis und Bewusstseinserweiterung.",
    url: "https://anda-atmen.at",
    email: "anda.atmen@gmail.com",
    image: "https://anda-atmen.at/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hallerschloßstraße 1",
      addressLocality: "Graz",
      postalCode: "8010",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.0707,
      longitude: 15.4395,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Österreich",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.instagram.com/anda_atmen.at/"],
  };

  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Event",
          name: "Holotropes Atmen Seminar Kitzbühel",
          description:
            "Zweitägiges Seminar für Holotropes Atmen mit beschleunigter Atmung, evokativer Musik und prozessorientierter Körperarbeit.",
          startDate: "2026-04-18T09:00:00+02:00",
          endDate: "2026-04-19T13:00:00+02:00",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Bio Yoga Hof Kitzbühel",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kitzbühel",
              addressCountry: "AT",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "Anda-Atmen",
            url: "https://anda-atmen.at",
          },
          performer: {
            "@type": "Person",
            name: "Mag. Andreas Schuster",
          },
          offers: {
            "@type": "Offer",
            price: "255",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            url: "https://anda-atmen.at/#termine",
          },
          image: "https://anda-atmen.at/images/hero.jpg",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Event",
          name: "Holotropes Atmen Seminar Baden",
          description:
            "Zweitägiges Seminar für Holotropes Atmen im vegetarischen Seminarhotel Schildbachhof Baden.",
          startDate: "2026-09-19T09:00:00+02:00",
          endDate: "2026-09-20T13:00:00+02:00",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Schildbachhof Baden",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Baden bei Wien",
              addressCountry: "AT",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "Anda-Atmen",
            url: "https://anda-atmen.at",
          },
          performer: {
            "@type": "Person",
            name: "Mag. Andreas Schuster",
          },
          offers: {
            "@type": "Offer",
            price: "255",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            url: "https://anda-atmen.at/#termine",
          },
          image: "https://anda-atmen.at/images/hero.jpg",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anda-Atmen",
    url: "https://anda-atmen.at",
    description: "Holotropes Atmen Seminare in Österreich",
    publisher: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://anda-atmen.at",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
