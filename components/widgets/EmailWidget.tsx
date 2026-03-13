"use client"

import { useState } from "react"
import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { Mail, Copy, Check } from "lucide-react"

export function EmailWidget() {
    const [copied, setCopied] = useState(false)
    const email = "gerardoalonso.martinezmonge@gmail.com"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            console.error("No se pudo copiar el email")
        }
    }

    return (
        <WidgetWrapper className="h-full" glowColor="rgba(255, 100, 100, 0.15)">
            <button
                type="button"
                onClick={handleCopy}
                className="p-4 md:p-6 h-full w-full flex items-center justify-between text-left"
            >
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-linear-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-0.5 md:mb-1">
                            Email
                        </p>

                        <p
                            className="text-xs md:text-sm font-mono text-foreground truncate"
                            title={email}
                        >
                            {email}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                    {copied ? (
                        <>
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-green-500">Copiado</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            <span className="text-xs">Copiar</span>
                        </>
                    )}
                </div>
            </button>
        </WidgetWrapper>
    )
}
