'use client';

import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Доктор Дрожжина Карина Тагировна",
    "description": "Врач-косметолог с 10+ летним опытом. Инъекционные методики, аппаратная косметология, уходовые процедуры. Запись на консультацию: +7 963 640 4686",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Москва",
        "addressRegion": "Московская область",
        "streetAddress": "ул. Тверская, д. 10",
        "postalCode": "125009"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Орехово-Зуево",
        "addressRegion": "Московская область",
        "streetAddress": "ул. Ленина, д. 5",
        "postalCode": "142600"
      }
    ],
    "telephone": "+7 963 640 4686",
    "url": "https://drkerylady.ru",
    "image": "https://drkerylady.ru/DRlong.png",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Sunday"],
        "opens": "15:00",
        "closes": "21:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Каталог услуг косметолога",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Инъекционные методики",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ботокс",
                "description": "Процедуры с использованием ботулотоксина для коррекции морщин."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Филлеры",
                "description": "Контурная пластика лица и губ филлерами на основе гиалуроновой кислоты."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Аппаратная косметология",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Лазерная терапия",
                "description": "Удаление пигментации, омоложение кожи."
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.7558",
      "longitude": "37.6173"
    },
    "sameAs": [
      "https://t.me/Kery_Lady"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}