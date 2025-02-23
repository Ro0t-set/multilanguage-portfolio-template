import type { Skill, SkillTranslations } from "../locale";

const skills: Skill[] = [
    {
        name: "JavaScript",
        level: 0.9
    },
    {
        name: "TypeScript",
        level: 0.8
    },
    {
        name: "Vue.js",
        level: 0.85
    },
    {
        name: "React",
        level: 0.7
    },
    {
        name: "HTML5/CSS3",
        level: 0.9
    },
    {
        name: "Node.js",
        level: 0.7
    },
    {
        name: "Git",
        level: 0.8
    },
    {
        name: "REST APIs",
        level: 0.75
    },
    {
        name: "MongoDB",
        level: 0.6
    },
    {
        name: "Docker",
        level: 0.5
    },
    {
        name: "Jest/Vitest",
        level: 0.7
    },
    {
        name: "Agile/Scrum",
        level: 0.8
    }
];

export const skillTranslationsEn: SkillTranslations = {
    skillTitle: "Technical Skills",
    skills: skills
};

export const skillTranslationsIt: SkillTranslations = {
    skillTitle: "Competenze Tecniche",
    skills: skills
};