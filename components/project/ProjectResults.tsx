import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { CheckCircle2 } from "lucide-react"
import { SectionHeader } from '@/components/project/SectionHeader'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectResults = ({ project, t }: props) => {
    return (
        <section className="border-y border-border/50 bg-linear-to-br from-primary/5 to-transparent">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
                <SectionHeader icon={CheckCircle2} title={t("results")} />
                <div className="flex flex-col gap-2 md:gap-3 max-w-3xl">
                    {project.results.map((result, i) => (
                        <div
                            key={result}
                            className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card/50 border border-border/30"
                        >
                            <span className="text-xs font-mono text-primary mt-0.5 shrink-0">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-sm md:text-base text-foreground leading-relaxed">{result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
