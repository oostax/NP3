"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  mobileSrc?: string;
  alt?: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  showArrows?: boolean;
  onSlideChange?: (index: number) => void;
  colors?: Colors;
  fontSizes?: FontSizes;
  showStep3Completed?: boolean;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  showArrows = true,
  onSlideChange,
  colors = {},
  fontSizes = {},
  showStep3Completed = false,
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const onSlideChangeRef = useRef(onSlideChange);

  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  }, [onSlideChange]);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation and mobile detection
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay (stable interval, unaffected by re-renders)
  useEffect(() => {
    if (!autoplay) return;
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonialsLength;
        return next;
      });
    }, 5000);
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Notify parent after activeIndex updates (post-render)
  useEffect(() => {
    onSlideChangeRef.current?.(activeIndex);
  }, [activeIndex]);



  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % testimonialsLength;
    setActiveIndex(newIndex);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [activeIndex, testimonialsLength, onSlideChange]);
  const handlePrev = useCallback(() => {
    const newIndex = (activeIndex - 1 + testimonialsLength) % testimonialsLength;
    setActiveIndex(newIndex);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [activeIndex, testimonialsLength, onSlideChange]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
    // const zIndex = testimonialsLength - Math.abs(offset);
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className={`testimonial-grid ${activeIndex === 1 ? 'step-2' : ''}`}>
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={isMobile && testimonial.mobileSrc ? testimonial.mobileSrc : testimonial.src}
              alt={testimonial.alt || testimonial.name}
              className="testimonial-image pointer-events-none select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        
        {/* Stepper для мобильных - фиксированный под каруселью */}
        <div className="sm:hidden flex justify-center items-center py-2 mb-4">
          <div className="flex items-center">
            {testimonials.map((_, step) => {
              const isCompleted = activeIndex > step;
              const isCurrent = activeIndex === step;
              const isLast = step === testimonials.length - 1;
              const shouldShowCheckmark = isCompleted || (isLast && (activeIndex > step || showStep3Completed));
              
              return (
                <div key={step} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                    isCompleted || (isLast && showStep3Completed)
                      ? 'bg-black text-white' 
                      : isCurrent
                      ? 'bg-gray-200 text-gray-500'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {shouldShowCheckmark ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step + 1
                    )}
                  </div>
                  {step < testimonials.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 transition-colors duration-500 ${
                      activeIndex > step ? 'bg-black' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Content - независимый для мобильной версии */}
        <div className="testimonial-content">
          
          {/* Мобильная версия - с анимацией смены, но без анимации слов */}
          <div className="sm:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3
                  className="name"
                  style={{ color: colorName, fontSize: fontSizeName }}
                >
                  {activeTestimonial.name}
                </h3>
                <p
                  className="designation"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeTestimonial.designation}
                </p>
                <p
                  className="quote"
                  style={{ color: colorTestimony, fontSize: fontSizeQuote }}
                >
                  {activeTestimonial.quote}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Десктопная версия - с анимациями */}
          <div className="hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3
                  className="name"
                  style={{ color: colorName, fontSize: fontSizeName }}
                >
                  {activeTestimonial.name}
                </h3>
                <p
                  className="designation"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeTestimonial.designation}
                </p>
                <motion.p
                  className="quote"
                  style={{ color: colorTestimony, fontSize: fontSizeQuote }}
                >
                  {activeTestimonial.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: "easeInOut",
                        delay: 0.025 * i,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
          

          {showArrows && (
            <div className="arrow-buttons">
              <button
                className="arrow-button prev-button"
                onClick={handlePrev}
                style={{
                  backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Previous testimonial"
              >
                <FaArrowLeft size={28} color={colorArrowFg} />
              </button>
              <button
                className="arrow-button next-button"
                onClick={handleNext}
                style={{
                  backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Next testimonial"
              >
                <FaArrowRight size={28} color={colorArrowFg} />
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
          padding: 1rem;
          font-family: 'Montserrat', sans-serif;
        }
        .testimonial-grid {
          display: grid;
          gap: 2rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 16rem;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
          font-family: 'Montserrat', sans-serif;
          white-space: nowrap;
        }
        .designation {
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
        }
        .quote {
          line-height: 1.75;
          font-family: 'Montserrat', sans-serif;
        }

        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        .word {
          display: inline-block;
        }
        @media (max-width: 639px) {
          .testimonial-content {
            margin-top: -2rem;
            padding-bottom: 2rem;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .designation {
            margin-bottom: 1rem;
          }
          .quote {
            font-size: 16px !important;
            flex-grow: 1;
          }
          .testimonial-grid.step-2 {
            transform: translateY(-20px);
          }
        }
        @media (min-width: 640px) {
          .testimonial-container {
            padding: 1.5rem;
          }
          .testimonial-grid {
            gap: 3rem;
          }
          .image-container {
            height: 20rem;
          }
        }
        @media (min-width: 768px) {
          .testimonial-container {
            padding: 2rem;
          }
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
          .image-container {
            height: 24rem;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;