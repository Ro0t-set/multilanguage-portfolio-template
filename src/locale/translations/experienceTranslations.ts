import type { Experience, ExperienceTranslations } from "../locale";

const experiences: Experience[] = [
    {
        title: "Software Developer",
        company: "Company",
        location: "Location",
        startDate: "Start Date",
        endDate: "End Date",
        description: "Description"
    },
    {
        title: "Software Developer",
        company: "Company 2",
        location: "Location",
        startDate: "Start Date",
        endDate: "End Date",
        description: "Description"
    },

]

export const experienceTranslationsEn: ExperienceTranslations = {
    experienceTitle: "Experience",
    experiences: experiences,
};

export const experienceTranslationsIt: ExperienceTranslations = {
    experienceTitle: "Esperienza",
    experiences: experiences,
};