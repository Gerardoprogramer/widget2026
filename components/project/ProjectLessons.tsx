import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { Lightbulb } from "lucide-react"
import { SectionHeader } from '@/components/project/SectionHeader'


interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectLessons = ({ project, t }: props) => {
    return (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <SectionHeader icon={Lightbulb} title={t("lessonsLearned")} />
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {project.lessons.map((lesson) => (
                    <div
                        key={lesson}
                        className="p-5 md:p-6 rounded-2xl bg-card border border-border/50"
                    >
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                            {'"' + lesson + '"'}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
