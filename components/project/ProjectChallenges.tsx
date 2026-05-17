import { AlertTriangle } from "lucide-react"
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { SectionHeader } from '@/components/project/SectionHeader'


interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectChallenges = ({ project, t }: props) => {
    return (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <SectionHeader icon={AlertTriangle} title={t("challenges")} />
            <div className="flex flex-col gap-4 md:gap-6">
                {project.challenges.map((challenge, i) => (
                    <div
                        key={challenge.title}
                        className="p-5 md:p-8 rounded-2xl bg-card border border-border/50"
                    >
                        <div className="flex items-start gap-3 md:gap-4 mb-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                <span className="text-sm md:text-base font-bold text-amber-500 font-mono">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="text-base md:text-xl font-semibold text-foreground pt-1 md:pt-1.5">
                                {challenge.title}
                            </h3>
                        </div>

                        <div className="md:pl-14 grid md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <p className="text-[10px] md:text-xs text-amber-500/80 uppercase tracking-widest font-mono mb-1.5 md:mb-2">
                                    Problema
                                </p>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    {challenge.problem}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-primary uppercase tracking-widest font-mono mb-1.5 md:mb-2">
                                    Solución
                                </p>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    {challenge.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
