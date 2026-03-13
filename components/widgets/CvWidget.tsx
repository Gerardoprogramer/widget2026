"use client"

import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { FileDown, FileText } from "lucide-react"

export function CvWidget() {
  return (
    <WidgetWrapper className="h-full" glowColor="rgba(200, 150, 255, 0.15)">
      <a 
        href="/cv.pdf"
        download="Tu_Nombre_CV.pdf"
        className="p-4 md:p-6 h-full flex flex-col justify-between bg-linear-to-br from-purple-500/10 to-pink-500/5 group"
      >
        <div className="flex items-center justify-between">
          <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
          <FileDown className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-purple-400 group-hover:translate-y-0.5 transition-all" />
        </div>
        
        <div>
          <p className="text-xs md:text-sm font-medium text-foreground mb-0.5 md:mb-1">Curriculum</p>
          <p className="text-[10px] md:text-xs text-muted-foreground">Descargar PDF</p>
        </div>
      </a>
    </WidgetWrapper>
  )
}
