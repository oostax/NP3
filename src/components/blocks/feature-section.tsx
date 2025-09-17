"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-6 md:gap-8"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
                             <motion.div
                 className={cn(
                   "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                   index === currentFeature
                     ? "bg-black border-black text-white scale-110"
                     : "bg-muted border-muted-foreground",
                 )}
               >
                {index <= currentFeature ? (
                  <span className="text-lg font-bold">✓</span>
                ) : (
                  <span className="text-lg font-semibold">{index + 1}</span>
                )}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {feature.title || feature.step}
                </h3>
                <p className="text-sm md:text-lg text-muted-foreground">
                  {feature.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}




