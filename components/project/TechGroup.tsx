export function TechGroup({ label, items, color, }: { label: string, items: string[], color: string }) {
    return (
        <div className="p-5 md:p-6 rounded-2xl bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                    {label}
                </p>
            </div>
            <div className="flex flex-col gap-1.5 md:gap-2">
                {items.map((item) => (
                    <span key={item} className="text-xs md:text-sm text-foreground">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}