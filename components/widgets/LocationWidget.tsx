"use client"

import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { MapPin } from "lucide-react"

export function LocationWidget() {
  return (
    <WidgetWrapper className="h-full" glowColor="rgba(255, 200, 100, 0.15)">
      <div className="p-4 md:p-6 h-full flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <circle cx="50" cy="50" r="3" className="fill-primary animate-ping" style={{ animationDuration: "2s" }} />
            <circle cx="50" cy="50" r="2" className="fill-primary" />
          </svg>
        </div>
        
        <div className="flex items-center gap-1.5 md:gap-2 relative z-10">
          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">Ubicación</p>
        </div>
        
        <div className="relative z-10">
          <p className="text-base md:text-lg font-semibold text-foreground">Liberia</p>
          <p className="text-[10px] md:text-xs text-muted-foreground">Costa Rica</p>
        </div>
      </div>
    </WidgetWrapper>
  )
}
