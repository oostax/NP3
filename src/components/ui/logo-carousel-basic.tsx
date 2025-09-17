"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

const demoLogos = [
  { id: 1, name: "1000+ Довольных клиентов", text: "1000+ Довольных клиентов" },
  { id: 2, name: "98% Положительных отзывов", text: "98% Положительных отзывов" },
  { id: 3, name: "50+ Видов процедур", text: "50+ Видов процедур" },
  { id: 4, name: "10+ Лет опыта", text: "10+ Лет опыта" },
];

function LogoCarouselBasic() {
  return (
    <div className="p-2">
      <LogoCarousel logos={demoLogos} columns={1} />
    </div>
  );
}

export { LogoCarouselBasic }; 