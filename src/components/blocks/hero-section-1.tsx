'use client';

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee'

import { Footerdemo } from '@/components/ui/footer-section';

import { Pricing } from '@/components/ui/single-pricing-card-1';
import CircularText from '@/components/ui/circular-text';
import { DisplayCardsDemo } from '@/components/ui/display-cards-demo';
import { FeatureStepsDemo } from '@/components/blocks/feature-steps-demo';
import { CircularTestimonialsDemo } from '@/components/ui/circular-testimonials-demo';
import { PricingSectionDemo } from '@/components/ui/pricing-section-demo';
import { BentoDemo } from '@/components/ui/bento-demo';
import { FallingPattern } from '@/components/ui/falling-pattern';
import { CommerceHero } from '@/components/ui/commerce-hero';
import TimeLine_01 from '@/components/release-time-line';
import { BGPattern } from '@/components/bg-pattern';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const testimonials = [
  {
    author: {
      name: "Алёна Лазарева",
      handle: "Инъекционные методики",
      avatar: "/f1.png"
    },
    text: "Настоящий профессионал! После процедур кожа стала намного лучше. Очень довольна быстротой, аккуратностью и результатом.",
    href: "#"
  },
  {
    author: {
      name: "Наталья Мельникова",
      handle: "Мезотерапия",
      avatar: "/f2.png"
    },
    text: "Очень тёплый приём и профессиональная работа. Сделано с любовью к делу и уважением к пациенту. Огромное спасибо!",
    href: "#"
  },
  {
    author: {
      name: "Инна Богданова",
      handle: "Увеличение губ",
      avatar: "/f3.png"
    },
    text: "Благодарю за безупречную работу. Мои губы теперь выглядят гармонично и естественно, и каждый день приносят мне радость."
  },
  {
    author: {
      name: "Анна Ливенцева",
      handle: "Комплексные процедуры",
      avatar: "/f4.png"
    },
    text: "Карина, спасибо за ваши золотые руки и профессионализм. Результат превзошёл ожидания — я в восторге, муж тоже. Обязательно буду вас рекомендовать!"
  },
  {
    author: {
      name: "Олеся Долгорукова",
      handle: "Эстетика лица",
      avatar: "/f5.png"
    },
    text: "Спасибо за деликатный подход и потрясающий результат! Всё выглядит в точности как я хотела!",
    href: "#"
  },
  {
    author: {
      name: "Мира Ланьковская",
      handle: "Ботокс",
      avatar: "/f6.png"
    },
    text: "Сразу почувствовала, что оказалась в руках настоящего эксперта. Получилось очень достойно.",
    href: "#"
  }
]

export function HeroSection() {
    const [currentBghr, setCurrentBghr] = useState(1);
    const [currentFlwr, setCurrentFlwr] = useState(1);
    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const qualificationsRef = useRef(null);
    const isQualificationsInView = useInView(qualificationsRef, { 
      once: true, 
      margin: "-100px" 
    });
    const consultationRef = useRef(null);
    const isConsultationInView = useInView(consultationRef, { 
      once: true, 
      margin: "-100px" 
    });

    // Анимация переключения изображений bghr
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBghr(prev => prev === 1 ? 2 : 1);
        }, 4000); // Переключение каждые 4 секунды

        return () => clearInterval(interval);
    }, []);

    // Анимация переключения изображений flwr
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFlwr(prev => prev === 1 ? 2 : 1);
        }, 4000); // Переключение каждые 4 секунды

        return () => clearInterval(interval);
    }, []);

    // Отслеживание видимости главной кнопки
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                // Показываем плавающую кнопку когда главная секция уходит за верх экрана
                setShowFloatingButton(rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Проверяем сразу при загрузке

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
             <main className="bg-white">

                 
                 {/* Главная секция с белым фоном */}
                 <div ref={heroRef} className="w-full bg-white pt-8 pb-8">
                   <div className="max-w-[1400px] mx-auto px-4">
                     <CommerceHero />
                     </div>
                 </div>
                 
                 {/* Секция "Отзывы" */}
                 <TestimonialsSection
                   title="Более 3500 успешных процедур"
                   description="Честные отзывы моих клиентов"
                   testimonials={testimonials}
                 />
                 
                 {/* Новая секция */}
                 <div className="w-full bg-white relative">
                   {/* Dots Background Pattern - Full Width */}
                   <div className="absolute inset-0 w-full h-full z-0">
                     <BGPattern 
                       variant="dots" 
                       mask="fade-center" 
                       size={25} 
                       fill="#6b7280" 
                       className="opacity-60 w-full h-full"
                     />
</div>
                   <div className="max-w-7xl mx-auto px-4 relative z-10">
                     <TimeLine_01 title="О враче" />
                                         </div>
                  </div>
                 
                 {/* Секция "Сертификаты и достижения" */}
                  <section id="certificates" className="py-12 md:py-20 bg-gray-100 relative z-[10] font-montserrat overflow-hidden">
                   {/* Фоновые изображения flwr в левом верхнем углу */}
                   <motion.div 
                     className="hidden md:block absolute -top-24 -left-24 z-10 pointer-events-none"
                     style={{ width: "420px", height: "420px" }}
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={isQualificationsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                     transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                   >
                     {/* Первое изображение flwr1.png */}
                     <motion.img
                       src="/flwr1.png"
                       alt="Background flower element 1"
                       className="absolute max-w-full max-h-full object-contain"
                       animate={{ opacity: currentFlwr === 1 ? 1 : 0 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                     />
                     
                     {/* Второе изображение flwr2.png накладывается поверх */}
                     <motion.img
                       src="/flwr2.png"
                       alt="Background flower element 2"
                       className="absolute max-w-full max-h-full object-contain"
                       animate={{ opacity: currentFlwr === 2 ? 1 : 0 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                     />
                   </motion.div>
                   
                   {/* Фоновое изображение bghr.png */}
                   <motion.div
                     className="hidden md:block"
                     style={{
                       position: "absolute",
                       top: "auto",
                       left: "auto",
                       right: "-50px",
                       bottom: "-800px",
                       zIndex: 1,
                       pointerEvents: "none",
                     }}
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={isQualificationsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                     transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                   >
                     {/* Первое изображение bghr.png всегда видимо */}
                     <motion.img
                       src="/bghr.png"
                       alt="Background qualification element 1"
                       style={{
                         width: "700px",
                         height: "700px",
                         objectFit: "contain",
                         opacity: 0.1,
                         transform: "rotate(320deg)",
                       }}
                       animate={{ opacity: currentBghr === 1 ? 0.1 : 0.05 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                     />
                     
                     {/* Второе изображение bghr2.png накладывается поверх */}
                     <motion.img
                       src="/bghr2.png"
                       alt="Background qualification element 2"
                       style={{
                         width: "700px",
                         height: "700px",
                         objectFit: "contain",
                         opacity: 0.1,
                         transform: "rotate(320deg)",
                       }}
                       animate={{ opacity: currentBghr === 2 ? 0.1 : 0.05 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                     />
                   </motion.div>
                       
                   {/* FallingPattern эффект на сером фоне */}
                   <FallingPattern 
                     className="absolute inset-0 z-0" 
                     color="rgba(147, 51, 234, 0.1)" 
                     backgroundColor="rgb(243, 244, 246)"
                     duration={200}
                     blurIntensity="0.5em"
                     density={0.8}
                   />
                   
                   <motion.div 
                     ref={qualificationsRef}
                     className="container mx-auto px-4 relative z-10"
                     initial={{ opacity: 0, y: 50 }}
                     animate={isQualificationsInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                   >
                                          <div className="flex flex-col items-center gap-4 sm:gap-10 mb-4 sm:mb-12">
                       <h2 
                         className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none tracking-tighter font-montserrat text-center mb-4 sm:mb-0"
                         style={{
                           background: 'linear-gradient(144deg, #151d2e 0%, #101828 100%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text',
                           lineHeight: '1.1',
                           paddingBottom: '0.1em'
                         }}
                       >
                         <span className="sm:hidden">Квалификация и<br />стандарты работы</span>
                         <span className="hidden sm:inline">Квалификация и стандарты работы</span>
                       </h2>
                         <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center font-montserrat">Я ценю доверие пациентов и подтверждаю его своим образованием и наградами. За каждым сертификатом — <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] bg-clip-text text-transparent font-semibold">годы практики и развития</span>.</p>
                       </div>
                       
                     <BentoDemo />
                   </motion.div>
                                   </section>
                  
                  {/* Секция "Прайс-лист" */}
                  <section id="pricing">
                    <PricingSectionDemo />
                  </section>

                  {/* Секция "Бесплатная консультация" и "Обучение косметологии" */}
                  <motion.section 
                    ref={consultationRef}
                    id="consultation" 
                    className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isConsultationInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                                         {/* Изображение bglr.png на розовом фоне слева */}
                     <div
                       style={{
                         position: "absolute",
                         top: "0",
                         left: "0",
                         bottom: "0",
                         zIndex: 0,
                         pointerEvents: "none",
                       }}
                     >
                                             <img
                         src="/bglr.png"
                         alt="Background left element"
                                                   style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: 0.6,
                            maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                          }}
                       />
                        </div>
                        
                                         {/* Изображение bgrl.png на розовом фоне справа */}
                     <div
                       style={{
                         position: "absolute",
                         top: "0",
                         right: "0",
                         bottom: "0",
                         zIndex: 0,
                         pointerEvents: "none",
                       }}
                     >
                                             <img
                         src="/bgrl.png"
                         alt="Background right element"
                                                   style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: 0.6,
                            maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)",
                          }}
                       />
                    </div>

                    <div className="container mx-auto px-4">
                      <div className="mx-auto max-w-6xl relative">
                        {/* Независимый блок: круг в правом верхнем углу белой плашки (оверлей над секцией консультации) */}
                        <div className="hidden sm:block absolute z-[100]" style={{ top: '-3.6rem', right: '-4rem' }}>
                          <CircularText
                            text={"бесплатная консультация * скидка 100% * "}
                            spinDuration={18}
                            onHover="speedUp"
                            className="w-[200px] h-[200px]"
                            gradient={true}
                          />
                        </div>
                        {/* CircularTestimonials Component */}
                        <CircularTestimonialsDemo />
                      </div>
                    </div>
                  </motion.section>
                  
                  {/* Секция Pricing */}
                  <Pricing />
                  
                                    {/* Секция "Сертификаты и достижения" */}
          </main>
          
                      {/* Футер */}
            <div id="contacts">
              <Footerdemo />
                              </div>
                              
            {/* Плавающая кнопка "Записаться" */}
            <motion.div
              className="fixed bottom-6 right-6 z-[9999]"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: showFloatingButton ? 1 : 0, 
                scale: showFloatingButton ? 1 : 0.8,
                y: showFloatingButton ? 0 : 20
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ pointerEvents: showFloatingButton ? 'auto' : 'none' }}
            >
              <Button
                variant="secondary"
                aria-label="Записаться"
                className="cursor-pointer p-0 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 group active:scale-95"
                onClick={() => window.open('https://mst.link/kery_lady/services?cid=iet7fpgpkg8jpj7tapgm9l3ggr', '_blank')}
              >
                <div className="relative flex items-center justify-center bg-gradient-to-r from-[#9a13d2] to-[#6a288a] transition-all duration-300 sm:group-hover:w-[180px] w-14 h-14 sm:group-hover:h-12 rounded-full sm:group-hover:px-3 px-0">
                  <Calendar className="w-[22px] h-[22px] text-white transition-all duration-300 flex-shrink-0 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:group-hover:opacity-0" />
                  <span className="text-white text-sm font-medium font-[Montserrat] opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Записаться
                  </span>
                          </div>
              </Button>
            </motion.div>
         </>
     )
}






 