import { Language, type Locale } from "./locale.d";
import { navbarTranslationsEn } from "./translations/navbarTranslations";
import { navbarTranslationsIt } from "./translations/navbarTranslations";
import { generalInfoEn, generalInfoIt } from "./translations/generalInfoTranslations";
import { experienceTranslationsEn, experienceTranslationsIt } from "./translations/experienceTranslations";
import { ProjectTranslationsEn, ProjectTranslationsIt } from "./translations/projectTranslations";
import { skillTranslationsEn, skillTranslationsIt } from "./translations/skillTranslations";
import { contactTranslationsEn, contactTranslationsIt } from "./translations/contactTranslations";
import { educationTranslationsEn, educationTranslationsIt } from "./translations/educationTranslations";

const dictionaryList: Record<Language, Locale> = {
  [Language.en]: {
    navbar: navbarTranslationsEn,
    generalInfo: generalInfoEn,
    education: educationTranslationsEn,
    experience: experienceTranslationsEn,
    projects: ProjectTranslationsEn,
    skills: skillTranslationsEn,
    contact: contactTranslationsEn,
  },
  [Language.it]: {
    navbar: navbarTranslationsIt,
    generalInfo: generalInfoIt,
    education: educationTranslationsIt,
    experience: experienceTranslationsIt,
    projects: ProjectTranslationsIt,
    skills: skillTranslationsIt,
    contact: contactTranslationsIt,
  },
};

export function dictionary(lang: Language): Locale {
  return dictionaryList[lang];
}