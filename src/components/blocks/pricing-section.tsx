"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import ButtonColorful from "@/components/ui/button-colorful"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { Search, Syringe, Sparkles, Zap, Clock, ExternalLink, Tag, Pill, SearchX } from "lucide-react"
import { cn } from "@/lib/utils"
import { FeaturedIcon } from "@/components/ui/featured-icons"
import { 
  InjectionIcon, 
  BotoxIcon, 
  ContourIcon, 
  LipIcon, 
  ThreadIcon, 
  MesotherapyIcon, 
  ComplexIcon, 
  ConsultationIcon, 
  EducationIcon, 
  AllServicesIcon,
  GlazIcon,
  SlimIcon
} from "@/components/ui/service-icons"


import { services, categories, Service } from "@/data/services"
import { BGPattern } from "@/components/bg-pattern"

// CSS для переливающегося градиента
const gradientAnimation = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
  }
  
  .hover-gradient-animate:hover {
    animation: gradient-x 1.5s ease infinite;
  }
`;

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
}

interface PricingSectionProps {
  className?: string;
}

function PricingSection({ className }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState("Все услуги")
  const [showAll, setShowAll] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(6)
  const [isTabChanging, setIsTabChanging] = useState(false)
  const pricingRef = useRef(null);
  const isPricingInView = useInView(pricingRef, { 
    once: true, 
    margin: "-100px" 
  });

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    
    setIsTabChanging(true);
    setActiveTab(tab);
    
    // Сброс анимации через небольшую задержку
    setTimeout(() => {
      setIsTabChanging(false);
    }, 100);
  };
  
  // Определяем количество услуг для показа в зависимости от категории
  const getInitialItemsToShow = (category: string) => {
    if (category === "Ботокс") return 7;
    return 6;
  };

  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Сброс состояния при смене категории или поиске
  useEffect(() => {
    setShowAll(false);
    setItemsToShow(getInitialItemsToShow(activeTab));
  }, [activeTab, searchQuery]);

  // Разделение категорий на две строки
  const firstRowCategories = ["Все услуги", "Инъекционные методики", "Ботокс", "Контурная пластика", "Увеличение губ", "Мезотерапия"]
  const secondRowCategories = ["Комплексные процедуры", "Нитевые методики", "Эстетика лица", "Slim & Wellness", "Консультации"]

  // Фильтрация услуг по категории и поиску
  const filteredServices = services.filter(service => {
    const matchesCategory = activeTab === "Все услуги" || service.category === activeTab;
      const matchesSearch = searchQuery === "" || 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (service.russianNames && service.russianNames.some(russianName => 
      russianName.toLowerCase().includes(searchQuery.toLowerCase())
    ));
    
    return matchesCategory && matchesSearch;
  });

  // Показываем только первые itemsToShow элементов, если не показаны все
  const displayedServices = filteredServices.slice(0, itemsToShow);
  
  // Определяем, нужно ли показывать кнопку "Свернуть" (только для "Все услуги")
  const shouldShowCollapseButton = activeTab === "Все услуги" && showAll;

  const handleShowMore = () => {
    if (itemsToShow >= filteredServices.length) {
      setShowAll(false);
      setItemsToShow(getInitialItemsToShow(activeTab));
    } else {
      setIsLoadingMore(true);
      setTimeout(() => {
        setItemsToShow(Math.min(itemsToShow + 20, filteredServices.length));
        if (itemsToShow + 20 >= filteredServices.length) {
          setShowAll(true);
        }
        setIsLoadingMore(false);
      }, 100);
    }
  };

  const handleShowLess = () => {
    setShowAll(false);
    setItemsToShow(getInitialItemsToShow(activeTab));
    
    // Прокрутка к началу раздела прайс лист
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonStyles = {
    default: cn(
      "h-12 bg-white",
      "hover:bg-zinc-50",
      "text-zinc-900",
      "border border-zinc-200",
      "hover:border-zinc-300",
      "shadow-sm hover:shadow-md",
      "text-sm font-medium",
    ),
    highlight: cn(
      "h-12 bg-zinc-900",
      "hover:bg-zinc-800",
      "text-white",
      "shadow-[0_1px_15px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_1px_20px_rgba(0,0,0,0.15)]",
      "font-semibold text-base",
    ),
  }

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-zinc-900",
    "text-white",
    "border-none shadow-lg",
  )

  // Функция для выбора иконки в зависимости от категории
  const getServiceIcon = (category: string) => {
    switch (category) {
      case "Инъекционные методики":
        return <FeaturedIcon color="brand" icon={InjectionIcon} theme="light" size="lg" category="Инъекционные методики" />
      case "Ботокс":
        return <FeaturedIcon color="brand" icon={BotoxIcon} theme="light" size="lg" category="Ботокс" />
      case "Контурная пластика":
        return <FeaturedIcon color="brand" icon={ContourIcon} theme="light" size="lg" category="Контурная пластика" />
      case "Увеличение губ":
        return <FeaturedIcon color="brand" icon={LipIcon} theme="light" size="lg" category="Увеличение губ" />
      case "Комплексные процедуры":
        return <FeaturedIcon color="brand" icon={ComplexIcon} theme="light" size="lg" category="Комплексные процедуры" />
      case "Нитевые методики":
        return <FeaturedIcon color="brand" icon={ThreadIcon} theme="light" size="lg" category="Нитевые методики" />
      case "Мезотерапия":
        return <FeaturedIcon color="brand" icon={MesotherapyIcon} theme="light" size="lg" category="Мезотерапия" />
      case "Эстетика лица":
        return <FeaturedIcon color="brand" icon={GlazIcon} theme="light" size="lg" category="Эстетика лица" />
      case "Slim & Wellness":
        return <FeaturedIcon color="brand" icon={SlimIcon} theme="light" size="lg" category="Slim & Wellness" />
      case "Консультации":
        return <FeaturedIcon color="brand" icon={ConsultationIcon} theme="light" size="lg" category="Консультации" />
      default:
        return <FeaturedIcon color="brand" icon={AllServicesIcon} theme="light" size="lg" category="Все услуги" />
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientAnimation }} />
      <motion.section
        ref={pricingRef}
        id="pricing"
        className={cn(
          "relative bg-background text-foreground font-montserrat",
          "py-12 px-4 md:py-16 lg:py-20",
          "overflow-hidden",
          className,
        )}
        initial={{ opacity: 0, y: 50 }}
        animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
       <div className="absolute inset-0 w-full h-full z-0">
         <BGPattern 
           variant="dots" 
           mask="fade-center" 
           size={25} 
           fill="#6b7280" 
           className="opacity-60 w-full h-full"
         />
       </div>
      <div className="w-full max-w-[90rem] mx-auto relative z-10">
                                   <div className="flex flex-col gap-8 mb-12">
                      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-none tracking-tighter font-montserrat text-center">
              Прайс-лист услуг
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center font-montserrat">
              <span className="sm:hidden">Все услуги и их стоимость собраны в одном месте<br />для Вашего удобства. Вы выбираете качество,<br />я гарантирую результат.</span>
              <span className="hidden sm:inline">Все услуги и их стоимость собраны в одном месте для Вашего удобства.<br />Вы выбираете качество, я гарантирую результат.</span>
            </p>
            
                        {/* Поиск - между подзаголовком и плашкой */}
            <div className="flex justify-center my-4 relative z-20">
              <div className="flex flex-row gap-3 items-start">
                <div className="w-14 h-14 bg-gradient-to-r from-[#8b2bb3] via-[#bf3ff1] to-[#db83fc] bg-[length:200%_200%] hover:bg-right-top rounded-full flex items-center justify-center shadow-lg flex-shrink-0 animate-gradient-x">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col gap-1 min-h-[60px] items-start pt-1">
                  <div className="p-0.5 bg-gradient-to-r from-[#8b2bb3] via-[#bf3ff1] to-[#db83fc] bg-[length:200%_200%] hover:bg-right-top rounded-xl animate-gradient-x">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Введите название услуги..."
                      className="px-4 py-3 w-[300px] sm:w-[400px] md:w-[500px] bg-white rounded-lg focus:outline-none focus:ring-0 focus:border-transparent font-montserrat shadow-sm placeholder:text-purple-400 text-purple-600"
                    />
                  </div>
                  {searchQuery && filteredServices.length > 0 && (
                                          <div className="text-sm text-gray-500 font-montserrat text-left">
                      Найдено: {filteredServices.length} услуг
                    </div>
                  )}
                </div>
              </div>
            </div>
            

            
                                                                             {/* Десктопные вкладки - первая строка */}
               <div className="flex items-center justify-center gap-3 flex-wrap -mb-6 min-h-[60px]">
                {firstRowCategories.map((tab, index) => (
                  <motion.div 
                    key={tab} 
                    className={cn(
                      "rounded-full border shadow-sm p-1 transition-colors duration-200",
                      activeTab === tab
                        ? hoveredTab === tab
                          ? "bg-black border-black"
                          : "bg-zinc-900 border-zinc-900"
                        : hoveredTab === tab
                          ? "bg-zinc-100 border-zinc-300"
                          : "bg-white border-zinc-200"
                    )}
                    onMouseEnter={() => setHoveredTab(tab)}
                    onMouseLeave={() => setHoveredTab(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.button
                      onClick={() => handleTabChange(tab)}
                      className={cn(
                        "px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap flex-shrink-0 relative overflow-hidden",
                        activeTab === tab
                          ? "text-white"
                          : "text-zinc-600 hover:text-zinc-900",
                      )}
                    >
                      <span className="relative z-10">{tab}</span>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
             
                          {/* Десктопные вкладки - вторая строка */}
              <div className="flex items-center justify-center gap-3 flex-wrap min-h-[60px]">
                {secondRowCategories.map((tab, index) => (
                  <motion.div 
                    key={tab} 
                    className={cn(
                      "rounded-full border shadow-sm p-1 transition-colors duration-200",
                      activeTab === tab
                        ? hoveredTab === tab
                          ? "bg-black border-black"
                          : "bg-zinc-900 border-zinc-900"
                        : hoveredTab === tab
                          ? "bg-zinc-100 border-zinc-300"
                          : "bg-white border-zinc-200"
                    )}
                    onMouseEnter={() => setHoveredTab(tab)}
                    onMouseLeave={() => setHoveredTab(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.button
                      onClick={() => handleTabChange(tab)}
                      className={cn(
                        "px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap flex-shrink-0 relative overflow-hidden",
                        activeTab === tab
                          ? "text-white"
                          : "text-zinc-600 hover:text-zinc-900",
                      )}
                    >
                      <span className="relative z-10">{tab}</span>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
        </div>

        {/* Сообщение, когда поиск не дает результатов */}
        {searchQuery && filteredServices.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 col-span-full">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <SearchX className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-mонтserrat">
              Ничего не удалось найти
            </h3>
            {(() => {
              const suggestions = services
                .map(service => {
                  const query = searchQuery.toLowerCase();
                  const serviceName = service.name.toLowerCase();
                  const serviceCategory = service.category.toLowerCase();
                  const russianNames = service.russianNames || [];
                  
                  let score = 0;
                  
                  // 1. Точные совпадения (начинается с) - высший приоритет
                  if (serviceName.startsWith(query) || serviceCategory.startsWith(query) || 
                      russianNames.some(rn => rn.startsWith(query))) {
                    score += 100;
                  }
                  
                  // 2. Содержит запрос полностью
                  if (serviceName.includes(query) || serviceCategory.includes(query) || 
                      russianNames.some(rn => rn.includes(query))) {
                    score += 80;
                  }
                  
                  // 3. Поиск по началу слов (для опечаток типа "консультфыв" -> "консультации")
                  if (query.length > 4) {
                    const queryStart = query.slice(0, 5); // Берем первые 5 букв
                    if (serviceName.startsWith(queryStart) || serviceCategory.startsWith(queryStart) ||
                        russianNames.some(rn => rn.startsWith(queryStart))) {
                      score += 70;
                    }
                  }
                  
                  // 4. Поиск по основным частям слова (для опечаток)
                  if (query.length > 5) {
                    const queryMain = query.slice(0, Math.floor(query.length * 0.8)); // 80% от слова
                    if (serviceName.startsWith(queryMain) || serviceCategory.startsWith(queryMain) ||
                        russianNames.some(rn => rn.startsWith(queryMain))) {
                      score += 50;
                    }
                  }
                  
                  // 5. Поиск по словам (для составных названий)
                  const queryWords = query.split(' ').filter(word => word.length > 2);
                  const serviceWords = [...serviceName.split(' '), ...serviceCategory.split(' '), ...russianNames].filter(word => word.length > 2);
                  
                  if (queryWords.some(queryWord => 
                    serviceWords.some(serviceWord => serviceWord.includes(queryWord))
                  )) {
                    score += 30;
                  }
                  
                  // 6. Поиск по частям слов (минимальный приоритет)
                  if (query.length > 3) {
                    const queryParts = [];
                    for (let i = 0; i < query.length - 2; i++) {
                      queryParts.push(query.slice(i, i + 3));
                    }
                    
                    if (queryParts.some(part => 
                      serviceName.includes(part) || serviceCategory.includes(part) ||
                      russianNames.some(rn => rn.includes(part))
                    )) {
                      score += 10;
                    }
                  }
                  
                  return { service, score };
                })
                .filter(item => item.score > 0)
                .sort((a, b) => b.score - a.score)
                .slice(0, 1)
                .map(item => item.service);
                
              return suggestions.length > 0 ? (
                <div className="text-center">
                  <p className="text-gray-600 font-montserrat">
                    Возможно, Вы имели в виду: {" "}
                    <button 
                      onClick={() => {
                        const service = suggestions[0];
                        handleTabChange(service.category);
                        setSearchQuery("");
                      }}
                      className="text-purple-600 hover:text-purple-800 cursor-pointer font-medium font-montserrat"
                    >
                      {suggestions[0].name}
                    </button>
                  </p>
                </div>
              ) : null;
            })()}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {!isTabChanging && displayedServices.map((service, index) => (
              <motion.div
                key={`${activeTab}-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: isLoadingMore ? 0.2 : 0.3, 
                  delay: isLoadingMore ? index * 0.02 : index * 0.05,
                  ease: "easeOut"
                }}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                "bg-white",
                "border border-zinc-200 shadow-md",
                "hover:translate-y-0 hover:shadow-lg",
              )}
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    {getServiceIcon(service.category)}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {service.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    <p className="text-sm text-zinc-600">
                      Длительность: {service.duration}
                    </p>
                  </div>
                  {service.discount && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {service.discount}
                    </span>
                  )}
                </div>
                
                {service.ampoules && (
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className="w-4 h-4 text-zinc-500" />
                    <p className="text-sm text-zinc-600">
                      {service.ampoules}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  {service.oldPrice && service.discount ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-zinc-900">
                          {service.price}
                        </p>
                        <p className="text-sm text-zinc-400 line-through">
                          {service.oldPrice}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-lg font-bold text-zinc-900">
                      {service.price}
                    </p>
                  )}
                </div>
                
                {service.category === "Комплексные процедуры" && (
                  <div className="mb-4">
                    <p className="text-xs text-zinc-500 italic">
                      Зоны ботокса и препараты подбираются индивидуально, итоговая сумма может варьироваться.
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 pt-0 mt-auto">
                <ButtonColorful
                  onClick={() => window.open('https://mst.link/kery_lady/services?cid=iet7fpgpkg8jpj7tapgm9l3ggr', '_blank')}
                  label="Записаться на прием"
                  className="w-full h-12 text-base font-semibold"
                />
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Кнопка "Показать больше/меньше" */}
                  {filteredServices.length > getInitialItemsToShow(activeTab) && (
          <div className={`flex justify-center col-span-full ${!showAll ? 'mt-8' : activeTab === "Все услуги" ? 'mt-8' : 'mt-0'}`}>
            {!showAll ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center w-full"
              >
                <motion.button
                  onClick={handleShowMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-[length:200%_200%] hover:bg-right-top text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-montserrat premium-shine cursor-pointer"
                  )}
                >
                  Показать еще
                </motion.button>
                <div className="text-center mt-3 text-sm text-gray-600 font-montserrat w-full">
                  Показано: {itemsToShow} из {filteredServices.length} услуг
                </div>
              </motion.div>
            ) : (
              activeTab === "Все услуги" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <motion.button
                    onClick={handleShowLess}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "inline-block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-[length:200%_200%] hover:bg-right-top text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-montserrat premium-shine cursor-pointer"
                    )}
                  >
                    Свернуть
                  </motion.button>
                  <div className="text-center mt-3 text-sm text-gray-600 font-montserrat w-full">
                    Показаны все услуги
                  </div>
                </motion.div>
              ) : null
            )}
          </div>
        )}

          {/* Сообщение, когда поиск не дает результатов */}
          {/* Removed searchQuery && filteredServices.length === 0 */}
        </div>
      </div>
    </motion.section>
    </>
  )
}

export { PricingSection }






