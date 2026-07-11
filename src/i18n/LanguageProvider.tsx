"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Dictionary } from "./en";
import { ha } from "./ha";

export type Locale = "en" | "ha";

const DICTIONARIES: Record<Locale, Dictionary> = { en, ha };
const STORAGE_KEY = "hlt-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate persisted preference on mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ha") {
      setLocaleState(stored);
    }
  }, []);

  // Keep <html lang> and storage in sync.
  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);
  const toggle = useCallback(
    () => setLocaleState((prev) => (prev === "en" ? "ha" : "en")),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggle, t: DICTIONARIES[locale] }),
    [locale, setLocale, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage hooks must be used within <LanguageProvider>");
  }
  return ctx;
}

/** Returns the active dictionary. */
export function useT(): Dictionary {
  return useLanguageContext().t;
}

/** Returns locale controls: { locale, setLocale, toggle }. */
export function useLocale(): Pick<
  LanguageContextValue,
  "locale" | "setLocale" | "toggle"
> {
  const { locale, setLocale, toggle } = useLanguageContext();
  return { locale, setLocale, toggle };
}
