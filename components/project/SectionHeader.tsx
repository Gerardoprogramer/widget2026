import { Calendar } from "lucide-react"

export function SectionHeader({ icon: Icon, title, }: { icon: typeof Calendar, title: string }) {
    return (
        <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-px h-8 bg-primary" aria-hidden="true" />
            <Icon className="w-4 h-4 text-primary" />
            <h2 className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-mono">
                {title}
            </h2>
        </div>
    )
}