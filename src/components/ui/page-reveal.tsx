"use client"

import * as React from "react"
import { motion } from "framer-motion"

type PageRevealProps = {
  children: React.ReactNode
  className?: string
}

export function PageReveal({ children, className }: PageRevealProps) {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768)
    handle()
    window.addEventListener("resize", handle)
    window.addEventListener("orientationchange", handle)
    return () => {
      window.removeEventListener("resize", handle)
      window.removeEventListener("orientationchange", handle)
    }
  }, [])

  if (isMobile === null) {
    return <div className={className}>{children}</div>
  }

  if (isMobile) {
    // On mobile: no initial load animation
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

 
