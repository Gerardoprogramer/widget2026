"use client"

import { useEffect, useRef, useState } from "react"
import { ProfileWidget } from "@/components/widgets/ProfileWidget"
import { ClockWidget } from "@/components/widgets/ClockWidget"
import { GithubWidget } from "@/components/widgets/GithubWidget"
import { LinkedinWidget } from "@/components/widgets/LinkedinWidget"
import { WhatsappWidget } from "@/components/widgets/WhatsappWidget"
import { EmailWidget } from "@/components/widgets/EmailWidget"
import { TechStackWidget } from "@/components/widgets/TechStackWidget"
import { ProjectWidget } from "@/components/widgets/ProjectWidget"
import { LocationWidget } from "@/components/widgets/LocationWidget"
import { StatsWidget } from "@/components/widgets/StatsWidget"
import { CvWidget } from "@/components/widgets/CvWidget"
import { ThemeWidget } from "@/components/widgets/ThemeWidget"
import { projects } from "@/lib/projects"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll("[style*='--glow-color']")
      for (const card of cards) {
        const rect = card.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        ;(card as HTMLElement).style.setProperty("--mouse-x", `${x}%`)
        ;(card as HTMLElement).style.setProperty("--mouse-y", `${y}%`)
      }
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main 
      ref={containerRef}
      className="min-h-screen bg-background p-4 md:p-8 lg:p-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header minimalista */}
        <header className="mb-8 flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Portfolio 2026</span>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[140px]">
          {/* Perfil - Grande */}
          <div className={`col-span-2 row-span-2 md:row-span-2 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0ms' }}>
            <ProfileWidget />
          </div>
          
          {/* Reloj */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '50ms' }}>
            <ClockWidget />
          </div>
          
          {/* GitHub */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
            <GithubWidget />
          </div>
          
          {/* LinkedIn */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '150ms' }}>
            <LinkedinWidget />
          </div>
          
          {/* WhatsApp */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <WhatsappWidget />
          </div>

          {/* Email - Ancho */}
          <div className={`col-span-2 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '250ms' }}>
            <EmailWidget />
          </div>
          
          {/* Tech Stack - Ancho */}
          <div className={`col-span-2 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
            <TechStackWidget />
          </div>

          {/* Ubicación */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '350ms' }}>
            <LocationWidget />
          </div>
          
          {/* CV Download */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            <CvWidget />
          </div>
          
          {/* Theme Toggle */}
          <div className={`col-span-1 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '450ms' }}>
            <ThemeWidget />
          </div>
          
          {/* Stats - Ancho */}
          <div className={`col-span-2 md:col-span-2 row-span-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <StatsWidget />
          </div>

          {/* Proyectos */}
          <div className="col-span-2 md:col-span-4 lg:col-span-6 pt-4">
            <h2 className="text-xs text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-border" />
              Proyectos Destacados
            </h2>
          </div>
          
          {projects.map((project, index) => (
            <ProjectWidget
              key={project.title}
              {...project}
              large={index === 0}
            />
          ))}

          {/* Footer */}
          <div className="col-span-2 md:col-span-4 lg:col-span-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <p className="text-sm text-muted-foreground">
                  Diseñado y construido con pasión
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  2026 - Todos los derechos reservados
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponible para proyectos
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
