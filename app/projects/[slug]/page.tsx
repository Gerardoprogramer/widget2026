import { use } from "react"
import { getProjectBySlug } from "@/lib/projects"
import ProjectPageClient from "@/components/project/ProjectPageClient"
import { cookies } from "next/headers"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params, }: { params: { slug: string } }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const language = (cookieStore.get("language")?.value || "es") as "es" | "en";
  const t = (key: keyof typeof translations.es) =>
    translations[language][key];
  const project = getProjectBySlug(slug, t)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  return <ProjectPageClient slug={slug} />
}