"use client"
import Image from "next/image"
import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { useGithub } from "@/hooks/useGithub"

export function ProfileWidget() {
    const github = useGithub("Gerardoprogramer")

    return (
        <WidgetWrapper className="h-full">
            <div className="p-5 md:p-8 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                        <div className="relative">
                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden border border-primary/20">

                                {github?.avatar_url && (
                                    <Image
                                        src={github.avatar_url}
                                        alt="Github avatar"
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                )}

                            </div>

                            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 md:border-4 border-card" />
                        </div>
                        <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                            <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                            <span className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2 tracking-tight">
                        Gerardo Martinez
                    </h1>
                    <p className="text-primary font-mono text-xs md:text-sm mb-2 md:mb-4">
                        Full Stack Developer
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-sm hidden md:block">
                        Construyo experiencias digitales que combinan diseño excepcional con código limpio.
                    </p>
                </div>
            </div>
        </WidgetWrapper>
    )
}
