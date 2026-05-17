import { ArrowUpRight, Github } from "lucide-react"

export function ProjectLink({ href, icon: Icon, label, highlight = false, }: {
    href: string, icon: typeof Github, label: string, highlight?: boolean
}) {

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between gap-4 p-4 md:p-5 rounded-2xl border transition-all hover:-translate-y-0.5 ${highlight
                ? "bg-primary text-primary-foreground border-primary hover:opacity-90"
                : "bg-card border-border/50 text-foreground hover:border-primary/30"
                }`}
        >
            <div className="flex items-center gap-3 min-w-0">
                <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span className="text-sm md:text-base font-medium truncate">{label}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
        </a>
    )
}
