import { Project } from '@/lib/projects'
import { TranslationKey } from '@/lib/translations'
import { ExternalLink, Github, Server } from "lucide-react"
import { ProjectLink } from '@/components/project/ProjectLink'

interface props {
    project: Project,
    t: (key: TranslationKey) => string
}

export const ProjectLinks = ({ project, t }: props) => {
    return (
        <section className="border-t border-border/50 bg-card/20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {project.demoUrl && (
                        <ProjectLink
                            href={project.demoUrl}
                            icon={ExternalLink}
                            label={t("viewLiveDemo")}
                            highlight
                        />
                    )}
                    {project.frontendUrl && (
                        <ProjectLink
                            href={project.frontendUrl}
                            icon={Github}
                            label={t("viewFrontendCode")}
                        />
                    )}
                    {project.backendUrl && (
                        <ProjectLink
                            href={project.backendUrl}
                            icon={Server}
                            label={t("viewBackendCode")}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}
