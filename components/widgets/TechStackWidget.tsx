"use client"

import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import {technologies} from "@/lib/technologie"


export function TechStackWidget() {
  return (
    <WidgetWrapper className="h-full" glowColor="rgba(58, 191, 160, 0.15)">
      <div className="p-4 md:p-6 h-full">
        <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-2 md:mb-4">Tech Stack</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium rounded-md md:rounded-lg bg-secondary/80 text-foreground border border-border/50 hover:border-primary/30 transition-colors cursor-default"
              style={{
                borderLeftColor: tech.color,
                borderLeftWidth: "2px",
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  )
}
