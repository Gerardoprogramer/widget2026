import { LucideIcon } from "lucide-react"

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  glowColor: string
  demoUrl?: string
  frontendUrl?: string
  backendUrl?: string
  features: string[]
  challenges: string[]
  year: string
  role: string
}

export interface techno{
    name: string
    color: string
}

export interface stat{
    icon: LucideIcon
    value: string 
    label: string 
    color: string
}