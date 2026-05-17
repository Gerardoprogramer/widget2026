import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import Link from "next/link"
import { ArrowLeft, ExternalLink, } from "lucide-react"


interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectTopbar = ({ project, t }: props) => {

    const statusLabel = {
        live: t("statusLive"),
        development: t("statusDev"),
        archived: t("statusArchived"),
    }[project.status]

    const statusColor = {
        live: "bg-green-500",
        development: "bg-amber-500",
        archived: "bg-muted-foreground",
    }[project.status]

    return (
        <div className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
            <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    <span className="hidden md:inline">{t("backToHome")}</span>
                </Link>

                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full ${statusColor} animate-pulse`} />
                    <span className="uppercase tracking-widest">{statusLabel}</span>
                </div>

                <div className="flex items-center gap-1.5 md:gap-2">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                        >
                            <ExternalLink className="w-3 h-3" />
                            {t("demo")}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
