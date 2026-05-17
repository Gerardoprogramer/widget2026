
import { Calendar, User, Clock, Briefcase } from "lucide-react"
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { MetaItem } from "./MetaItem"



interface props {
    project: Project,
    t: (key: TranslationKey) => string
}


export const ProjectMetaBar = ({ project, t }: props) => {
    return (
        <section className="border-b border-border/50">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    <MetaItem icon={Calendar} label={t("year")} value={project.year} />
                    <MetaItem icon={Clock} label={t("duration")} value={project.duration} />
                    <MetaItem icon={User} label={t("roleLabel")} value={project.role} />
                    <MetaItem icon={Briefcase} label={t("typeLabel")} value={project.type} />
                </div>
            </div>
        </section>
    )
}


