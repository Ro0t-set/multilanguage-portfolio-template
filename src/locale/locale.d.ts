import type { Path } from "typescript";

export enum Language {
  it = "it",
  en = "en",
}

export interface NavbarTranslations {
  home: string;
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

export interface GeneralInfoTranslations {
  name: string;
  surname: string;
  role: string;
  description: string;
}

export interface ExperienceTranslations {
  experienceTitle: string;
}

export interface ProjectTranslations {
  projectTitle: string;
}

export interface SkillTranslations {
  skillTitle: string;
}

export interface ContactTranslations {
  contactTitle: string;
}

export interface Locale {
  navbar: NavbarTranslations;
  generalInfo: GeneralInfoTranslations;
  experience: ExperienceTranslations;
  projects: ProjectTranslations;
  skills: SkillTranslations;
  contact: ContactTranslations;
}