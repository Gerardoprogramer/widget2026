
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { SectionHeader } from './SectionHeader'
import { Layers } from 'lucide-react'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectArchitecture = ({ project, t }: props) => {
    return (
        <section className="border-y border-border/50 bg-card/20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
                <SectionHeader icon={Layers} title={t("architecture")} />
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {project.architecture.map((item, i) => (
                        <div
                            key={item.title}
                            className="relative p-5 md:p-6 rounded-2xl bg-card border border-border/50"
                        >
                            <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[10px] font-mono text-muted-foreground/40">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3 pr-8">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
