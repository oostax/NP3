"use client"

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // Настройки для максимально плавного скролла
    const smoothScrollSettings = () => {
      // Устанавливаем плавный скролл для всех элементов
      document.documentElement.style.scrollBehavior = 'smooth'
      document.body.style.scrollBehavior = 'smooth'
      
      // Настройки для колесика мыши
      let ticking = false
      let lastScrollY = window.scrollY
      
      const updateScroll = () => {
        if (ticking) return
        
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDelta = currentScrollY - lastScrollY
          
          // Плавное перемещение с учетом скорости скролла
          if (Math.abs(scrollDelta) > 1) {
            window.scrollTo({
              top: currentScrollY,
              behavior: 'smooth'
            })
          }
          
          lastScrollY = currentScrollY
          ticking = false
        })
        
        ticking = true
      }
      
      // Обработчик скролла с throttling
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll)
          ticking = true
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
    
    // Применяем настройки
    const cleanup = smoothScrollSettings()
    
    return cleanup
  }, [])
  
  return null
}
