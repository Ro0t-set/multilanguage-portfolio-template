import type { Project, ProjectTranslations } from "../locale";

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description 1",
        technologies: "Technologies 1",
        url: "URL 1"
    },
    {
        title: "Project 2",
        description: "Description 2",
        technologies: "Technologies 2",
        url: "URL 2"
    }
];


export const ProjectTranslationsEn: ProjectTranslations = {
    projectTitle: "Projects",
    projects: projects
};

export const ProjectTranslationsIt: ProjectTranslations = {
    projectTitle: "Progetti",
    projects: projects
};


