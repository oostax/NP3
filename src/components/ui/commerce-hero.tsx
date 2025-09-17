"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Search, ShoppingBasket, Calendar } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "О враче",
    image: "/vrach.png",
    href: "#about-doctor",
  },
  {
    title: "Прайс-лист",
    image: "/price.png",
    href: "#pricing",
  },
  {
    title: "Консультация",
    image: "/consult.png",
    href: "#consultation",
  },
  {
    title: "Обучение",
    image: "/obych.png",
    href: "#education",
  },
];

const navigation = [
  { name: "О враче", href: "#about-doctor" },
  { name: "Услуги", href: "#pricing" },
  { name: "Консультация", href: "#consultation" },
  { name: "Обучение", href: "#education" },
];

export function CommerceHero() {
  return (
    <div className="w-full relative mb-4">

        <motion.div 
          className="mt-0 mb-4 bg-gradient-to-b from-[#313245] to-[#55566d] rounded-3xl relative overflow-hidden w-full h-[600px]"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Фоновое изображение DRlong.png */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src="/Drmobile.png"
              alt="Доктор Дрожжина Карина Тагировна - врач-косметолог с 10+ летним опытом работы в области эстетической медицины"
              className="w-full h-full object-cover object-center sm:hidden"
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                objectFit: 'cover',
                objectPosition: 'center',
                minHeight: '100%',
                minWidth: '100%',
                zIndex: 1
              }}
            />
            <img
              src="/DRlong.png"
              alt="Доктор Дрожжина Карина Тагировна - врач-косметолог с 10+ летним опытом работы в области эстетической медицины"
              className="hidden sm:block w-full h-full object-cover object-center"
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                objectFit: 'cover',
                objectPosition: 'center',
                minHeight: '100%',
                minWidth: '100%'
              }}
            />
          </motion.div>
          <header className="flex items-center relative z-20">
            <div className="hidden md:flex w-1/2 justify-end items-center pr-5 gap-4 ml-auto mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
              >
                <Button
                  variant="secondary"
                  aria-label="Записаться"
                  className="cursor-pointer p-0 bg-transparent shadow-none hover:shadow-none transition-all duration-300 group active:scale-95"
                  onClick={() => window.open('https://mst.link/kery_lady/services?cid=iet7fpgpkg8jpj7tapgm9l3ggr', '_blank')}
                >
                  <div className="relative flex items-center justify-center bg-gradient-to-r from-[#9a13d2] to-[#6a288a] transition-all duration-300 group-hover:w-[200px] w-16 h-16 group-hover:h-12 rounded-full group-hover:px-3 px-0">
                    <Calendar className="w-[26px] h-[26px] text-white transition-all duration-300 flex-shrink-0 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0" />
                    <span className="text-white text-sm font-medium font-[Montserrat] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Записаться
                    </span>
                  </div>
                </Button>
              </motion.div>
            </div>
          </header>

          {/* Иконка записи для мобильной версии - вне секции с текстом */}
          <div className="absolute top-4 right-4 sm:hidden z-50 pointer-events-auto">
            <button
              aria-label="Записаться"
              className="cursor-pointer p-0 bg-transparent shadow-none hover:shadow-none transition-all duration-300 group active:scale-95 touch-manipulation"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open('https://mst.link/kery_lady/services?cid=iet7fpgpkg8jpj7tapgm9l3ggr', '_blank');
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open('https://mst.link/kery_lady/services?cid=iet7fpgpkg8jpj7tapgm9l3ggr', '_blank');
              }}
            >
              <motion.div 
                className="relative flex items-center justify-center bg-gradient-to-r from-[#9a13d2] to-[#6a288a] transition-all duration-300 group-hover:w-[160px] w-16 h-16 rounded-full group-hover:px-3 px-0"
                initial={{ width: 64, height: 64 }}
                animate={{ 
                  width: [64, 140, 140, 64],
                  height: [64, 44, 44, 64]
                }}
                transition={{ 
                  duration: 4,
                  times: [0, 0.1, 0.9, 1],
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <motion.div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: [1, 0, 0, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    times: [0, 0.1, 0.9, 1],
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <Calendar className="w-[22px] h-[22px] text-white flex-shrink-0" />
                </motion.div>
                <motion.span
                  className="text-white text-sm font-medium font-[Montserrat] whitespace-nowrap px-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    times: [0, 0.1, 0.9, 1],
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  Записаться
                </motion.span>
              </motion.div>
            </button>
          </div>

          <motion.section
            className="w-full px-6 pt-8 pb-16 sm:pt-48 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="sm:relative absolute bottom-8 left-4 right-4 sm:left-auto sm:right-auto sm:bottom-auto text-left pl-4 pt-0 sm:pt-0 z-10 flex flex-col sm:justify-start sm:h-auto pb-0 sm:pb-0 translate-y-[499px] translate-x-[2px] sm:translate-y-0 sm:translate-x-0">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2 sm:gap-3 leading-none">
                    <span className="leading-none text-white font-montserrat">Дрожжина</span>
                    <div className="px-3 py-0.5 rounded-full h-7 sm:px-6 sm:h-10 flex items-center justify-center self-center mt-1 sm:mt-2.5 sm:translate-y-[2px]" style={{ backgroundColor: 'rgba(182, 0, 255, 0.4)' }}>
                      <span className="font-[Montserrat] text-white text-[14px] sm:text-[20px] font-normal tracking-wider">Dr. Kery Lady</span>
                    </div>
                  </div>
                  <span 
                    className="leading-none font-montserrat"
                    style={{
                      color: '#f5f5f5'
                    }}
                  >
                    Карина Тагировна
                  </span>
                </div>
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-white max-w-2xl leading-relaxed text-left font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <span className="sm:hidden">Врач-косметолог с более чем 10-летним<br />опытом работы в области эстетической<br />медицины.</span>
                <span className="hidden sm:inline">Врач-косметолог с более чем 10-летним опытом работы в области эстетической медицины. Специализируется на инъекционных методиках, аппаратной косметологии и уходовых процедурах.</span>
              </motion.p>
            </div>
          </motion.section>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8">
          {categories.map((category, index) => (
            <div key={category.title} className="flex flex-col">
              {/* Мобильная версия - заголовок под карточкой */}
              <motion.div
                className="group relative bg-[#f9f9f9] backdrop-blur-sm rounded-3xl p-6 sm:p-8 w-full aspect-square overflow-hidden transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div 
                  className="absolute inset-0 z-20 cursor-pointer"
                  onClick={() => {
                    if (category.href.startsWith('#') && category.href !== '#') {
                      const element = document.querySelector(category.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {/* Заголовок только на десктопе */}
                  <h2 className="hidden md:block text-center text-lg sm:text-xl md:text-2xl lg:text-[clamp(1.125rem,3.25vw,1.875rem)] font-bold relative z-10 text-[#2c2f3c] my-4 sm:my-6 group-hover:text-[#250867] transition-colors duration-300">
                    {category.title}
                  </h2>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full max-w-[min(40vw,200px)] sm:max-w-[min(30vw,180px)] md:max-w-[min(25vw,160px)] lg:max-w-[min(20vw,140px)] h-auto object-contain opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10">
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-[#f9f9f9] rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#232836] group-hover:to-[#646a7e] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Заголовок под карточкой только на мобильных */}
              <h2 className="md:hidden text-center text-lg font-bold text-[#2c2f3c] mt-3 mb-2">
                {category.title}
              </h2>
            </div>
          ))}
        </div>
    </div>
  );
}
