"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock, User, Heart, Stethoscope, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BGPattern } from "@/components/bg-pattern";
import { motion, useInView } from "framer-motion";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: Clock,
    title: "10+ лет опыта в сфере",
    subtitle: "",
    description:
      "Опыт, который позволяет видеть гармонию там, где другие ищут стандартные решения.",
    items: [
      "Премиальные стандарты и современные методики",
    ],
    image:
      "/times.png",
  },
  {
    icon: User,
    title: "Индивидуальный подход к каждому клиенту",
    subtitle: "",
    description:
      "Персональное сопровождение на каждом этапе — от первой консультации до после-процедурного контроля.",
    items: [
      "Персональное сопровождение",
    ],
    image:
      "/individuals.png",
  },
  {
    icon: Leaf,
    title: "Моя философия - естественная красота",
    subtitle: "",
    description:
      "Утончённый подход к Вашей анатомии и образу, сочетающий медицинскую точность и эстетическое чутьё.",
    items: [
      "Без компромиссов: безопасность, точность, естественность",
    ],
    image:
      "/krasota.png",
  },
  {
    icon: Sparkles,
    title: "50+ видов процедур",
    subtitle: "",
    description:
      "Коллекция из более чем пятидесяти процедур: авторские и клинически проверенные решения под Ваши задачи.",
    items: [
      "Широкий спектр опций для точечной работы с лицом и телом",
    ],
    image:
      "/procedures.png",
  },
];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
  title = "Ruixen UI Release Notes",
  description = "Меня зовут Карина Дрожжина. Для меня косметология — это не просто медицина, а <span className=\"font-bold\" style={{background: 'linear-gradient(144deg, #151d2e 0%, #101828 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>искусство</span> подчеркивать индивидуальность человека. В своей работе я стремлюсь к тому, чтобы каждый пациент чувствовал гармонию с собой и своим отражением в зеркале.",
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [activeRow, setActiveRow] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create stable setters for refs inside map
  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length || !mounted) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      
      // Compute distance of each sentinel to viewport center
      const centerY = window.innerHeight / 3;
      
      if (isMobile) {
        // On mobile: each card opens individually
        let bestIndex = 0;
        let bestDist = Infinity;
        
        for (let i = 0; i < sentinelRefs.current.length; i++) {
          const node = sentinelRefs.current[i];
          if (!node) continue;
          
          const rect = node.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          const dist = Math.abs(mid - centerY);
          
          if (dist < bestDist) {
            bestDist = dist;
            bestIndex = i;
          }
        }
        
        if (bestIndex !== activeRow) setActiveRow(bestIndex);
      } else {
        // On desktop: group by pairs (original behavior)
        let bestRow = 0;
        let bestDist = Infinity;
        
        // Group sentinels by rows (pairs)
        for (let row = 0; row < Math.ceil(sentinelRefs.current.length / 2); row++) {
          const firstIndex = row * 2;
          const secondIndex = firstIndex + 1;
          
          const firstNode = sentinelRefs.current[firstIndex];
          const secondNode = sentinelRefs.current[secondIndex];
          
          if (!firstNode) continue;
          
          // Calculate average position of the row
          const firstRect = firstNode.getBoundingClientRect();
          const firstMid = firstRect.top + firstRect.height / 2;
          
          let rowMid = firstMid;
          if (secondNode) {
            const secondRect = secondNode.getBoundingClientRect();
            const secondMid = secondRect.top + secondRect.height / 2;
            rowMid = (firstMid + secondMid) / 2;
          }
          
          const dist = Math.abs(rowMid - centerY);
          if (dist < bestDist) {
            bestDist = dist;
            bestRow = row;
          }
        }
        
        if (bestRow !== activeRow) setActiveRow(bestRow);
      }
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeRow, isMobile, mounted]);

  // Определение мобильного устройства и монтирования
  useEffect(() => {
    setMounted(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Optional: ensure the first row is active on mount
  useEffect(() => {
    setActiveRow(0);
  }, []);

  // Reset active row when mobile state changes
  useEffect(() => {
    if (mounted) {
      setActiveRow(0);
    }
  }, [isMobile, mounted]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="about-doctor" className="py-12 md:py-20 relative overflow-hidden w-full">
      <motion.div 
        ref={ref}
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Фотография, заголовок и описание */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg flex-shrink-0 order-1 md:order-1">
            <img src="/DR.png" alt="Дрожжина Карина Тагировна" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left order-2 md:order-2">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold leading-none tracking-tighter font-montserrat" style={{background: 'linear-gradient(144deg, #151d2e 0%, #101828 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: '1.1', paddingBottom: '0.1em'}}>
              {title}
            </h1>
            <p className="mb-6 text-base text-muted-foreground md:text-lg font-montserrat text-center md:text-left">
              Меня зовут Карина Дрожжина. Для меня косметология — это <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] bg-clip-text text-transparent font-semibold">не просто медицина, а искусство</span> подчеркивать индивидуальность человека. В своей работе я стремлюсь к тому, чтобы каждый пациент чувствовал гармонию с собой и своим отражением в зеркале.
            </p>
          </div>
        </div>

        {/* Горизонтальный разделитель */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Сетка с блоками */}
        <div className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {entries.map((entry, index) => {
              // Use state for mobile detection to avoid hydration mismatch
              const isActive = mounted ? (isMobile ? index === activeRow : Math.floor(index / 2) === activeRow) : false;

              return (
                <div
                  key={index}
                  className="relative flex flex-col gap-4"
                  ref={(el) => setItemRef(el, index)}
                  aria-current={isActive ? "true" : "false"}
                >
                  {/* Header with icon and title */}
                                     <div className="flex items-center gap-3 mb-4">
                    <div className={`relative p-2 rounded-lg bg-muted ${
                      isActive ? "text-white" : "text-muted-foreground"
                    } transition-colors duration-700 ease-in-out`}>
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-b from-[#1a1a1a] to-[#222222] transition-opacity duration-700 ease-in-out ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`} />
                      <entry.icon className="h-4 w-4 relative z-10" />
                    </div>
                                         <div className="flex flex-col">
                       <span className="text-sm font-medium font-montserrat">
                         {entry.title}
                       </span>
                       <span className="text-xs text-muted-foreground font-montserrat">
                         {entry.subtitle}
                       </span>
                     </div>
                  </div>

                  {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                  <div
                    ref={(el) => setSentinelRef(el, index)}
                    aria-hidden
                    className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                  />

                  {/* Content */}
                  <article
                    className={
                      "flex flex-col rounded-2xl border p-3 transition-all duration-700 ease-in-out " +
                      (isActive
                        ? "border-gray-200 bg-white shadow-lg"
                        : "border-gray-200 bg-white")
                    }
                  >
                    {entry.image && (
                      <img
                        src={entry.image}
                        alt={`${entry.title} - профессиональная косметологическая процедура`}
                        className="mb-4 w-full h-72 rounded-lg object-cover"
                        loading="lazy"
                        draggable={false}
                        style={{
                          pointerEvents: 'none',
                          userSelect: 'none',
                          WebkitUserSelect: 'none'
                        }}
                      />
                    )}
                    <div className="space-y-4">
                      {/* Header with improved typography */}
                      <div className="space-y-2">
                                                 <h2
                           className={
                             "text-md font-medium leading-tight tracking-tight md:text-lg transition-colors duration-700 ease-in-out font-montserrat " +
                             (isActive ? "text-foreground" : "text-foreground/70")
                           }
                         >
                           {entry.title}
                         </h2>
                        
                        {/* Improved description with better spacing */}
                                                 <p
                           className={
                             "text-xs leading-relaxed md:text-sm transition-all duration-700 ease-in-out font-montserrat " +
                             (isActive 
                               ? "text-muted-foreground line-clamp-none" 
                               : "text-muted-foreground/80 line-clamp-2")
                           }
                         >
                           {entry.description}
                         </p>
                      </div>

                      {/* Enhanced expandable content */}
                                             <div
                         aria-hidden={!isActive}
                         className={
                           "grid transition-all duration-700 ease-in-out " +
                           (isActive 
                             ? "grid-rows-[1fr] opacity-100" 
                             : "grid-rows-[0fr] opacity-0")
                         }
                       >
                        <div className="overflow-hidden">
                          <div className="space-y-4 pt-2">
                            {entry.items && entry.items.length > 0 && (
                              <div className="rounded-lg border border-gray-800 bg-gradient-to-b from-[#1a1a1a] to-[#222222] p-4 text-center">
                                <div className="text-sm text-white font-montserrat leading-relaxed">
                                  {entry.items[0]}
                                </div>
                              </div>
                            )}

                            {entry.button && (
                              <div className="flex justify-end">
                                                                 <Button 
                                   variant="default" 
                                   size="sm"
                                   className="group hover:bg-primary hover:text-primary-foreground font-normal transition-all duration-200 font-montserrat" 
                                   asChild
                                 >
                                  <a href={entry.button.url} target="_blank" rel="noreferrer">
                                    {entry.button.text} 
                                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
