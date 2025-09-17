"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type TooltipLinkProps = {
  href: string
  children: React.ReactNode
  tooltip: string
  className?: string
}

export function TooltipLink({ href, children, tooltip, className }: TooltipLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={href} className={className}>{children}</a>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
          <span>{tooltip}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}


