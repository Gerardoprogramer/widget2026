import { useCallback } from "react"

import { translations } from "@/lib/translations"

import { useLanguageStore } from "@/store/language-store"

type TranslationKey = keyof typeof translations.es

export function useTranslation() {
  const language = useLanguageStore(
    (state) => state.language
  )

  return useCallback(
    (key: TranslationKey): string => {
      return translations[language][key]
    },
    [language]
  )
}