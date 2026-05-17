
import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { Code2 } from "lucide-react"
import { SectionHeader } from '@/components/project/SectionHeader'
import { TechGroup } from '@/components/project/TechGroup'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectTechStack = ({ project, t }: props) => {
    return (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <SectionHeader icon={Code2} title={t("techStackDetail")} />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {project.techStack.frontend && (
                    <TechGroup label="Frontend" items={project.techStack.frontend} color="rgba(58, 191, 160, 0.8)" />
                )}
                {project.techStack.backend && (
                    <TechGroup label="Backend" items={project.techStack.backend} color="rgba(100, 200, 255, 0.8)" />
                )}
                {project.techStack.database && (
                    <TechGroup label="Database" items={project.techStack.database} color="rgba(255, 180, 100, 0.8)" />
                )}
                {project.techStack.devops && (
                    <TechGroup label="DevOps" items={project.techStack.devops} color="rgba(240, 147, 251, 0.8)" />
                )}
                {project.techStack.other && (
                    <TechGroup label="Other" items={project.techStack.other} color="rgba(180, 130, 255, 0.8)" />
                )}
            </div>
        </section>
    )
}
