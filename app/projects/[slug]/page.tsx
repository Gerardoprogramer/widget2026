import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Server, Calendar, User, Sparkles, AlertTriangle } from "lucide-react"
import { projects, getProjectBySlug } from "@/lib/projects"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header con imagen */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-background" />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-16 md:-mt-20 relative z-10">
        {/* Title card */}
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border p-6 md:p-10 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">{project.title}</h1>
              <p className="text-muted-foreground text-sm md:text-base">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 text-yellow-600 text-sm font-medium border border-yellow-500/30">
                  <AlertTriangle className="w-4 h-4" />
                  En desarrollo
                </div>
              )}
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{project.role}</span>
            </div>
          </div>

          {/* GitHub links */}
          <div className="flex flex-wrap gap-3">
            {project.frontendUrl && (
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" />
                Frontend Repository
              </a>
            )}
            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm hover:bg-secondary/80 transition-colors"
              >
                <Server className="w-4 h-4" />
                Backend Repository
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border p-6 md:p-10 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Sobre el proyecto</h2>
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Tech stack */}
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border p-6 md:p-10 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border p-6 md:p-10 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Características principales
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border p-6 md:p-10 mb-12">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Retos técnicos
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center pb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}
