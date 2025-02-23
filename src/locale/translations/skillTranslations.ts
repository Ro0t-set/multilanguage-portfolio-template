import type { Skill, SkillTranslations } from "../locale";

const skills: Skill[] = [
    {
        name: "JavaScript",
        level: 4
    },
    {
        name: "TypeScript",
        level: 3
    },
    {
        name: "React",
        level: 4
    },
    {
        name: "Angular",
        level: 3
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