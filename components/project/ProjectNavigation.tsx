import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from "next/link"

interface props {
    prevProject: Project,
    nextProject: Project,
    t: (key: TranslationKey) => string
}

export const ProjectNavigation = ({ prevProject, nextProject, t }: props) => {
    return (
        <section className="border-t border-border/50">
            <div className="max-w-6xl mx-auto grid grid-cols-2 divide-x divide-border/50">
                <Link
                    href={`/projects/${prevProject.slug}`}
                    className="group p-6 md:p-10 flex items-center gap-3 md:gap-6 hover:bg-card/50 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground transition-transform group-hover:-translate-x-1 shrink-0" />
                    <div className="text-left min-w-0">
                        <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-mono mb-1">
                            {t("previousProject")}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-foreground truncate">
                            {prevProject.title}
                        </p>
                    </div>
                </Link>
                <Link
                    href={`/projects/${nextProject.slug}`}
                    className="group p-6 md:p-10 flex items-center justify-end gap-3 md:gap-6 hover:bg-card/50 transition-colors"
                >
                    <div className="text-right min-w-0">
                        <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-mono mb-1">
                            {t("nextProject")}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-foreground truncate">
                            {nextProject.title}
                        </p>
                    </div>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground transition-transform group-hover:translate-x-1 shrink-0" />
                </Link>
            </div>
        </section>
    )
}
