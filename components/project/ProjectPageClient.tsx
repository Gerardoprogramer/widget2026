"use client"

import { notFound } from "next/navigation"
import { getNextProject, getPreviousProject, getProjectBySlug } from "@/lib/projects"
import { useTranslation } from "@/hooks/useTranslation"
import { ProjectTopbar } from "./ProjectTopbar"
import { ProjectHero } from "./ProjectHero"
import { ProjectMetaBar } from "./ProjectMetaBar"
import { ProjectMetrics } from "./ProjectMetrics"
import { ProjectProblemSolution } from "./ProjectProblemSolution"
import { ProjectArchitecture } from "./ProjectArchitecture"
import { ProjectTechStack } from "./ProjectTechStack"
import { ProjectFeatures } from "./ProjectFeatures"
import { ProjectChallenges } from "./ProjectChallenges"
import { ProjectResults } from "./ProjectResults"
import { ProjectLessons } from "./ProjectLessons"
import { ProjectLinks } from "./ProjectLinks"
import { ProjectContactCTA } from "./ProjectContactCTA"
import { ProjectNavigation } from "./ProjectNavigation"


type Props = {
  slug: string;
};

export default function ProjectPageClient({ slug }: Props) {

  const t = useTranslation();
  const project = getProjectBySlug(slug, t);
  const nextProject = getNextProject(slug, t)
  const prevProject = getPreviousProject(slug, t)

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background">
      <ProjectTopbar project={project} t={t} />

      <ProjectHero project={project} />

      <ProjectMetaBar project={project} t={t} />

      <ProjectMetrics project={project} t={t} />

      <ProjectProblemSolution project={project} t={t} />

      <ProjectArchitecture project={project} t={t} />

      <ProjectTechStack project={project} t={t} />

      <ProjectFeatures project={project} t={t} />

      <ProjectChallenges project={project} t={t} />

      <ProjectResults project={project} t={t} />

      <ProjectLessons project={project} t={t} />

      {(project.demoUrl || project.frontendUrl || project.backendUrl) && (
        <ProjectLinks project={project} t={t} />
      )}

      <ProjectContactCTA t={t} />

      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} t={t} />
    </main>
  )
}
