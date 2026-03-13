"use client"

import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { MessageCircle, ArrowUpRight } from "lucide-react"

export function WhatsappWidget() {
  return (
    <WidgetWrapper 
      className="h-full" 
      glowColor="rgba(37, 211, 102, 0.2)"
      href="https://wa.me/50689462689"
    >
      <div className="p-4 md:p-6 h-full flex flex-col justify-between bg-linear-to-br from-[#25D366]/10 to-transparent">
        <div className="flex items-center justify-between">
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        
        <div>
          <p className="text-xs md:text-sm font-medium text-foreground mb-0.5 md:mb-1">WhatsApp</p>
          <p className="text-[10px] md:text-xs text-muted-foreground">Escríbeme</p>
        </div>
      </div>
    </WidgetWrapper>
  )
}
