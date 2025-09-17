import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { useState } from "react"
import { motion } from "framer-motion"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <motion.section 
      className={cn(
        "text-white",
        "pt-8 pb-4 sm:pt-12 sm:pb-6 md:pt-16 md:pb-10 px-4 sm:px-0",
        className
      )} 
      style={{ backgroundColor: '#1a1a1a' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
              <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-9 text-center mb-6 sm:mb-8">
                    <motion.div 
                      className="flex flex-col items-center gap-6 sm:gap-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none tracking-tighter font-montserrat relative z-10"
              style={{
                background: 'linear-gradient(144deg, #eeeeee 0%, #d8d7d8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.1',
                paddingBottom: '0.1em'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-white max-w-3xl mx-auto text-center font-montserrat relative z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <span className="sm:hidden">Результат опыта, точности и заботы<br /><span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] bg-clip-text text-transparent font-semibold">о каждом пациенте</span>. Высокий стандарт,<br />который ценят мои клиенты:</span>
              <span className="hidden sm:inline"><span className="block sm:inline">Результат опыта, точности и заботы</span> <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] bg-clip-text text-transparent font-semibold">о каждом пациенте</span>.<br className="hidden sm:block" /><span className="block sm:inline">Высокий стандарт, который ценят мои клиенты:</span></span>
            </motion.p>
          </motion.div>

        <motion.div 
          className="relative flex w-full flex-col items-center justify-center overflow-hidden px-2 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s]">
            {/* Множественные копии для создания идеального эффекта бесконечности */}
            {[...Array(6)].map((_, copyIndex) => (
              <div 
                key={`copy-${copyIndex}`}
                className="flex shrink-0 justify-around [gap:var(--gap)] flex-row transition-all duration-1000 ease-in-out animate-marquee group-hover:[animation-duration:120s]"
                style={{
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`copy-${copyIndex}-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r sm:block" style={{ background: 'linear-gradient(to right, #1a1a1a, transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l sm:block" style={{ background: 'linear-gradient(to left, #1a1a1a, transparent)' }} />
        </motion.div>
      </div>
    </motion.section>
  )
} 