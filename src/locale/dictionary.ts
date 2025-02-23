
import { Language, type Locale } from "./locale.d";
import { navbarTranslationsEn } from "./navbarTranslations";
import { navbarTranslationsIt } from "./navbarTranslations";

const dictionaryList: Record<Language, Locale> = {
  [Language.it]: {
    navbar: navbarTranslationsEn,  
  },
  [Language.en]: {
    navbar: navbarTranslationsIt,
  },
};


export function dictionary(Language: Language): Locale {
  return dictionaryList[Language];
}