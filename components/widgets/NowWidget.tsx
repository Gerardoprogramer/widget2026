import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { useTranslation } from "@/hooks/useTranslation";
import { Zap } from "lucide-react";

export const NowWidget = () => {
    const t = useTranslation();

    return (
        <WidgetWrapper className="h-full" glowColor="rgba(58, 191, 160, 0.2)">
            <div className="p-4 md:p-6 h-full flex flex-col justify-between bg-linear-to-br from-primary/5 to-transparent">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" fill="currentColor" />
                            <div className="absolute inset-0 animate-ping opacity-50">
                                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" fill="currentColor" />
                            </div>
                        </div>
                        <p className="text-[10px] md:text-xs text-primary uppercase tracking-widest font-mono">
                            {t("nowWorking")}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-1">
                        {t("currentlyBuilding")}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-foreground leading-tight text-balance">
                        {t("currentProject")}
                    </p>
                </div>
            </div>
        </WidgetWrapper>
    )
}
