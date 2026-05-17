import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/lib/services"

export const ServicesWidget = () => {
    const t = useTranslation();
    const servicesList = services(t);

    return (
        <WidgetWrapper className="h-full" glowColor="rgba(58, 191, 160, 0.15)">
            <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
                        {t("servicesTitle")}
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] text-primary font-mono uppercase tracking-wider">04</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1">
                    {servicesList.map((service) => (
                        <div
                            key={service.title}
                            className="group/service p-2.5 md:p-3 rounded-lg md:rounded-xl bg-secondary/40 border border-border/30 hover:border-border transition-colors flex flex-col gap-1 md:gap-1.5"
                        >
                            <service.icon
                                className="w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform group-hover/service:scale-110"
                                style={{ color: service.color }}
                            />
                            <p className="text-[11px] md:text-xs font-semibold text-foreground leading-tight">
                                {service.title}
                            </p>
                            <p className="text-[9px] md:text-[10px] text-muted-foreground leading-tight line-clamp-2">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </WidgetWrapper>
    )
}
