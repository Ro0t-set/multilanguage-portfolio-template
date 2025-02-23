import type { Skill, SkillTranslations } from "../locale";

const skills: Skill[] = [
    {
        name: "JavaScript",
        level: 1
    },
    {
        name: "TypeScript",
        level: 0.5
    },
    {
        name: "React",
        level: 0.6
    },
    {
        name: "Angular",
        level: 0.1
    }
];

export const skillTranslationsEn: SkillTranslations = {
    skillTitle: "Skills",
    skills: skills
};

export const skillTranslationsIt: SkillTranslations = {
    skillTitle: "Competenze",
    skills: skills
};