"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"

export function ThemeWidget() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDark(false)
      document.documentElement.classList.add("light")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) {
    return (
      <WidgetWrapper className="h-full" glowColor="rgba(255, 200, 100, 0.15)">
        <div className="p-4 md:p-6 h-full flex flex-col justify-between">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-muted animate-pulse" />
            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">Tema</p>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted animate-pulse" />
        </div>
      </WidgetWrapper>
    )
  }

  return (
    <WidgetWrapper className="h-full" glowColor={isDark ? "rgba(100, 150, 255, 0.15)" : "rgba(255, 200, 100, 0.15)"}>
      <button 
        type="button"
        onClick={toggleTheme}
        className="p-4 md:p-6 h-full w-full flex flex-col justify-between text-left"
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          {isDark ? (
            <Moon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
          ) : (
            <Sun className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500" />
          )}
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">Tema</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div 
            className={`
              w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
              ${isDark 
                ? 'bg-linear-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/30' 
                : 'bg-linear-to-br from-yellow-400/20 to-orange-400/10 border border-yellow-400/30'
              }
            `}
          >
            {isDark ? (
              <Moon className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            ) : (
              <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
            )}
          </div>
          <span className="text-xs md:text-sm font-medium text-foreground">
            {isDark ? "Oscuro" : "Claro"}
          </span>
        </div>
      </button>
    </WidgetWrapper>
  )
}
