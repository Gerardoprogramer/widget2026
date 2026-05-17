import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Language = "es" | "en"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "es",

      setLanguage: (language) => {
        document.cookie = `language=${language}; path=/; max-age=31536000`
        set({ language })
      },
    }),
    {
      name: "portfolio-language",
    }
  )
)