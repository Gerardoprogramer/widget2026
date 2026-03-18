import type { Project } from "./interfaces"

export const projects: Project[] = [
  {
    slug: "trendora-ecommerce",
    title: "Trendora E-Commerce Platform",
    description: "Plataforma de e-commerce completa para venta de ropa con panel de administración, autenticación por roles y arquitectura modular.",
    longDescription: "Trendora es una plataforma de comercio electrónico full-stack desarrollada con React y NestJS. Incluye autenticación basada en JWT con control de roles, catálogo de productos con paginación y filtros, panel administrativo para gestión de productos, subida de archivos, y arquitectura modular escalable. El frontend utiliza TanStack Query para manejo eficiente de datos, Zustand para estado global y Tailwind + shadcn/ui para una interfaz moderna. El backend está construido con NestJS siguiendo buenas prácticas de arquitectura limpia, usando DTOs, Guards, Decorators personalizados y PostgreSQL como base de datos.",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Tailwind"],
    image: "/projects/trendo.png",
    glowColor: "rgba(102, 126, 234, 0.2)",
    demoUrl: "https://trendoragm.netlify.app/",
    frontendUrl: "https://github.com/Gerardoprogramer/Trendora",
    backendUrl: "https://github.com/Gerardoprogramer/Trendora-Backend",
    features: [
      "Autenticación con JWT y sistema de roles (USER, ADMIN, SUPER_ADMIN)",
      "Catálogo de productos con paginación y filtros",
      "Panel de administración para gestión de productos",
      "Subida y manejo de imágenes de productos",
      "Arquitectura modular escalable con NestJS",
      "Estado global con Zustand y data fetching con TanStack Query",
      "Rutas protegidas y control de acceso basado en roles",
      "Documentación automática de API con Swagger"
    ],
    challenges: [
      "Diseñar una arquitectura modular escalable separando dominios en frontend y backend",
      "Implementar autenticación segura con JWT, Guards y decorators personalizados",
      "Optimizar manejo de estado y cacheo de datos con TanStack Query",
      "Mantener sincronización entre filtros de UI y parámetros de URL para navegación reproducible"
    ],
    year: "2025",
    role: "Full Stack Developer"
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    description: "Sistema de gestión de biblioteca con préstamos, reservas, pagos con Stripe y control de roles.",
    longDescription: "Library Management System es una plataforma full-stack desarrollada con Spring Boot y Next.js que permite administrar bibliotecas modernas con control de préstamos, reservas, pagos y usuarios. El backend implementa autenticación stateless con JWT utilizando Spring Security y una arquitectura por capas con Spring Data JPA. Incluye integración con Stripe para pagos de suscripciones y multas, notificaciones por correo con plantillas Thymeleaf y tareas programadas para automatización. El frontend está siendo desarrollado con Next.js utilizando TanStack Query para manejo de datos, Axios para comunicación con la API, Zod para validación y shadcn/ui para la interfaz. El sistema separa claramente permisos entre usuarios y administradores y está diseñado siguiendo buenas prácticas de arquitectura y seguridad.",
    tags: ["Next.js", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "Stripe"],
    image: "/projects/library-hero.jpg",
    glowColor: "rgba(240, 147, 251, 0.2)",
    demoUrl: "https://obsidian-delta-kohl.vercel.app",
    frontendUrl: "https://github.com/Gerardoprogramer/library-management-system-next",
    backendUrl: "https://github.com/Gerardoprogramer/Library-Management-System",
    features: [
      "Autenticación stateless con JWT y Spring Security",
      "Control de acceso basado en roles (USER / ADMIN)",
      "Gestión completa de libros con validación de ISBN",
      "Sistema de préstamos, reservas y seguimiento de estado",
      "Integración con Stripe para pagos de multas y suscripciones",
      "Wishlist personal para usuarios",
      "Notificaciones por correo con plantillas Thymeleaf",
      "Arquitectura modular y segura para aplicaciones empresariales"
    ],
    challenges: [
      "Diseñar un modelo de dominio consistente para préstamos, reservas y multas",
      "Implementar integración segura con Stripe usando webhooks",
      "Construir autenticación JWT completamente stateless en Spring Security",
      "Diseñar comunicación eficiente entre frontend Next.js y backend REST"
    ],
    year: "2026",
    role: "Full Stack Developer"
  },
  {
    "slug": "retail-management-system",
    "title": "Retail Management Platform (MiniSuper)",
    "description": "Sistema completo de gestión para retail con POS, control de inventario en tiempo real, gestión de proveedores y analítica de ventas.",
    "longDescription": "Retail Management Platform es una aplicación full-stack diseñada para digitalizar la operación completa de un mini supermercado o tienda retail. El sistema integra un punto de venta (POS), control de inventario en tiempo real, gestión de proveedores y órdenes de compra, así como análisis de ventas para apoyar la toma de decisiones. La arquitectura está diseñada como un monolito modular con principios de Domain-Driven Design, permitiendo escalar funcionalidades y soportar múltiples sucursales. Incluye herramientas para auditoría de caja, historial de precios, seguimiento de pérdidas y análisis de comportamiento de ventas.",
    "tags": [
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Docker",
      "Redis"
    ],
    "image": "/projects/erp.png",
    "glowColor": "rgba(79, 172, 254, 0.2)",
    "demoUrl": "",
    "frontendUrl": "",
    "backendUrl": "",
    "features": [
      "Sistema POS para registro de ventas en tiempo real",
      "Escaneo de códigos de barras para identificación rápida de productos",
      "Control de inventario con historial completo de movimientos",
      "Gestión de proveedores y generación de órdenes de compra",
      "Historial de precios y seguimiento de variaciones",
      "Control financiero de caja con auditoría de apertura y cierre",
      "Análisis de ventas por día, semana y últimos 30 días",
      "Registro de pérdidas, daños o productos expirados",
      "Panel de reportes para análisis de desempeño del negocio",
      "Arquitectura preparada para múltiples sucursales"
    ],
    "challenges": [
      "Diseñar un modelo de dominio capaz de manejar ventas, inventario, proveedores y finanzas de forma consistente",
      "Mantener sincronización de inventario en tiempo real durante múltiples transacciones POS",
      "Construir una arquitectura modular escalable para futuras funcionalidades",
      "Optimizar consultas y reportes analíticos sobre grandes volúmenes de ventas"
    ],
    "year": "2026",
    "role": "Full Stack Developer"
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
