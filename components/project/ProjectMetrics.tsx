
import { Activity } from "lucide-react"
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectMetrics = ({ project, t }: props) => {
    return (
        <section className="border-b border-border/50 bg-card/30">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                    <Activity className="w-4 h-4 text-primary" />
                    <h2 className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-mono">
                        {t("overview")}
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {project.metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="p-4 md:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                        >
                            <p className="text-2xl md:text-4xl font-bold text-foreground mb-1 tracking-tight">
                                {metric.value}
                            </p>
                            <p className="text-xs md:text-sm font-medium text-foreground/80">{metric.label}</p>
                            {metric.description && (
                                <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                                    {metric.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
