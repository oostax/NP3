"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Heart, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InfoItem {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

const infoItems: InfoItem[] = [
  {
    id: 1,
    icon: BookOpen,
    text: "Подробное обучение с практикой",
    color: "text-purple-400"
  },
  {
    id: 2,
    icon: Heart,
    text: "Бесплатные консультации для всех",
    color: "text-purple-400"
  },
  {
    id: 3,
    icon: Calendar,
    text: "Прием по предварительной записи",
    color: "text-purple-400"
  }
];

export function InfoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % infoItems.length;
        return newIndex;
      });
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Вывод информации о студии разработки при загрузке
  useEffect(() => {
    console.log('Сайт разработан студией дизайна и разработки NewMeta STUDIO: https://t.me/new_metas');
  }, []);

  const currentItem = infoItems[currentIndex];

  return (
    <div className="hidden sm:block relative h-10 mt-4 ml-4 overflow-hidden">
      <AnimatePresence mode="wait">
                 <motion.div
           key={currentItem.id}
           className="flex items-center gap-2 text-white h-10 justify-start"
           initial={{ y: "100%", opacity: 0 }}
           animate={{ y: "0%", opacity: 1 }}
           exit={{ y: "-100%", opacity: 0 }}
           transition={{
             type: "spring",
             stiffness: 300,
             damping: 30,
             duration: 0.5
           }}
         >
           <currentItem.icon className={`w-5 h-5 ${currentItem.color}`} />
           <span className="text-xs whitespace-nowrap">{currentItem.text}</span>
         </motion.div>
      </AnimatePresence>
      
      {/* Индикаторы */}
      <div className="flex justify-center gap-1 mt-2">
        {infoItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-purple-400 scale-125" 
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}