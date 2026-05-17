
import { stat } from "@/lib/interfaces"
import { Code2, Coffee, Folder, Users } from "lucide-react"

export const stats = (t: any): stat[] => [
  { icon: Code2, value: "50K+", label: t("linesOfCode"), color: "#3B82F6" },
  { icon: Folder, value: "18+", label: t("projects"), color: "#10B981" },
  { icon: Coffee, value: "∞", label: t("coffees"), color: "#F59E0B" },
  { icon: Users, value: "2+", label: t("clients"), color: "#EC4899" },
]