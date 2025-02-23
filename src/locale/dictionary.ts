
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


export function getLocaleDictionary(Language: Language): Locale {
  return dictionary[Language];
}