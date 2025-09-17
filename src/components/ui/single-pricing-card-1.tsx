import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import AvatarGroup from './avatar-group';
import { ShiningText } from "@/components/ui/shining-text";
import CircularText from './circular-text';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Сертификат',
    subtitle: 'Официальный документ о прохождении курса',
  },
  {
    id: 2,
    title: 'Практика',
    subtitle: 'Отработка навыков на реальных моделях',
  },
  {
    id: 3,
    title: 'Материалы',
    subtitle: 'Подробные учебные пособия и методики',
  },
  {
    id: 4,
    title: 'Поддержка',
    subtitle: 'Помощь на всех этапах обучения',
  },
  {
    id: 5,
    title: 'Нетворкинг',
    subtitle: 'Знакомства и обмен опытом с участниками',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter, isMobile = false, onClick }: { 
  item: { id: number; title: string; subtitle: string; }; 
  isActive: boolean; 
  onMouseEnter: () => void; 
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  if (isMobile) {
    // Мобильная версия - вертикальный аккордеон
    return (
      <div
        className={`
          relative rounded-2xl overflow-hidden cursor-pointer
          transition-all duration-700 ease-in-out focus:outline-none focus:ring-0
          ${isActive ? 'h-[300px]' : 'h-[80px]'}
          w-full
        `}
        style={{
          background: 'linear-gradient(135deg, #120d20 0%, #1f142f 100%)'
        }}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        {/* Размытые круги по бокам - только для активного состояния */}
        {isActive && (
          <>
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-[#dd2ffc] rounded-full opacity-100 blur-2xl z-0"></div>
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-[#dd2ffc] rounded-full opacity-100 blur-2xl z-0"></div>
          </>
        )}

        {/* Изображение для сертификата */}
        {item.id === 1 && (
          <img
            src="/sertificate.png"
            alt="Сертификат"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[280px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для практики */}
        {item.id === 2 && (
          <img
            src="/practice.png"
            alt="Практика"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[280px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для материалов */}
        {item.id === 3 && (
          <img
            src="/materials.png"
            alt="Материалы"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[280px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для нетворкинга */}
        {item.id === 5 && (
          <img
            src="/networking.png"
            alt="Нетворкинг"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[280px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для поддержки */}
        {item.id === 4 && (
          <img
            src="/support.png"
            alt="Поддержка"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[280px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Caption Text для мобильной версии */}
        <div className={`
          absolute text-white font-montserrat z-20
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-4 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0' // Inactive state: horizontal, center
          }
        `}>
          <div className={`text-base text-center ${isActive ? 'font-bold' : 'font-normal'}`}>{item.title}</div>
          <div className={`text-sm font-normal mt-1 opacity-90 text-center w-full max-w-[250px] leading-tight transition-all duration-300 ${
            isActive 
              ? 'opacity-90 max-h-16' 
              : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            {item.subtitle}
          </div>
        </div>
      </div>
    );
  }

  // Десктопная версия (оригинальная)
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out focus:outline-none focus:ring-0
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      style={{
        background: 'linear-gradient(135deg, #120d20 0%, #1f142f 100%)'
      }}
      onMouseEnter={onMouseEnter}
    >
        {/* Размытые круги по бокам */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-[#dd2ffc] rounded-full opacity-100 blur-3xl z-0"></div>
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-[#dd2ffc] rounded-full opacity-100 blur-3xl z-0"></div>

        {/* Изображение для сертификата */}
        {item.id === 1 && (
          <img
            src="/sertificate.png"
            alt="Сертификат"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для практики */}
        {item.id === 2 && (
          <img
            src="/practice.png"
            alt="Практика"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для материалов */}
        {item.id === 3 && (
          <img
            src="/materials.png"
            alt="Косметологические материалы и инструменты для обучения"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для нетворкинга */}
        {item.id === 5 && (
          <img
            src="/networking.png"
            alt="Нетворкинг и профессиональные связи в сфере косметологии"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

        {/* Изображение для поддержки */}
        {item.id === 4 && (
          <img
            src="/support.png"
            alt="Поддержка и сопровождение в процессе обучения косметологии"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] object-cover transition-all duration-700 ease-in-out z-10 pointer-events-none select-none ${
              isActive ? 'blur-0' : 'blur-md'
            }`}
          />
        )}

             {/* Caption Text */}
       <div className={`
         absolute text-white font-montserrat z-20
         transition-all duration-300 ease-in-out
         ${
           isActive
             ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
             // Inactive state: vertical, positioned at the center for all screen sizes
             : 'w-auto text-left top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90'
         }
       `}>
         <div className={`text-lg text-center ${isActive ? 'font-bold' : 'font-normal'}`}>{item.title}</div>
         <div className={`text-sm font-normal mt-1 opacity-90 text-center w-full max-w-[350px] leading-tight transition-all duration-300 ${
           isActive 
             ? 'opacity-90 max-h-20' 
             : 'opacity-0 max-h-0 overflow-hidden'
         }`}>
           {item.subtitle}
         </div>
       </div>
    </div>
  );
};

// --- Main App Component ---
export function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const educationRef = useRef(null);
  const isEducationInView = useInView(educationRef, { 
    once: true, 
    margin: "-100px" 
  });
  const [currentFace, setCurrentFace] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleItemHover = (index: number) => {
    if (!isMobile) {
      setActiveIndex(index);
    }
  };

  const handleItemClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Анимация переключения изображений
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace(prev => prev === 1 ? 2 : 1);
    }, 3000); // Переключение каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  // Определение мобильного устройства
  React.useEffect(() => {
    setMounted(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Автоматическое переключение вкладок аккордеона
  React.useEffect(() => {
    if (!isHovered && !isMobile) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % accordionItems.length);
      }, 6000); // Переключение каждые 6 секунд

      return () => clearInterval(interval);
    }
  }, [isHovered, isMobile]);

  return (
    <>
      <style jsx>{`
        .premium-shine {
          position: relative;
          overflow: hidden;
        }
        .premium-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -30%;
          width: 60%;
          height: 200%;
          background: linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.0) 100%);
          transform: skewX(-20deg) translateX(-120%);
          transition: transform 0.6s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
          z-index: 2;
        }
        .premium-shine:hover::after {
          transform: skewX(-20deg) translateX(180%);
        }
      `}</style>
      <div className="bg-white font-montserrat relative">
        {/* Фоновое изображение - скрыто на мобильных */}
        <motion.div 
          className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isEducationInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Первое изображение всегда видимо */}
          <motion.img
            src="/face.png"
            alt="Face background 1"
            className="absolute max-w-full max-h-full object-contain"
            animate={{ opacity: currentFace === 1 ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Второе изображение накладывается поверх */}
          <motion.img
            src="/face2.png"
            alt="Face background 2"
            className="absolute max-w-full max-h-full object-contain"
            animate={{ opacity: currentFace === 2 ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.section 
          ref={educationRef}
          id="education" 
          className="container mx-auto px-4 py-12 md:py-24 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
                       {/* Left Side: Text Content */}
             <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
               <h1 
                 className="text-3xl md:text-6xl font-bold leading-none tracking-tighter font-montserrat"
                 style={{
                   background: 'linear-gradient(144deg, #151d2e 0%, #101828 100%)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text',
                   lineHeight: '1.1',
                   paddingBottom: '0.1em'
                 }}
               >
                 Обучение косметологии
               </h1>
                              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 font-montserrat">
                 За несколько занятий Вы получите максимально качественные теоретические материалы и практические навыки, которые <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] bg-clip-text text-transparent font-semibold">можно сразу применять</span> в работе.
               </p>
                               <div className="mt-6 md:mt-8 flex flex-col gap-4 md:gap-6">
                  {/* Первая строка: кнопка и иконки */}
                  <div className="flex flex-row sm:flex-row items-center sm:items-start gap-4 sm:gap-6 justify-center sm:justify-start">
                    <div className="relative">
                      <a
                        href="https://t.me/your_training_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-[length:200%_200%] hover:bg-right-top text-white font-semibold px-8 py-3 md:px-8 md:py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-montserrat premium-shine text-base md:text-base"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      >
                        <span className="hidden sm:inline">Записаться на обучение</span>
                        <span className="sm:hidden">Записаться</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                                            <AnimatePresence>
                        {showTooltip && !isMobile && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full left-0 mt-2 z-10"
                          >
                            <div className="whitespace-nowrap">
                              <ShiningText text="Нажимая на кнопку, Вы перейдете в Telegram-бот" />
                            </div>
                            <div className="whitespace-nowrap">
                              <ShiningText text="для оформления покупки курса" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="self-center sm:self-start mt-0 sm:mt-1" style={{ transform: isMobile ? 'translateY(-2px)' : 'translateX(-4px)' }}>
                      <AvatarGroup
                        size="md"
                        mobileSize="md"
                        items={[
                                                                  {
                       id: 1,
                       name: "Элина Корсакова",
                       designation: "Косметолог",
                       image: "/client1.png",
                     },
                     {
                       id: 2,
                       name: "Камилла Воронова",
                       designation: "Косметолог",
                       image: "/client2.png",
                     },
                     {
                       id: 3,
                       name: "Селин Карпова",
                       designation: "Косметолог",
                       image: "/client3.png",
                     },
                     {
                       id: 4,
                       name: "Виктория Власова",
                       designation: "Косметолог",
                       image: "/client4.png",
                     },
                     {
                       id: 5,
                       name: "Алисия Чернова",
                       designation: "Косметолог",
                       image: "/client5.png",
                     },
                        {
                          id: 6,
                          name: "Татьяна Волкова",
                          designation: "Косметолог",
                          image: "https://randomuser.me/api/portraits/women/65.jpg",
                        },
                        {
                          id: 7,
                          name: "Наталья Соколова",
                          designation: "Косметолог",
                          image: "https://randomuser.me/api/portraits/women/66.jpg",
                        },
                        {
                          id: 8,
                          name: "Светлана Попова",
                          designation: "Косметолог",
                          image: "https://randomuser.me/api/portraits/women/67.jpg",
                        },
                        {
                          id: 9,
                          name: "Юлия Лебедева",
                          designation: "Косметолог",
                          image: "https://randomuser.me/api/portraits/women/68.jpg",
                        },
                        {
                          id: 10,
                          name: "Александра Козлова",
                          designation: "Косметолог",
                          image: "https://randomuser.me/api/portraits/women/69.jpg",
                        },
                        {
                          id: 11,
                          name: "Виктория Морозова",
                          designation: "Косметолог",
                          image: "https://randomuser.me/api/portraits/women/70.jpg",
                        },
                        {
                          id: 12,
                       name: "Екатерина Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/71.jpg",
                     },
                     {
                       id: 13,
                       name: "Дарья Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/72.jpg",
                     },
                     {
                       id: 14,
                       name: "Алина Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/73.jpg",
                     },
                     {
                       id: 15,
                       name: "Кристина Лебедева",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/74.jpg",
                     },
                     {
                       id: 16,
                       name: "Анжелика Козлова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/75.jpg",
                     },
                     {
                       id: 17,
                       name: "Валерия Морозова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/76.jpg",
                     },
                     {
                       id: 18,
                       name: "Полина Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/77.jpg",
                     },
                     {
                       id: 19,
                       name: "Вероника Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/78.jpg",
                     },
                     {
                       id: 20,
                       name: "Ангелина Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/79.jpg",
                     },
                     {
                       id: 21,
                       name: "Диана Лебедева",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/80.jpg",
                     },
                     {
                       id: 22,
                       name: "Ксения Козлова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/81.jpg",
                     },
                     {
                       id: 23,
                       name: "Арина Морозова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/82.jpg",
                     },
                     {
                       id: 24,
                       name: "Милана Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/83.jpg",
                     },
                     {
                       id: 25,
                       name: "София Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/84.jpg",
                     },
                     {
                       id: 26,
                       name: "Амелия Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/85.jpg",
                     },
                     {
                       id: 27,
                       name: "Ева Лебедева",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/86.jpg",
                     },
                     {
                       id: 28,
                       name: "Злата Козлова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/87.jpg",
                     },
                     {
                       id: 29,
                       name: "Маргарита Морозова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/88.jpg",
                     },
                     {
                       id: 30,
                       name: "Алиса Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/89.jpg",
                     },
                     {
                       id: 31,
                       name: "Василиса Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/90.jpg",
                     },
                     {
                       id: 32,
                       name: "Агата Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/91.jpg",
                     },
                     {
                       id: 33,
                       name: "Белла Лебедева",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/92.jpg",
                     },
                     {
                       id: 34,
                       name: "Варвара Козлова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/93.jpg",
                     },
                     {
                       id: 35,
                       name: "Есения Морозова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/94.jpg",
                     },
                     {
                       id: 36,
                       name: "Кира Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/95.jpg",
                     },
                     {
                       id: 37,
                       name: "Лилия Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/96.jpg",
                     },
                     {
                       id: 38,
                       name: "Майя Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/97.jpg",
                     },
                     {
                       id: 39,
                       name: "Нелли Лебедева",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/98.jpg",
                     },
                     {
                       id: 40,
                       name: "Олеся Козлова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/99.jpg",
                     },
                     {
                       id: 41,
                       name: "Прасковья Морозова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/100.jpg",
                     },
                     {
                       id: 42,
                       name: "Раиса Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/101.jpg",
                     },
                     {
                       id: 43,
                       name: "Стефания Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/102.jpg",
                     },
                     {
                       id: 44,
                       name: "Таисия Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/103.jpg",
                     },
                     {
                       id: 45,
                       name: "Ульяна Лебедева",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/104.jpg",
                     },
                     {
                       id: 46,
                       name: "Фаина Козлова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/105.jpg",
                     },
                     {
                       id: 47,
                       name: "Христина Морозова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/106.jpg",
                     },
                     {
                       id: 48,
                       name: "Цветана Волкова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/107.jpg",
                     },
                     {
                       id: 49,
                       name: "Шарлотта Соколова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/108.jpg",
                     },
                     {
                       id: 50,
                       name: "Эмма Попова",
                       designation: "Косметолог",
                       image: "https://randomuser.me/api/portraits/women/109.jpg",
                     },
                   ]}
                   maxVisible={5}
                 />
                     </div>
                   </div>
                   

                 </div>
               </div>

           {/* Right Side: Image Accordion */}
           <div className="w-full md:w-1/2">
             {/* Мобильная версия - вертикальный аккордеон */}
             <div 
               className={`flex items-center justify-center gap-2 md:gap-4 p-2 md:p-4 ${
                 isMobile ? 'flex-col' : 'flex-row overflow-x-auto'
               }`}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
             >
               {accordionItems.map((item, index) => (
                 <AccordionItem
                   key={item.id}
                   item={item}
                   isActive={index === activeIndex}
                   onMouseEnter={() => handleItemHover(index)}
                   isMobile={isMobile}
                   onClick={() => handleItemClick(index)}
                 />
               ))}
             </div>
           </div>
         </div>
       </motion.section>
     </div>
    </>
  );
}


