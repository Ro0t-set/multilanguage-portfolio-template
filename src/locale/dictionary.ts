
import { Language, type Locale } from "./locale.d";
import { navbarTranslationsEn } from "./navbarTranslations";
import { navbarTranslationsIt } from "./navbarTranslations";

export const dictionary: Record<Language, Locale> = {
  [Language.it]: {
    navbar: navbarTranslationsEn,  
  },

  
  [Language.en]: {
    navbar: navbarTranslationsIt,
  },
};



export function translate<K extends keyof Locale, T extends keyof Locale[K]>(lang: Language, section: K, key: T): string {
  return dictionary[lang][section][key] as unknown as string;
}