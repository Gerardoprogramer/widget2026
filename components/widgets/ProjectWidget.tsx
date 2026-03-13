"use client"

import Link from "next/link"
import Image from "next/image"
import { WidgetWrapper } from "@/components/widgets/WidgetWrapper"
import { ArrowUpRight, Github, ExternalLink, Server } from "lucide-react"
import type { Project } from "@/lib/interfaces"

interface ProjectWidgetProps extends Project {
  large?: boolean
}

export function ProjectWidget({ 
  slug,
  title, 
  description, 
  tags, 
  image, 
  glowColor,
  demoUrl,
  frontendUrl,
  backendUrl,
  large = false 
}: ProjectWidgetProps) {
  return (
    <WidgetWrapper 
      className={large ? "col-span-2 row-span-2" : "col-span-2 md:col-span-2 lg:col-span-2 row-span-2"}
      glowColor={glowColor}
    >
      <div className="p-4 md:p-6 h-full flex flex-col">
        {/* Preview clickeable */}
        <Link 
          href={`/projects/${slug}`}
          className="w-full aspect-video rounded-xl md:rounded-2xl mb-3 md:mb-4 overflow-hidden relative group/preview bg-secondary"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover/preview:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card/90 via-card/20 to-transparent" />
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-[10px] md:text-xs text-white/90 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center gap-1">
            Ver detalles <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Link href={`/projects/${slug}`}>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2 hover:text-primary transition-colors">{title}</h3>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2 md:mb-3">{description}</p>
            <div className="flex flex-wrap gap-1 md:gap-1.5">
              {tags.slice(0, 4).map((tag) => (
                <span 
                  key={tag}
                  className="px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] uppercase tracking-wider rounded-md bg-secondary text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border/50 flex-wrap">
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                Demo
              </a>
            )}
            {frontendUrl && (
              <a 
                href={frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3 h-3 md:w-3.5 md:h-3.5" />
                Front
              </a>
            )}
            {backendUrl && (
              <a 
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Server className="w-3 h-3 md:w-3.5 md:h-3.5" />
                Back
              </a>
            )}
            <Link 
              href={`/projects/${slug}`}
              className="ml-auto"
            >
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  )
}
