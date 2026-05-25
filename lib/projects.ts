export interface ProjectMetric {
  label: string
  value: string
  description?: string
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectChallenge {
  title: string
  problem: string
  solution: string
}

export interface ProjectArchitecture {
  title: string
  description: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  gallery?: string[]
  glowColor: string

  // Meta
  year: string
  duration: string
  role: string
  type: string
  status: "live" | "development" | "archived"

  // Links
  demoUrl?: string
  frontendUrl?: string
  backendUrl?: string

  // Story
  problem: string
  solution: string

  // Quick metrics
  metrics: ProjectMetric[]

  // Tech grouped
  techStack: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    devops?: string[]
    other?: string[]
  }

  // Tags (for cards)
  tags: string[]

  // Detailed sections
  architecture: ProjectArchitecture[]
  features: ProjectFeature[]
  challenges: ProjectChallenge[]
  results: string[]
  lessons: string[]
}

export const projects = (t: any): Project[] => [
  {
    slug: t("obsidianLibrarySlug"),
    title: t("obsidianLibraryTitle"),
    tagline: t("obsidianLibraryTagline"),
    description: t("obsidianLibraryDescription"),
    image: "/projects/ObsidianLib.png",
    glowColor: "rgba(102, 126, 234, 0.2)",

    year: "2026",
    duration: t("obsidianLibraryDuration"),
    role: t("obsidianLibraryRole"),
    type: t("obsidianLibraryType"),
    status: "live",

    demoUrl: "https://obsidian-delta-kohl.vercel.app",
    frontendUrl: "https://github.com/Gerardoprogramer/library-management-system-next",
    backendUrl: "https://github.com/Gerardoprogramer/Library-Management-System",

    problem: t("obsidianLibraryProblem"),
    solution: t("obsidianLibrarySolution"),

    metrics: [
      { label: t("obsidianLibraryMetricsEndpointsLabel"), value: "69", description: t("obsidianLibraryMetricsEndpointsDescription") },
      { label: t("obsidianLibraryMetricsAuthLabel"), value: "JWT", description: t("obsidianLibraryMetricsAuthDescription") },
      { label: t("obsidianLibraryMetricsPaymentsLabel"), value: "Stripe", description: t("obsidianLibraryMetricsPaymentsDescription") },
      { label: t("obsidianLibraryMetricsPaginationLabel"), value: "PageResponse", description: t("obsidianLibraryMetricsPaginationDescription") },
    ],

    tags: ["Next.js", "Stripe", "PostgreSQL"],

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "TanStack Query",
        "Zod",
      ],

      backend: [
        "Spring Boot",
        "Java",
        "Spring Security",
        "JWT",
        "Refresh Token",
        "Thymeleaf",
      ],

      database: [
        "PostgreSQL",
      ],

      devops: [
        "Docker",
        "Vercel",
      ],

      other: [
        "Stripe",
        "Webhook",
        "HTTP-only Cookies",
        "REST API",
      ]
    },

    architecture: [
      {
        title: t("obsidianLibraryArchitectureLayeredTitle"),
        description: t("obsidianLibraryArchitectureLayeredDescription"),
      },
      {
        title: t("obsidianLibraryArchitectureSecurityTitle"),
        description: t("obsidianLibraryArchitectureSecurityDescription"),
      },
      {
        title: t("obsidianLibraryArchitectureCommunicationTitle"),
        description: t("obsidianLibraryArchitectureCommunicationDescription"),
      },
    ],

    features: [
      { title: t("obsidianLibraryFeatureCatalogTitle"), description: t("obsidianLibraryFeatureCatalogDescription") },
      { title: t("obsidianLibraryFeatureLoansTitle"), description: t("obsidianLibraryFeatureLoansDescription") },
      { title: t("obsidianLibraryFeatureSubscriptionsTitle"), description: t("obsidianLibraryFeatureSubscriptionsDescription") },
      { title: t("obsidianLibraryFeaturePaymentsTitle"), description: t("obsidianLibraryFeaturePaymentsDescription") },
      { title: t("obsidianLibraryFeatureWishlistTitle"), description: t("obsidianLibraryFeatureWishlistDescription") },
      { title: t("obsidianLibraryFeatureReviewsTitle"), description: t("obsidianLibraryFeatureReviewsDescription") },
    ],

    challenges: [
      {
        title: t("obsidianLibraryChallengePaymentsTitle"),
        problem: t("obsidianLibraryChallengePaymentsProblem"),
        solution: t("obsidianLibraryChallengePaymentsSolution"),
      },
      {
        title: t("obsidianLibraryChallengeAuthTitle"),
        problem: t("obsidianLibraryChallengeAuthProblem"),
        solution: t("obsidianLibraryChallengeAuthSolution"),
      },
      {
        title: t("obsidianLibraryChallengePaginationTitle"),
        problem: t("obsidianLibraryChallengePaginationProblem"),
        solution: t("obsidianLibraryChallengePaginationSolution"),
      },
    ],

    results: [
      t("obsidianLibraryResult1"),
      t("obsidianLibraryResult2"),
      t("obsidianLibraryResult3"),
      t("obsidianLibraryResult4"),
    ],

    lessons: [
      t("obsidianLibraryLesson1"),
      t("obsidianLibraryLesson2"),
      t("obsidianLibraryLesson3"),
      t("obsidianLibraryLesson4"),
    ],
  },
  {
    slug: t("laCentralSlug"),
    title: t("laCentralTitle"),
    tagline: t("laCentralTagline"),
    description: t("laCentralDescription"),
    image: "/projects/ERPcentral.png",
    glowColor: "rgba(16, 185, 129, 0.2)",

    year: "2026",
    duration: t("laCentralDuration"),
    role: t("laCentralRole"),
    type: t("laCentralType"),
    status: "live",

    demoUrl: "",
    frontendUrl: "",
    backendUrl: "",

    problem: t("laCentralProblem"),
    solution: t("laCentralSolution"),

    metrics: [
      {
        label: t("laCentralMetricsModulesLabel"),
        value: "6",
        description: t("laCentralMetricsModulesDescription"),
      },

      {
        label: t("laCentralMetricsEndpointsLabel"),
        value: "31",
        description: t("laCentralMetricsEndpointsDescription"),
      },

      {
        label: t("laCentralMetricsArchitectureLabel"),
        value: "DDD",
        description: t("laCentralMetricsArchitectureDescription"),
      },

      {
        label: t("laCentralMetricsRealtimeLabel"),
        value: "WebSocket",
        description: t("laCentralMetricsRealtimeDescription"),
      },
    ],

    tags: [
      "Next.js",
      "Spring Boot",
      "DDD",
      "CQRS",
    ],

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "TanStack Query",
        "Zod",
        "Axios",
        "STOMP.js",
      ],

      backend: [
        "Spring Boot",
        "Java",
        "Hexagonal Architecture",
        "DDD",
        "CQRS",
        "JWT",
        "WebSocket",
      ],

      database: [
        "PostgreSQL",
      ],

      devops: [
        "Docker",
        "DigitalOcean",
        "Private Network",
      ],

      other: [
        "Event-Driven Architecture",
        "HTTP-only Cookies",
        "REST API",
        "Real-time Sync",
      ],
    },

    architecture: [
      {
        title: t("laCentralArchitectureHexagonalTitle"),
        description: t("laCentralArchitectureHexagonalDescription"),
      },

      {
        title: t("laCentralArchitectureRealtimeTitle"),
        description: t("laCentralArchitectureRealtimeDescription"),
      },

      {
        title: t("laCentralArchitectureEventsTitle"),
        description: t("laCentralArchitectureEventsDescription"),
      },
    ],

    features: [
      {
        title: t("laCentralFeaturePosTitle"),
        description: t("laCentralFeaturePosDescription"),
      },

      {
        title: t("laCentralFeatureInventoryTitle"),
        description: t("laCentralFeatureInventoryDescription"),
      },

      {
        title: t("laCentralFeatureAnalyticsTitle"),
        description: t("laCentralFeatureAnalyticsDescription"),
      },

      {
        title: t("laCentralFeatureEmployeesTitle"),
        description: t("laCentralFeatureEmployeesDescription"),
      },

      {
        title: t("laCentralFeatureForecastTitle"),
        description: t("laCentralFeatureForecastDescription"),
      },

      {
        title: t("laCentralFeatureSuggestionsTitle"),
        description: t("laCentralFeatureSuggestionsDescription"),
      },
    ],

    challenges: [
      {
        title: t("laCentralChallengeRealtimeTitle"),
        problem: t("laCentralChallengeRealtimeProblem"),
        solution: t("laCentralChallengeRealtimeSolution"),
      },

      {
        title: t("laCentralChallengeForecastTitle"),
        problem: t("laCentralChallengeForecastProblem"),
        solution: t("laCentralChallengeForecastSolution"),
      },

      {
        title: t("laCentralChallengeArchitectureTitle"),
        problem: t("laCentralChallengeArchitectureProblem"),
        solution: t("laCentralChallengeArchitectureSolution"),
      },
    ],

    results: [
      t("laCentralResult1"),
      t("laCentralResult2"),
      t("laCentralResult3"),
      t("laCentralResult4"),
    ],

    lessons: [
      t("laCentralLesson1"),
      t("laCentralLesson2"),
      t("laCentralLesson3"),
      t("laCentralLesson4"),
    ],
  },
  {
    slug: t("strataSlug"),
    title: t("strataTitle"),
    tagline: t("strataTagline"),
    description: t("strataDescription"),
    image: "/projects/strata.png",
    glowColor: "rgba(139, 92, 246, 0.2)",

    year: "2026",
    duration: t("strataDuration"),
    role: t("strataRole"),
    type: t("strataType"),
    status: "development",

    demoUrl: "",
    frontendUrl: "https://github.com/Gerardoprogramer/strata-web",
    backendUrl: "https://github.com/Gerardoprogramer/strata-api",

    problem: t("strataProblem"),
    solution: t("strataSolution"),

    metrics: [
      {
        label: t("strataMetricsDocumentsLabel"),
        value: "RAG",
        description: t("strataMetricsDocumentsDescription")
      },
      {
        label: t("strataMetricsSearchLabel"),
        value: "pgvector",
        description: t("strataMetricsSearchDescription")
      },
      {
        label: t("strataMetricsArchitectureLabel"),
        value: "AI",
        description: t("strataMetricsArchitectureDescription")
      },
      {
        label: t("strataMetricsStreamingLabel"),
        value: "Realtime",
        description: t("strataMetricsStreamingDescription")
      },
    ],

    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "AI",
      "RAG",
    ],

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "TanStack Query",
        "Zustand",
      ],

      backend: [
        "FastAPI",
        "Python",
        "JWT",
        "AsyncIO",
        "REST API",
      ],

      database: [
        "PostgreSQL",
        "pgvector",
      ],

      devops: [
        "Docker",
        "DigitalOcean",
        "Vercel",
      ],

      other: [
        "OpenAI API",
        "LlamaIndex",
        "Semantic Search",
        "Embeddings",
        "OCR",
        "RAG",
        "WebSockets",
      ]
    },

    architecture: [
      {
        title: t("strataArchitectureRagTitle"),
        description: t("strataArchitectureRagDescription"),
      },
      {
        title: t("strataArchitectureEmbeddingsTitle"),
        description: t("strataArchitectureEmbeddingsDescription"),
      },
      {
        title: t("strataArchitectureServicesTitle"),
        description: t("strataArchitectureServicesDescription"),
      },
    ],

    features: [
      {
        title: t("strataFeatureDocumentsTitle"),
        description: t("strataFeatureDocumentsDescription")
      },
      {
        title: t("strataFeatureChatTitle"),
        description: t("strataFeatureChatDescription")
      },
      {
        title: t("strataFeatureSemanticTitle"),
        description: t("strataFeatureSemanticDescription")
      },
      {
        title: t("strataFeatureSummariesTitle"),
        description: t("strataFeatureSummariesDescription")
      },
      {
        title: t("strataFeatureNotesTitle"),
        description: t("strataFeatureNotesDescription")
      },
      {
        title: t("strataFeatureVisualizationTitle"),
        description: t("strataFeatureVisualizationDescription")
      },
    ],

    challenges: [
      {
        title: t("strataChallengeRagTitle"),
        problem: t("strataChallengeRagProblem"),
        solution: t("strataChallengeRagSolution"),
      },
      {
        title: t("strataChallengeStreamingTitle"),
        problem: t("strataChallengeStreamingProblem"),
        solution: t("strataChallengeStreamingSolution"),
      },
      {
        title: t("strataChallengeDocumentsTitle"),
        problem: t("strataChallengeDocumentsProblem"),
        solution: t("strataChallengeDocumentsSolution"),
      },
    ],

    results: [
      t("strataResult1"),
      t("strataResult2"),
      t("strataResult3"),
      t("strataResult4"),
    ],

    lessons: [
      t("strataLesson1"),
      t("strataLesson2"),
      t("strataLesson3"),
      t("strataLesson4"),
    ],
  },
]

export function getProjectBySlug(slug: string, t: any): Project | undefined {
  return projects(t).find((p) => p.slug === slug)
}

export function getNextProject(slug: string, t: any): Project {
  const projectList = projects(t)

  const index = projectList.findIndex((p) => p.slug === slug)

  return projectList[(index + 1) % projectList.length]
}

export function getPreviousProject(slug: string, t: any): Project {
  const projectList = projects(t)

  const index = projectList.findIndex((p) => p.slug === slug)

  return projectList[(index - 1 + projectList.length) % projectList.length]
}