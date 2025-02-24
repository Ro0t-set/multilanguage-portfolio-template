export enum Language {
  it = "it",
  en = "en",
}

export interface NavbarTranslations {
  home: string;
  about: string;
  education: string;
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

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ExperienceTranslations {
  experienceTitle: string;
  experiences: Experience[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  url: string;
}

export interface ProjectTranslations {
  projectTitle: string;
  projects: Project[];
}

export interface Skill {
  name: string;
  level: Int;
}

export interface SkillTranslations {
  skillTitle: string;
  skills: Skill[];
}

export interface ContactTranslations {
  contactTitle: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Education {
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface EducationTranslations {
  educationTitle: string; 
  educations: Education[];
}

export interface Locale {
  navbar: NavbarTranslations;
  generalInfo: GeneralInfoTranslations;
  education: EducationTranslations;
  experience: ExperienceTranslations;
  projects: ProjectTranslations;
  skills: SkillTranslations;
  contact: ContactTranslations;
}