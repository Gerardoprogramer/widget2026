import { Project } from '@/lib/projects'
import Image from "next/image"

interface props {
    project: Project
}

export const ProjectHero = ({ project }: props) => {
    return (
        <section className="relative">
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background" />
                <div className="absolute inset-0 bg-linear-to-r from-background/40 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-end">
                <div className="max-w-6xl mx-auto w-full px-4 md:px-8 pb-8 md:pb-16">
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-[10px] md:text-xs rounded-full bg-background/60 backdrop-blur-sm border border-border/50 text-foreground font-mono uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 md:mb-4 tracking-tight text-balance">
                        {project.title}
                    </h1>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
                        {project.tagline}
                    </p>
                </div>
            </div>
        </section>
    )
}
