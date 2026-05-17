import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { useTranslation } from "@/hooks/useTranslation";
import { experiences } from "@/lib/experiences";
import { Briefcase } from "lucide-react";

export const ExperienceWidget = () => {
    const t = useTranslation();
    const experiencesList = experiences(t);

    return (
        <WidgetWrapper className="h-full" glowColor="rgba(255, 180, 100, 0.15)">
            <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                        <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
                            {t("experienceTitle")}
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-2 md:gap-3 relative">
                    <div className="absolute left-1.5 top-1.5 bottom-1.5 w-px bg-border" aria-hidden="true" />

                    {experiencesList.map((exp, i) => (
                        <div key={exp.role} className="flex items-start gap-3 md:gap-4 relative">
                            <div className="relative z-10 mt-1">
                                <div
                                    className={`w-2.5 h-2.5 rounded-full border-2 ${i === 0 ? "bg-primary border-primary" : "bg-background border-muted-foreground/40"}`}
                                />
                                {i === 0 && (
                                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-40" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[9px] md:text-[10px] text-muted-foreground font-mono uppercase tracking-wider mb-0.5">
                                    {exp.year}
                                </p>
                                <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">
                                    {exp.role}
                                </p>
                                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                                    {exp.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WidgetWrapper>
    )
}
