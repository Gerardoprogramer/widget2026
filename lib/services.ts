import { Code2, Database, Lightbulb, Blocks  } from "lucide-react"

 export const services = (t: any) => [
    {
      icon: Code2,
      title: t("serviceWebDev"),
      description: t("serviceWebDevDesc"),
      color: "rgba(58, 191, 160, 1)",
    },
    {
      icon: Blocks,
      title: t("serviceSystemDesign"),
      description: t("serviceSystemDesignDesc"),
      color: "rgba(100, 200, 255, 1)",
    },
    {
      icon: Database,
      title: t("serviceBackend"),
      description: t("serviceBackendDesc"),
      color: "rgba(255, 180, 100, 1)",
    },
    {
      icon: Lightbulb,
      title: t("serviceConsulting"),
      description: t("serviceConsultingDesc"),
      color: "rgba(240, 147, 251, 1)",
    },
  ]