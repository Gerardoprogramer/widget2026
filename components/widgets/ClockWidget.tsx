"use client"

import { useState, useEffect } from "react"
import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"

export function ClockWidget() {
  const [time, setTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <WidgetWrapper className="h-full" glowColor="rgba(100, 200, 255, 0.15)">
        <div className="p-4 md:p-6 h-full flex flex-col justify-between">
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">Hora Local</p>
          <div className="text-2xl md:text-3xl font-mono font-bold text-foreground tabular-nums">
            --:--
          </div>
        </div>
      </WidgetWrapper>
    )
  }

  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  const seconds = time.getSeconds()

  return (
    <WidgetWrapper className="h-full" glowColor="rgba(100, 200, 255, 0.15)">
      <div className="p-4 md:p-6 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">Hora Local</p>
          <div 
            className="w-2 h-2 rounded-full bg-primary animate-pulse"
            style={{ animationDuration: "1s" }}
          />
        </div>
        <div className="flex items-end gap-1">
          <span className="text-2xl md:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight">
            {hours}:{minutes}
          </span>
          <span className="text-sm md:text-lg font-mono text-muted-foreground mb-0.5 md:mb-1 tabular-nums">
            :{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </WidgetWrapper>
  )
}
