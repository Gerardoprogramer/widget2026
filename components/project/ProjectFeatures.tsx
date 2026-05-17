
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { SectionHeader } from '@/components/project/SectionHeader'
import { CheckCircle2, Sparkles } from 'lucide-react'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectFeatures = ({ project, t }: props) => {
    return (
        <section className="border-y border-border/50 bg-card/20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
                <SectionHeader icon={Sparkles} title={t("keyFeatures")} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {project.features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group p-5 md:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-0.5"
                        >
                            <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                            <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 md:mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
