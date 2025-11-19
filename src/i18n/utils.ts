import en from './en.json';
import es from './es.json';

export type Language = 'en' | 'es';

const translations: Record<Language, Record<string, any>> = {
  en,
  es,
};

/**
 * Get the translation function for a specific language
 * @param locale - The language locale (e.g., 'en', 'es')
 * @returns An object with the translation function and locale
 */
export function getI18N(locale: Language = 'en') {
  const messages = translations[locale] || translations['en'];

  return {
    /**
     * Get a translation by key using dot notation
     * @param key - The translation key (e.g., 'navbar.github.title')
     * @param fallback - Optional fallback value if key is not found
     * @returns The translated string or fallback or the key itself
     */
    t: (key: string, fallback?: string): string => {
      const keys = key.split('.');
      let value: any = messages;

      for (const k of keys) {
        value = value?.[k];
      }

      return typeof value === 'string' ? value : fallback || key;
    },
    locale,
  };
}

export type I18N = ReturnType<typeof getI18N>;

/**
 * List of supported languages
 */
export const LANGUAGES: Record<Language, string> = {
  en: 'English',
  es: 'Español',
};

/**
 * Default language
 */
export const DEFAULT_LANGUAGE: Language = 'en';
