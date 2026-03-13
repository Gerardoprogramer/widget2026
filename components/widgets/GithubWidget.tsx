"use client"

import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { Github, GitFork, Star, ArrowUpRight } from "lucide-react"
import { useGithub } from "@/hooks/useGithub";

export function GithubWidget() {
    const github = useGithub("Gerardoprogramer");
    console.log(github)

    return (
        <WidgetWrapper
            className="h-full"
            glowColor="rgba(255, 255, 255, 0.1)"
            href="https://github.com/Gerardoprogramer"
        >
            <div className="p-4 md:p-6 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <Github className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                    <p className="text-xs md:text-sm font-medium text-foreground mb-0.5 md:mb-1">@{github?.login}</p>
                    <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Star className="w-2.5 h-2.5 md:w-3 md:h-3" /> {github?.followers}
                        </span>
                        <span className="flex items-center gap-1">
                            <GitFork className="w-2.5 h-2.5 md:w-3 md:h-3" /> {github?.public_repos}
                        </span>
                    </div>
                </div>
            </div>
        </WidgetWrapper>
    )
}
