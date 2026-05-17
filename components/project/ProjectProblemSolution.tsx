
import { Target, Lightbulb } from "lucide-react"
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectProblemSolution = ({ project, t }: props) => {
    return (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                            <Target className="w-4 h-4 text-destructive" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            {t("theProblem")}
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {project.problem}
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Lightbulb className="w-4 h-4 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            {t("theSolution")}
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {project.solution}
                    </p>
                </div>
            </div>
        </section>
    )
}
