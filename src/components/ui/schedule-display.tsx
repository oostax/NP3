"use client"

import { useState, useEffect, useRef } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ScheduleDisplayProps {
  orekhovoDays: string[]
  moscowDays: string[]
}

export function ScheduleDisplay({ orekhovoDays, moscowDays }: ScheduleDisplayProps) {
  const [currentDay, setCurrentDay] = useState<string>('')
  const [isMobile, setIsMobile] = useState(false)
  const [openedDay, setOpenedDay] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const today = new Date().getDay()
    setCurrentDay(days[today])
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close tooltip on outside click (mobile only)
  useEffect(() => {
    if (!isMobile) return
    if (!openedDay) return
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpenedDay(null)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [isMobile, openedDay])

  const isCurrentDay = (day: string) => day === currentDay

  const handleMobileClick = (day: string) => {
    if (!isMobile) return
    if (!isCurrentDay(day)) return
    setOpenedDay(day)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setOpenedDay(null), 2500)
  }

  const renderDays = (days: string[]) => {
    return days.map((day, index) => (
      <span key={index}>
        {isCurrentDay(day) ? (
          <TooltipProvider>
            <Tooltip open={isMobile ? openedDay === day : undefined}>
              <TooltipTrigger asChild>
                <span
                  className="bg-gradient-to-r from-[#c273f8] to-[#c171f8] bg-clip-text text-transparent font-semibold cursor-pointer"
                  onClick={() => handleMobileClick(day)}
                >
                  {day}
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black border border-gray-200">
                <div>Сегодняшний день</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          day
        )}
        {index < days.length - 1 && ', '}
      </span>
    ))
  }

  return (
    <div ref={containerRef}>
      <span className="text-xs mt-2 block"><span className="text-white">Прием в Орехово-Зуево:</span></span>
      <span className="text-xs mt-1 text-gray-400 block">
        {renderDays(orekhovoDays)}.
      </span>
      <span className="text-xs mt-2 block"><span className="text-white">Прием в Москве:</span></span>
      <span className="text-xs mt-1 text-gray-400 block">
        {renderDays(moscowDays)}.
      </span>
    </div>
  )
}
