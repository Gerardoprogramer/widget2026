import { Calendar } from "lucide-react"

export function MetaItem({ icon: Icon, label, value, }: { icon: typeof Calendar, label: string, value: string }) {
    return (
        <div className="flex items-start gap-2 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-secondary/60 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
            </div>
            <div className="min-w-0">
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-mono mb-0.5">
                    {label}
                </p>
                <p className="text-xs md:text-sm font-semibold text-foreground truncate">{value}</p>
            </div>
        </div>
    )
}