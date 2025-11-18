export const i18nConfig = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
};

export type SupportedLocale = 'en' | 'es';

export function getOtherLocale(currentLocale: SupportedLocale): SupportedLocale {
  return currentLocale === 'en' ? 'es' : 'en';
}
