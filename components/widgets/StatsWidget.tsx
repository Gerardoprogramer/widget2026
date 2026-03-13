"use client"

import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import {stats} from "@/lib/Stats"


export function StatsWidget() {
  return (
    <WidgetWrapper className="h-full" glowColor="rgba(100, 150, 255, 0.1)">
      <div className="p-3 md:p-6 h-full">
        <div className="grid grid-cols-4 gap-1 md:gap-4 h-full">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center justify-center text-center"
            >
              <stat.icon 
                className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" 
                style={{ color: stat.color }}
              />
              <span className="text-base md:text-xl font-bold text-foreground">{stat.value}</span>
              <span className="text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  )
}
