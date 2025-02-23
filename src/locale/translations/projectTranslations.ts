import type { Project, ProjectTranslations } from "../locale";

const projectsEn: Project[] = [
    {
        title: "E-commerce Dashboard",
        description: "Developed a responsive admin dashboard for managing online store operations. Features include real-time sales tracking, inventory management, and customer analytics.",
        technologies: "Vue.js, TypeScript, Quasar Framework, Chart.js, REST APIs",
        url: "https://github.com/yourusername/ecommerce-dashboard"
    },
    {
        title: "Task Management System",
        description: "Built a collaborative task management application with real-time updates and team workspace features.",
        technologies: "Vue 3, Pinia, Firebase, Tailwind CSS",
        url: "https://github.com/yourusername/task-manager"
    },
    {
        title: "Weather Forecast App",
        description: "Created a modern weather application with location-based forecasts and interactive weather maps.",
        technologies: "Vue.js, OpenWeatherMap API, Leaflet.js, PWA",
        url: "https://github.com/yourusername/weather-app"
    }
];

const projectsIt: Project[] = [
    {
        title: "Dashboard E-commerce",
        description: "Sviluppato una dashboard amministrativa responsive per la gestione delle operazioni del negozio online. Include monitoraggio vendite in tempo reale, gestione inventario e analisi clienti.",
        technologies: "Vue.js, TypeScript, Quasar Framework, Chart.js, REST APIs",
        url: "https://github.com/yourusername/ecommerce-dashboard"
    },
    {
        title: "Sistema di Gestione Attività",
        description: "Realizzato un'applicazione collaborativa per la gestione delle attività con aggiornamenti in tempo reale e funzionalità per workspace di team.",
        technologies: "Vue 3, Pinia, Firebase, Tailwind CSS",
        url: "https://github.com/yourusername/task-manager"
    },
    {
        title: "App Previsioni Meteo",
        description: "Creato un'applicazione meteo moderna con previsioni basate sulla posizione e mappe meteorologiche interattive.",
        technologies: "Vue.js, OpenWeatherMap API, Leaflet.js, PWA",
        url: "https://github.com/yourusername/weather-app"
    }
];

export const ProjectTranslationsEn: ProjectTranslations = {
    projectTitle: "Featured Projects",
    projects: projectsEn
};

export const ProjectTranslationsIt: ProjectTranslations = {
    projectTitle: "Progetti in Evidenza",
    projects: projectsIt
};