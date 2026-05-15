import { useLanguageStore } from "@/store/language-store"
import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { Languages } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useCallback } from "react"

export const LanguageWidget = () => {

    const language = useLanguageStore(
        (state) => state.language
    )

    const setLanguage = useLanguageStore(
        (state) => state.setLanguage
    )

    const t = useTranslation()

    const toggleLanguage = useCallback(() => {
        setLanguage(language === "es" ? "en" : "es")
    }, [language, setLanguage])

    return (
        <WidgetWrapper className="h-full" glowColor="rgba(180, 130, 255, 0.15)">
            <button
                type="button"
                onClick={toggleLanguage}
                className="p-4 md:p-6 h-full w-full flex flex-col justify-between text-left"
                aria-label="Toggle language"
            >
                <div className="flex items-center justify-between">
                    <Languages className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        {language}
                    </span>
                </div>

                <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-0.5 md:mb-1">
                        {t("language")}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span
                            className={`text-xs md:text-sm font-medium transition-colors ${language === "es" ? "text-foreground" : "text-muted-foreground/50"}`}
                        >
                            ES
                        </span>
                        <span className="text-muted-foreground/30">/</span>
                        <span
                            className={`text-xs md:text-sm font-medium transition-colors ${language === "en" ? "text-foreground" : "text-muted-foreground/50"}`}
                        >
                            EN
                        </span>
                    </div>
                </div>
            </button>
        </WidgetWrapper>
    )
}
