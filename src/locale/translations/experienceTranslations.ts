import type { Experience, ExperienceTranslations } from "../locale";

const experiencesEn: Experience[] = [
    {
        title: "Senior Frontend Developer",
        company: "TechVision Solutions",
        location: "Remote",
        startDate: "Jan 2022",
        endDate: "Present",
        description: "Leading the frontend development team, implementing modern web applications using Vue.js and TypeScript. Improved application performance by 40% through code optimization and modern development practices."
    },
    {
        title: "Full Stack Developer",
        company: "Digital Innovations Lab",
        location: "Milan, Italy",
        startDate: "Mar 2020",
        endDate: "Dec 2021",
        description: "Developed and maintained multiple web applications using Vue.js, Node.js, and MongoDB. Collaborated with UX designers to implement responsive and accessible user interfaces."
    },
    {
        title: "Junior Web Developer",
        company: "WebTech Studios",
        location: "Rome, Italy",
        startDate: "Jun 2019",
        endDate: "Feb 2020",
        description: "Started as a junior developer working on frontend development with JavaScript and Vue.js. Participated in agile development processes and code reviews."
    }
];

const experiencesIt: Experience[] = [
    {
        title: "Sviluppatore Frontend Senior",
        company: "TechVision Solutions",
        location: "Remoto",
        startDate: "Gen 2022",
        endDate: "Presente",
        description: "Guida del team di sviluppo frontend, implementazione di applicazioni web moderne utilizzando Vue.js e TypeScript. Miglioramento delle prestazioni dell'applicazione del 40% attraverso l'ottimizzazione del codice e pratiche di sviluppo moderne."
    },
    {
        title: "Sviluppatore Full Stack",
        company: "Digital Innovations Lab",
        location: "Milano, Italia",
        startDate: "Mar 2020",
        endDate: "Dic 2021",
        description: "Sviluppo e manutenzione di multiple applicazioni web utilizzando Vue.js, Node.js e MongoDB. Collaborazione con designer UX per implementare interfacce utente responsive e accessibili."
    },
    {
        title: "Sviluppatore Web Junior",
        company: "WebTech Studios",
        location: "Roma, Italia",
        startDate: "Giu 2019",
        endDate: "Feb 2020",
        description: "Iniziato come sviluppatore junior lavorando sullo sviluppo frontend con JavaScript e Vue.js. Partecipazione a processi di sviluppo agile e code review."
    }
];

export const experienceTranslationsEn: ExperienceTranslations = {
    experienceTitle: "Experience",
    experiences: experiencesEn,
};

export const experienceTranslationsIt: ExperienceTranslations = {
    experienceTitle: "Esperienza",
    experiences: experiencesIt,
};