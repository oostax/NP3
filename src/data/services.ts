export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
  oldPrice?: string;
  discount?: string;
  ampoules?: string;
  russianNames?: string[];
}

export const services: Service[] = [
  // Инъекционные методики
  {
    id: "radiesse-1",
    name: "Radiesse",
    price: "от 25 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики",
    russianNames: ["радиэйз", "радиес", "радиесс", "радиессе"]
  },
  {
    id: "biorevitalization-1",
    name: "Биоревитализация",
    price: "от 15 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "biorevitalization-2",
    name: "Биоревитализация Profnilo (мгновенный эффект)",
    price: "от 18 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "bioreparation-1",
    name: "Биорепарация Elaxen PDRN (2,2ml)",
    price: "от 14 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "bioreparation-2",
    name: "Биорепарация RE:Q (2ml)",
    price: "от 13 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "bioreparation-3",
    name: "Биорепарация Реви 2 мл (лицо+шея)",
    price: "от 17 500 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "bioreparation-4",
    name: "Биорепарация Meso-Wharton",
    price: "от 17 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "bioreparation-5",
    name: "Биорепарация Meso-Xanthin",
    price: "от 17 000 ₽",
    duration: "1 час 5 мин",
    category: "Инъекционные методики"
  },
  {
    id: "bioreparation-6",
    name: "Биорепарация Реви 1 мл",
    price: "от 13 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "collagen-1",
    name: "Коллагеннотерапия COLLOST MICRO",
    price: "от 18 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },
  {
    id: "exosomes-1",
    name: "Экзосомы",
    price: "от 12 000 ₽",
    duration: "1 час",
    category: "Инъекционные методики"
  },

  // Ботокс
  {
    id: "botox-1",
    name: "Ботокс верхняя треть лица + носогубки",
    price: "от 15 000 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },
  {
    id: "botox-2",
    name: "Ботокс глаза",
    price: "от 6 000 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },
  {
    id: "botox-3",
    name: "Ботокс губы",
    price: "от 350 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },
  {
    id: "botox-4",
    name: "Ботокс лоб, межбровка",
    price: "от 8 000 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },
  {
    id: "botox-5",
    name: "Ботокс подмышки 200 ед",
    price: "от 15 000 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },
  {
    id: "botox-6",
    name: "Ботокс фулл фейс",
    price: "от 25 000 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },
  {
    id: "botox-7",
    name: "Коррекция ботокс",
    price: "от 1 500 ₽",
    duration: "30 мин",
    category: "Ботокс"
  },

  // Контурная пластика
  {
    id: "contour-1",
    name: "Контурная пластика нос (Корея)",
    price: "от 17 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-2",
    name: "Контурная пластика носа (Стилаж М)",
    price: "от 19 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-3",
    name: "Контурная пластика подбородка (Корея)",
    price: "от 11 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-4",
    name: "Контурная пластика подбородка (Стилаж М,L)",
    price: "от 18 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-5",
    name: "Контурная пластика углы Джоли 1 мл",
    price: "от 11 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-6",
    name: "Носогубная борозда Hyomax extra deep 1ml",
    price: "от 14 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-7",
    name: "Носогубная борозда Корея 1 мл",
    price: "от 13 500 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-8",
    name: "Носогубная борозда Стилаж М",
    price: "от 18 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },
  {
    id: "contour-9",
    name: "Носослезная борозда Teosyal redensity 2",
    price: "от 11 000 ₽",
    duration: "1 час 5 мин",
    category: "Контурная пластика"
  },
  {
    id: "contour-10",
    name: "Носослезная борозда Стилаж S (1мл)",
    price: "от 12 000 ₽",
    duration: "1 час",
    category: "Контурная пластика"
  },

  // Увеличение губ
  {
    id: "lips-1",
    name: "Увеличение губ",
    price: "от 14 500 ₽ до 23 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-2",
    name: "Увеличение губ Juvederm ultra 3",
    price: "от 22 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-3",
    name: "Увеличение губ Нейрамис дип",
    price: "от 14 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-4",
    name: "Увеличение губ Револакс Дип",
    price: "от 14 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-5",
    name: "Увеличение губ Револакс файн",
    price: "от 14 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-6",
    name: "Увеличение губ Сардения",
    price: "от 14 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-7",
    name: "Увеличение губ Ювидерм ультра воливт 1мл",
    price: "от 23 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-8",
    name: "Увеличение губ Ювидерм ультра смайл 0,55",
    price: "от 17 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-9",
    name: "Увеличение губ Стилаж S",
    price: "от 16 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-10",
    name: "Увеличение губ Стилаж М",
    price: "от 18 500 ₽",
    duration: "1 час",
    category: "Увеличение губ"
  },
  {
    id: "lips-11",
    name: "Докоррекция губ",
    price: "от 4 500 ₽",
    duration: "30 мин",
    category: "Увеличение губ"
  },
  {
    id: "lips-12",
    name: "Удаление геля лонгидазой",
    price: "от 6 000 ₽",
    duration: "30 мин",
    category: "Увеличение губ"
  },

  // Комплексные процедуры
  {
    id: "complex-1",
    name: "Комплекс 1: увеличение губ + биоревитализация",
    price: "от 24 500 ₽",
    duration: "1 час 30 мин",
    category: "Комплексные процедуры",
    oldPrice: "от 25 500 ₽",
    discount: "Скидка 1000 ₽"
  },
  {
    id: "complex-2",
    name: "Комплекс 2: увеличение губ + ботокс",
    price: "от 19 500 ₽",
    duration: "1 час",
    category: "Комплексные процедуры",
    oldPrice: "от 20 500 ₽",
    discount: "Скидка 1000 ₽"
  },
  {
    id: "complex-3",
    name: "Комплекс 3: ботокс + липолитик",
    price: "от 10 000 ₽",
    duration: "30 мин",
    category: "Комплексные процедуры",
    oldPrice: "от 11 000 ₽",
    discount: "Скидка 1000 ₽"
  },

  // Нитевые методики
  {
    id: "threads-1",
    name: "Векторный лифтинг полимолочной кислотой",
    price: "от 27 000 ₽",
    duration: "1 час",
    category: "Нитевые методики"
  },
  {
    id: "threads-2",
    name: "Мезонити Lift line моно 20 шт",
    price: "от 13 000 ₽",
    duration: "1 час",
    category: "Нитевые методики"
  },
  {
    id: "threads-3",
    name: "Мезонити «метёлки» 2 шт",
    price: "от 16 000 ₽",
    duration: "30 мин",
    category: "Нитевые методики"
  },

  // Мезотерапия
  {
    id: "mesotherapy-1",
    name: "Мезотерапия волос Hair filler",
    price: "от 7 000 ₽",
    duration: "45 мин",
    category: "Мезотерапия"
  },
  {
    id: "mesotherapy-2",
    name: "Мезотерапия волос RE:Q (0,5)",
    price: "от 7 000 ₽",
    duration: "45 мин",
    category: "Мезотерапия"
  },
  {
    id: "mesotherapy-3",
    name: "Мезотерапия волосистой части головы Dermaheal HL",
    price: "от 4 500 ₽",
    duration: "45 мин",
    category: "Мезотерапия"
  },

  // Эстетика лица и бровей
  {
    id: "aesthetics-1",
    name: "Долговременная укладка бровей",
    price: "от 1 800 ₽",
    duration: "1 час 20 мин",
    category: "Эстетика лица"
  },
  {
    id: "aesthetics-2",
    name: "Ламинирование бровей",
    price: "от 1 800 ₽",
    duration: "1 час",
    category: "Эстетика лица"
  },
  {
    id: "aesthetics-3",
    name: "Ламинирование ресниц",
    price: "от 1 500 ₽",
    duration: "1 час",
    category: "Эстетика лица"
  },
  {
    id: "aesthetics-4",
    name: "Коррекция бровей",
    price: "от 600 ₽",
    duration: "20 мин",
    category: "Эстетика лица"
  },
  {
    id: "aesthetics-5",
    name: "Оформление бровей",
    price: "от 1 000 ₽",
    duration: "1 час",
    category: "Эстетика лица"
  },

  // Slim & Wellness
  {
    id: "slim-1",
    name: "Лайт фит",
    price: "от 6 000 ₽",
    duration: "30 мин",
    category: "Slim & Wellness",
    ampoules: "1 ампула"
  },
  {
    id: "slim-2",
    name: "Стройность",
    price: "от 8 000 ₽",
    duration: "30 мин",
    category: "Slim & Wellness"
  },

  // Консультации
  {
    id: "consultation-1",
    name: "Консультация",
    price: "от 0 ₽",
    duration: "30 мин",
    category: "Консультации",
    oldPrice: "от 1 500 ₽",
    discount: "Скидка 1 500 ₽"
  }
];

export const categories = [
  "Все услуги",
  "Инъекционные методики",
  "Ботокс",
  "Контурная пластика",
  "Увеличение губ",
  "Комплексные процедуры",
  "Нитевые методики",
  "Мезотерапия",
  "Эстетика лица",
  "Slim & Wellness",
  "Консультации"
];
