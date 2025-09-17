import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

import { Stepper, StepperItem, StepperIndicator, StepperSeparator } from '@/components/ui/stepper';
import { FileText, Eye, Target } from 'lucide-react';

// CSS для переливающегося градиента
const gradientAnimation = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const testimonials = [
  {
    quote:
      "Анализ образа жизни, ожиданий и визуальных ориентиров. Выясняем какие процедуры и подходы будут наиболее эффективными и удобными.",
    name: "Личный бриф",
    designation: "Шаг 1",
    src: "/brif.png",
    mobileSrc: "/brifmobile.png",
    alt: "Консультация и анализ образа жизни пациента для подбора косметологических процедур",
  },
  {
    quote:
      "Тщательный осмотр, выбор приоритетных процедур и технологий, подбор их интенсивности.",
    name: "Экспертная оценка",
    designation: "Шаг 2",
    src: "/grade.png",
    mobileSrc: "/grademobile.png",
    alt: "Профессиональный осмотр и оценка состояния кожи врачом-косметологом",
  },
  {
    quote:
      "Создаем план, который обеспечит максимальный эффект, гармонирующий с образом жизни, визуальными предпочтениями и Вашими ожиданиями.",
    name: "Персональная стратегия",
    designation: "Шаг 3",
    src: "/strategy.png",
    mobileSrc: "/strategymobile.png",
    alt: "Разработка индивидуального плана косметологических процедур",
  },
];

export const CircularTestimonialsDemo = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showStep3Completed, setShowStep3Completed] = React.useState(false);
  
  // Функция для обновления текущего шага при смене слайда карусели
  const handleSlideChange = (index: number) => {
    setCurrentStep(index);
    
    // Если переключились на 3-й шаг, запускаем таймер для показа завершения
    if (index === 2) {
      setTimeout(() => {
        setShowStep3Completed(true);
      }, 4000); // Задержка 4 секунды (за 1 секунду до смены на шаг 1)
    } else {
      // Если переключились на другой шаг, сбрасываем состояние
      setShowStep3Completed(false);
    }
  };
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientAnimation }} />
      
      <div className="relative">
        <div className="bg-white pt-0 pb-6 px-4 sm:p-8 md:p-20 rounded-[1rem] sm:rounded-[2rem] h-[750px] sm:h-auto sm:min-h-[500px] flex flex-wrap gap-4 sm:gap-6 items-center justify-start relative font-montserrat" style={{ position: 'relative' }}>

        <div
          className="items-center justify-center relative flex"
          style={{ maxWidth: "1456px" }}
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            showArrows={false}
            onSlideChange={handleSlideChange}
            showStep3Completed={showStep3Completed}
            colors={{
              name: "#0a0a0a",
              designation: "#454545",
              testimony: "#171717",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#00A6FB",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "20px",
            }}
          />
        </div>

      </div>

      {/* Stepper для десктопа - зафиксированный вне анимируемого контейнера */}
      <div
        className="hidden sm:block absolute bottom-6 md:bottom-12 left-[23%] z-50"
        style={{
          zIndex: 50,
        }}
      >
        <Stepper value={currentStep} className="w-20">
          <StepperItem step={0} completed={currentStep > 0}>
            <StepperIndicator asChild>
              <div className={`relative flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-all duration-500 ease-in-out ${
                currentStep > 0 
                  ? 'bg-black text-white' 
                  : 'bg-primary text-primary-foreground'
              }`}>
                {currentStep > 0 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  '1'
                )}
              </div>
            </StepperIndicator>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={1} completed={currentStep > 1}>
            <StepperIndicator asChild>
              <div className={`relative flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-all duration-500 ease-in-out ${
                currentStep > 1 
                  ? 'bg-black text-white' 
                  : 'bg-primary text-primary-foreground'
              }`}>
                {currentStep > 1 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  '2'
                )}
              </div>
            </StepperIndicator>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={2} completed={currentStep > 2}>
            <StepperIndicator asChild>
              <div className={`relative flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-all duration-500 ease-in-out ${
                currentStep > 2 || showStep3Completed
                  ? 'bg-black text-white' 
                  : 'bg-primary text-primary-foreground'
              }`}>
                {currentStep > 2 || showStep3Completed ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  '3'
                )}
              </div>
            </StepperIndicator>
          </StepperItem>
        </Stepper>
      </div>

      {/* Цена над кнопкой - зафиксированная вне анимируемого контейнера */}
      <div
        className="absolute bottom-20 sm:bottom-24 md:bottom-28 right-8 sm:right-6 md:right-12 flex items-center gap-1 sm:gap-2 font-montserrat z-50 translate-y-0 sm:translate-y-[-2px]"
        style={{
          zIndex: 50
        }}
      >
        <span
          className="text-lg sm:text-lg md:text-xl text-gray-500 line-through font-semibold"
          style={{
            textDecorationColor: "#9ca3af",
          }}
        >
          1500 ₽
        </span>
        <span
          className="text-2xl sm:text-xl md:text-2xl font-bold"
          style={{
            background: "linear-gradient(45deg, #c273f8, #c171f8, #dd2ffc, #c273f8)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          0 ₽
        </span>
      </div>
      
      {/* Кнопка "Получить бесплатную консультацию" - зафиксированная вне анимируемого контейнера */}
      <div
        className="absolute bottom-8 sm:bottom-6 md:bottom-12 right-8 sm:right-6 md:right-12 z-10"
        style={{
          zIndex: 10,
          transform: 'translateY(-1px)',
        }}
      >
        <button 
          onClick={() => window.open('https://t.me/Kery_Lady', '_blank')}
          className="bg-gradient-to-r from-gray-700 via-black to-gray-700 text-white px-6 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md sm:rounded-lg text-sm sm:text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 cursor-pointer font-montserrat"
        >
          <span className="hidden sm:inline">Получить бесплатную консультацию</span>
          <span className="sm:hidden">Бесплатная консультация</span>
        </button>
      </div>
      </div>
    </>
  );
};