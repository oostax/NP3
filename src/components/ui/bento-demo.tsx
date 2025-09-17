

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: () => <img src="/gos.png" alt="Иконка диплома врача-косметолога" className="h-12 w-12" />,
    name: "Диплом врача-косметолога",
    description: <>Высшее медицинское образование<br />по специальности</>,
    cta: "Государственный диплом",
    background: (
      <img 
        src="/diploma.png" 
        alt="Диплом врача-косметолога Дрожжиной Карины Тагировны" 
        className="absolute -right-64 top-2 sm:-right-20 sm:top-8 md:top-10 lg:top-8 md:scale-20 lg:scale-105 pointer-events-none transform -rotate-20 sm:rotate-0 md:-right-20"
        style={{ width: '570px !important', height: '540px !important', maxWidth: 'none !important' }} 
      />
    ),
    className: "md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-3",
  },
  {
    Icon: () => <img src="/inj.png" alt="Иконка сертификата специалиста по инъекционным методикам" className="h-12 w-12" />,
    name: "Сертификат специалиста",
    description: <>Сертификат по методам коррекции<br />формы губ</>,
    cta: "Действующий сертификат",
    background: <img src="/k2.png" alt="Сертификат специалиста по коррекции формы губ" className="absolute -right-40 -top-0 sm:-right-26 sm:-top-0 w-[28rem] h-[28rem] pointer-events-none transform -rotate-30" />,
    className: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3",
  },
  {
    Icon: () => <img src="/prem.png" alt="Иконка премиальных препаратов для косметологии" className="h-12 w-12" />,
    name: "Премиальные препараты",
    description: <>Работа только с оригинальными<br />сертифицированными препаратами</>,
    cta: "100% оригинальные премиум препараты",
    background: <img src="/bottle.png" alt="Премиальные препараты для косметологических процедур" className="absolute -right-10 top-6 w-38 h-80 pointer-events-none transform -rotate-20" />,
    className: "md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4",
  },
  {
    Icon: () => <img src="/met.png" alt="Иконка современных методов в эстетической медицине" className="h-12 w-12" />,
    name: "Современные методы",
    description: <>Использование новейших технологий<br />в эстетической медицине</>,
    cta: "Инновационный подход",
    background: <img src="/dermatoskop.png" alt="Дерматоскоп - современное оборудование для диагностики кожи" className="absolute -right-29 top-5 sm:top-4 w-89 h-89 pointer-events-none" />,
    className: "md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-2",
  },
  {
    Icon: () => <img src="/kval.png" alt="Иконка повышения квалификации врача-косметолога" className="h-12 w-12" />,
    name: "Повышение квалификации",
    description: <>Регулярно обучаюсь современным<br />методам и технологиям</>,
    cta: "Ежегодное прохождение",
    background: <img src="/pincet.png" alt="Косметологические инструменты для профессиональных процедур" className="absolute -right-28 top-4 sm:-right-11 sm:top-9 w-89 h-89 pointer-events-none" />,
    className: "md:col-start-3 md:col-end-3 md:row-start-2 md:row-end-4",
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="md:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { BentoDemo };
