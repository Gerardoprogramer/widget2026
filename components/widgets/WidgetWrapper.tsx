"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface WidgetWrapperProps {
  children: ReactNode
  className?: string
  glowColor?: string
  href?: string
}

export function WidgetWrapper({ children, className, glowColor = "rgba(58, 191, 160, 0.15)", href }: WidgetWrapperProps) {
  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card border border-border/50",
        "transition-all duration-500 ease-out",
        "hover:border-primary/30 hover:shadow-2xl",
        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        className
      )}
      style={{
        ["--glow-color" as string]: glowColor,
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    )
  }

  return content
}
