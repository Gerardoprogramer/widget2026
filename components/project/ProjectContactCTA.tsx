import { TranslationKey } from '@/lib/translations'
import { Mail } from "lucide-react"

interface props {
    t: (key: TranslationKey) => string
}

export const ProjectContactCTA = ({ t }: props) => {
    return (
        <section className="border-t border-border/50">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-mono mb-3 md:mb-4">
                    {t("interestedInProject")}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 md:mb-8 tracking-tight text-balance">
                    {t("workTogether")}
                </h2>
                <a
                    href="mailto:gerardoalonso.martinezmonge@gmail.com"
                    className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-primary-foreground text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
                >
                    <Mail className="w-4 h-4" />
                    {t("contactMe")}
                </a>
            </div>
        </section>
    )
}
