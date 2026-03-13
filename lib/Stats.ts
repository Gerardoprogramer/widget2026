
import {stat} from "@/lib/interfaces"
import { Code2, Coffee, Folder, Users } from "lucide-react"

export const stats: stat[] = [
  { icon: Code2, value: "50K+", label: "Líneas de código", color: "#3B82F6" },
  { icon: Folder, value: "18+", label: "Proyectos", color: "#10B981" },
  { icon: Coffee, value: "∞", label: "Cafés", color: "#F59E0B" },
  { icon: Users, value: "2+", label: "Clientes", color: "#EC4899" },
]