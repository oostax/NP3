"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"
import dynamic from "next/dynamic"
import Image from "next/image"
const InfoCarousel = dynamic(() => import("@/components/ui/info-carousel").then(m => m.InfoCarousel), { ssr: false })
const EtherealShadow = dynamic(() => import("@/components/ui/ethereal-shadow").then(m => m.Component), { ssr: false })
const ScheduleDisplay = dynamic(() => import("@/components/ui/schedule-display").then(m => m.ScheduleDisplay), { ssr: false })

export function Footerdemo() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [isCopying, setIsCopying] = React.useState(false)
  const [isQuickMenuExpanded, setIsQuickMenuExpanded] = React.useState(false)
  const [isContactsExpanded, setIsContactsExpanded] = React.useState(false)
  const [isScheduleExpanded, setIsScheduleExpanded] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const { toast } = useToast()
  
  // Detect mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Функция для получения текущего дня недели
  const getCurrentDay = () => {
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const today = new Date().getDay()
    return days[today]
  }

  return (
    <>
      <footer 
        className="relative border-t text-white transition-colors duration-300 font-montserrat footer-divider" 
        style={{ backgroundColor: '#1a1a1a' }}
      >
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0 z-0">
        <EtherealShadow
          color="rgba(128, 128, 128, 0.25)"
          animation={{ scale: 50, speed: 60 }}
          noise={{ opacity: 0.5, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      
      <div className="container mx-auto px-4 pt-8 pb-2 md:py-12 md:px-6 lg:px-8 relative z-10">
        <div className={`${isMobile ? 'flex gap-4' : 'grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-5'}`}>
          {/* Логотип и карусель */}
          <motion.div 
            className={`relative ${isMobile ? 'flex-shrink-0' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Image
              src="/Logo.png"
              alt="Логотип Dr. Kery Lady - врач-косметолог Дрожжина Карина Тагировна"
              width={320}
              height={160}
              className={`${isMobile ? 'h-32' : 'mb-4 h-24 md:h-40 ml-0 md:ml-6'}`}
              draggable={false}
              style={{ pointerEvents: 'none', userSelect: 'none', WebkitUserSelect: 'none', width: 'auto', height: 'auto' }}
              loading="lazy"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 320px"
            />
            <InfoCarousel />
          </motion.div>

          {/* Мобильная версия - блоки справа от логотипа */}
          {isMobile && (
            <div className="flex flex-col gap-2 flex-1 mt-2">
              {/* Быстрое меню */}
              <motion.div 
                className="ml-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
            <h3 
              className={`mb-3 md:mb-4 text-base md:text-lg font-semibold flex items-center gap-2 ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => isMobile && setIsQuickMenuExpanded(!isQuickMenuExpanded)}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Быстрое меню
              {isMobile && (
                <svg 
                  className={`w-4 h-4 ml-auto transition-transform duration-300 ${isQuickMenuExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </h3>
            <nav className={`space-y-1.5 md:space-y-2 text-xs md:text-sm ${isMobile && !isQuickMenuExpanded ? 'hidden' : ''}`}>
              <a href="#" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                <span className="relative">
                  Главная
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </span>
              </a>
              <a href="#about-doctor" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                <span className="relative">
                  О враче
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </span>
              </a>
              <a href="#pricing" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                <span className="relative">
                  Услуги
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </span>
              </a>
              <a href="#consultation" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                <span className="relative">
                  Консультации
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </span>
              </a>
              <a href="#education" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                <span className="relative">
                  Обучение
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </span>
              </a>
            </nav>
              </motion.div>

              {/* Контакты */}
              <motion.div 
                className="ml-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 
                  className={`mb-3 text-base font-semibold flex items-center gap-2 cursor-pointer`}
                  onClick={() => setIsContactsExpanded(!isContactsExpanded)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6В5z" />
                  </svg>
                  Контакты
                  <svg 
                    className={`w-4 h-4 ml-auto transition-transform duration-300 ${isContactsExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <div className={`space-y-1 text-xs not-italic text-gray-300 ${!isContactsExpanded ? 'hidden' : ''}`}>
                  <div className="flex items-center gap-2 group">
                    <span className={`transition-all duration-300 ${isCopying ? 'text-[#c273f8]' : 'text-gray-300'} group-hover:bg-gradient-to-r group-hover:from-[#cf89ff] group-hover:to-[#d18fff] group-hover:bg-clip-text group-hover:text-transparent`}>+7 963 640 4686</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                          <button 
                            onClick={() => {
                              setIsCopying(true)
                              navigator.clipboard.writeText('+7 963 640 4686')
                              toast({
                                title: "Успешно скопировано",
                                description: "Номер телефона скопирован в буфер обмена",
                              })
                              setTimeout(() => setIsCopying(false), 1000)
                            }}
                            className="text-gray-400 group-hover:text-[#cf89ff] transition-all duration-300 p-1 active:scale-95 active:translate-y-0.5"
                          >
                            <svg className={`w-5 h-5 transition-all duration-300 ${isCopying ? 'text-purple-400' : 'text-current'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2В-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                  </TooltipTrigger>
                        <TooltipContent side="top" align="center" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                          <p>Скопировать номер</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Для записи на прием</p>
                  <p className="text-xs text-gray-400 mt-1">(Карина Тагировна)</p>
                  
                  <div className="w-32 h-px bg-gray-400 mt-3 mb-3"></div>
                  
                  <ScheduleDisplay 
                    orekhovoDays={['Пн', 'Вт', 'Пт', 'Сб']}
                    moscowDays={['Ср', 'Вс']}
                  />
                </div>
              </motion.div>

              {/* Расписание */}
              <motion.div 
                className="ml-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 
                  className={`mb-3 text-base font-semibold flex items-center gap-2 cursor-pointer`}
                  onClick={() => setIsScheduleExpanded(!isScheduleExpanded)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Расписание
                  <svg 
                    className={`w-4 h-4 ml-auto transition-transform duration-300 ${isScheduleExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <div className={`space-y-1 text-xs text-gray-300 ${!isScheduleExpanded ? 'hidden' : ''}`}>
                  {getCurrentDay() === 'Пн' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Пн:</span>
                      <span>11:00 - 18:00</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Пн:</span>
                      <span>11:00 - 18:00</span>
                    </div>
                  )}
                  {getCurrentDay() === 'Вт' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Вт:</span>
                      <span>10:00 - 18:00</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Вт:</span>
                      <span>10:00 - 18:00</span>
                    </div>
                  )}
                  {getCurrentDay() === 'Ср' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Ср:</span>
                      <span>15:00 - 21:00</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Ср:</span>
                      <span>15:00 - 21:00</span>
                    </div>
                  )}
                  {getCurrentDay() === 'Чт' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Чт:</span>
                      <span className={'text-gray-300'}>выходной</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Чт:</span>
                      <span className={'text-gray-300'}>выходной</span>
                    </div>
                  )}
                  {getCurrentDay() === 'Пт' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Пт:</span>
                      <span>10:00 - 19:00</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Пт:</span>
                      <span>10:00 - 19:00</span>
                    </div>
                  )}
                  {getCurrentDay() === 'Сб' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Сб:</span>
                      <span>11:00 - 17:00</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Сб:</span>
                      <span>11:00 - 17:00</span>
                    </div>
                  )}
                  {getCurrentDay() === 'Вс' ? (
                    <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                      <span>Вс:</span>
                      <span>15:00 - 21:00</span>
                    </div>
                  ) : (
                    <div className={`flex gap-4`}>
                      <span>Вс:</span>
                      <span>15:00 - 21:00</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}

          {/* Быстрое меню - только для десктопной версии */}
          {!isMobile && (
            <motion.div 
              className="ml-0 md:ml-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Быстрое меню
              </h3>
              <nav className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <a href="#" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                  <span className="relative">
                    Главная
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </span>
                </a>
                <a href="#about-doctor" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                  <span className="relative">
                    О враче
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </span>
                </a>
                <a href="#pricing" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                  <span className="relative">
                    Услуги
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </span>
                </a>
                <a href="#consultation" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                  <span className="relative">
                    Консультации
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </span>
                </a>
                <a href="#education" className="block transition-all duration-500 ease-out hover:text-purple-400 hover:translate-x-2 hover:scale-105 text-gray-300 active:scale-95 group relative">
                  <span className="relative">
                    Обучение
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </span>
                </a>
              </nav>
            </motion.div>
          )}

          {/* Контакты - только для десктопной версии */}
          {!isMobile && (
            <motion.div 
              className="ml-0 md:ml-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
            <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6В5z" />
              </svg>
              Контакты
            </h3>
            <address className="space-y-1 text-xs md:text-sm not-italic text-gray-300">
              <div className="flex items-center gap-2 group">
                <span className={`transition-all duration-300 ${isCopying ? 'text-[#c273f8]' : 'text-gray-300'} group-hover:bg-gradient-to-r group-hover:from-[#cf89ff] group-hover:to-[#d18fff] group-hover:bg-clip-text group-hover:text-transparent`}>+7 963 640 4686</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                      <button 
                        onClick={() => {
                          setIsCopying(true)
                          navigator.clipboard.writeText('+7 963 640 4686')
                          toast({
                            title: "Успешно скопировано",
                            description: "Номер телефона скопирован в буфер обмена",
                          })
                          setTimeout(() => setIsCopying(false), 1000)
                        }}
                        className="text-gray-400 group-hover:text-[#cf89ff] transition-all duration-300 p-1 active:scale-95 active:translate-y-0.5"
                      >
                        <svg className={`w-5 h-5 transition-all duration-300 ${isCopying ? 'text-purple-400' : 'text-current'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2В-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                  </TooltipTrigger>
                    <TooltipContent side="top" align="center" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                      <p>Скопировать номер</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </div>
              <p className="text-xs text-gray-400 mt-2">Для записи на прием</p>
              <p className="text-xs text-gray-400 mt-1">(Карина Тагировна)</p>
              
              <div className="w-32 h-px bg-gray-400 mt-3 mb-3"></div>
              
              <ScheduleDisplay 
                orekhovoDays={['Пн', 'Вт', 'Пт', 'Сб']}
                moscowDays={['Ср', 'Вс']}
              />
            </address>
            </motion.div>
          )}

          {/* Расписание - только для десктопной версии */}
          {!isMobile && (
            <motion.div 
              className="ml-0 md:ml-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Расписание
            </h3>
            <div className="space-y-1 text-xs md:text-sm text-gray-300">
              {getCurrentDay() === 'Пн' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Пн:</span>
                  <span>11:00 - 18:00</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Пн:</span>
                  <span>11:00 - 18:00</span>
                </div>
              )}
              {getCurrentDay() === 'Вт' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Вт:</span>
                  <span>10:00 - 18:00</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Вт:</span>
                  <span>10:00 - 18:00</span>
                </div>
              )}
              {getCurrentDay() === 'Ср' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Ср:</span>
                  <span>15:00 - 21:00</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Ср:</span>
                  <span>15:00 - 21:00</span>
                </div>
              )}
              {getCurrentDay() === 'Чт' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Чт:</span>
                  <span className={'text-gray-300'}>выходной</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Чт:</span>
                  <span className={'text-gray-300'}>выходной</span>
                </div>
              )}
              {getCurrentDay() === 'Пт' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Пт:</span>
                  <span>10:00 - 19:00</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Пт:</span>
                  <span>10:00 - 19:00</span>
                </div>
              )}
              {getCurrentDay() === 'Сб' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Сб:</span>
                  <span>11:00 - 17:00</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Сб:</span>
                  <span>11:00 - 17:00</span>
                </div>
              )}
              {getCurrentDay() === 'Вс' ? (
                <div className={`flex gap-4 bg-gradient-to-r from-[#cf89ff] to-[#d18fff] bg-clip-text text-transparent`}>
                  <span>Вс:</span>
                  <span>15:00 - 21:00</span>
                </div>
              ) : (
                <div className={`flex gap-4`}>
                  <span>Вс:</span>
                  <span>15:00 - 21:00</span>
                </div>
              )}
          </div>
            </motion.div>
          )}

          {/* Социальные сети - только для десктопной версии */}
          {!isMobile && (
            <motion.div 
              className="ml-0 md:ml-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Я в соцсетях
              </h3>
              <div className="mb-4 md:mb-6 flex items-center space-x-3 md:space-x-4">
                <a href="https://t.me/Kery_Lady" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3">
                  <Button variant="outline" size="icon" className="rounded-full border-0 bg-white text-gray-300 group-hover:bg-gradient-to-r group-hover:from-[#34b8fb] group-hover:to-[#0482c1] group-hover:scale-110 group-hover:shadow-lg transition-all duration-1000 ease-in-out group active:scale-95 active:shadow-inner cursor-pointer">
                    <img src="/telega.png" alt="Иконка Telegram для связи с врачом-косметологом" className="h-4 w-4 transition-all duration-300 ease-in-out group-hover:brightness-0 group-hover:invert group-hover:scale-110" />
                    <span className="sr-only">Telegram</span>
                    </Button>
                <span className="text-sm text-gray-300 group-hover:text-[#34b8fb] transition-colors duration-300">Telegram</span>
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Мой основной канал связи. Пишите в Telegram, если возникнут вопросы или понадобится помощь.
              </p>
            </motion.div>
          )}

            </div>


        {/* Навигационные ссылки - только для мобильной версии */}
        {isMobile && (
          <motion.div 
            className="relative ml-0 mt-6 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <nav className="flex flex-col gap-2 text-xs text-center">
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new Event('open-cookie-settings'))
                    }
                  }}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  Настройки cookies
                </button>
              </div>
              <a href="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Политика конфиденциальности
              </a>
            </nav>
          </motion.div>
        )}

        {/* Социальные сети - только для мобильной версии */}
        {isMobile && (
          <motion.div 
            className="relative ml-0 mt-6 mb-0 flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center w-full max-w-xs">
              {/* Левая линия */}
              <div className="flex-1 h-0.5 bg-gray-600 mr-4"></div>
              
              {/* Иконка Telegram (без тултипа на мобильной версии) */}
              <a href="https://t.me/Kery_Lady" target="_blank" rel="noopener noreferrer" className="group">
                <Button variant="outline" size="icon" className="rounded-full border-0 bg-white text-gray-300 transition-all duration-1000 ease-in-out group active:scale-95 active:shadow-inner cursor-pointer">
                  <img src="/telega.png" alt="Иконка Telegram для связи с врачом-косметологом" className="h-4 w-4 transition-all duration-300 ease-in-out" />
                  <span className="sr-only">Telegram</span>
                    </Button>
              </a>
              
              {/* Правая линия */}
              <div className="flex-1 h-0.5 bg-gray-600 ml-4"></div>
            </div>
          </motion.div>
        )}
        
        {/* Нижняя часть футера */}
        <motion.div 
          className={`${isMobile ? 'mt-0 pt-2' : 'mt-6 md:mt-8 pt-4 md:pt-6'} flex flex-col items-center gap-4 text-center md:flex-row md:justify-between ${!isMobile ? 'border-t' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            <div className="flex flex-col items-center md:items-start gap-2">
              {isMobile ? (
                <div className="text-xs text-gray-300 text-center">
                  <p>© 2025 Dr. Kery Lady - Дрожжина Карина Тагировна.</p>
                  <p>Все права защищены.</p>
            </div>
              ) : (
                <p className="text-xs md:text-sm text-gray-300 text-center md:text-left">
                  © 2025 Dr. Kery Lady - Дрожжина Карина Тагировна. Все права защищены.
                </p>
              )}
            {isMobile ? (
              <p className="text-xs text-gray-300 text-center">
                Разработано <a href="https://t.me/new_metas" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 relative group">
                  <span className="relative bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-200 hover:via-purple-300 hover:to-purple-400 hover:scale-105 hover:drop-shadow-lg transition-all duration-500 ease-out animated-gradient">
                    NewMeta Studio
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 group-hover:from-purple-200 group-hover:via-purple-300 group-hover:to-purple-400 transition-all duration-500 ease-out animated-gradient"></span>
                  </span>
                </a> в 2025 году.
              </p>
            ) : (
              <p className="text-xs md:text-sm text-gray-300 text-center md:text-left">
                Разработано <a href="https://t.me/new_metas" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 relative group">
                  <span className="relative bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-200 hover:via-purple-300 hover:to-purple-400 hover:scale-105 hover:drop-shadow-lg transition-all duration-500 ease-out animated-gradient">
                    NewMeta Studio
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 group-hover:from-purple-200 group-hover:via-purple-300 group-hover:to-purple-400 transition-all duration-500 ease-out animated-gradient"></span>
                  </span>
                </a> в 2025 году.
              </p>
            )}
          </div>
          {!isMobile && (
            <nav className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm justify-center md:justify-end self-start">
              <a href="/privacy" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:bg-purple-400/10 px-3 py-1.5 rounded-lg group relative overflow-hidden cursor-pointer">
                <span className="relative z-10">Политика конфиденциальности</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></span>
              </a>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new Event('open-cookie-settings'))
                  }
                }}
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:bg-purple-400/10 px-3 py-1.5 rounded-lg group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Настройки cookies</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></span>
              </button>
          </nav>
          )}
        </motion.div>
        
      </div>
    </footer>
    
      {/* Cookie Consent - вне анимированного футера */}
      {/* CookieConsent теперь монтируется глобально в layout.tsx */}
    </>
  )
}