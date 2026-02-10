import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact",
        },
        hero: {
            greeting: "Salut, je suis",
            subtitle: "Étudiant en informatique - Passionné par le Développement, la Cybersécurité & l'IA.",
            cta: "Voir mes projets",
        },
        about: {
            title1: "À",
            title2: "propos",
            subtitle: "Étudiant en informatique & Futur ingénieur",
            desc1: "Étudiant en informatique de 18 ans, actuellement en deuxième année d'études",
            desc2: "Passionné par le développement avec une expérience pratique dans plusieurs langages de programmation",
            getInTouch: "Me contacter",
            downloadCV: "Télécharger CV",
            card1Title: "Développement Full-Stack & Applications",
            card1Desc: "Création d'applications robustes et de solutions web modernes",
            card2Title: "Travail d'équipe efficace",
            card2Desc: "Compétences en communication et travail collaboratif",
            card3Title: "BUT Informatique",
            card3Desc: "2ème année - Université de Caen, France",
        },
        skills: {
            title1: "Mes",
            title2: "Compétences",
            categories: {
                Web: "Web",
                Software: "Logiciel",
                Tools: "Outils",
                Cybersecurity: "Cybersécurité",
            },
        },
        projects: {
            title1: "Projets",
            title2: "phares",
            subtitle: "Une sélection de projets illustrant mes compétences et mon expérience en développement web & logiciel.",
            descriptions: {
                1: "Application web pour gérer les inscriptions aux courses d'orientation",
                2: "Application similaire à Paint avec divers outils de dessin",
                3: "Projet personnel qui génère des vidéos en boucle depuis YouTube en CLI",
            },
            checkGithub: "Voir mon Github",
        },
        contact: {
            title1: "Me",
            title2: "contacter",
            subtitle: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités pour contribuer à vos projets. N'hésitez pas à me contacter via les informations ci-dessous.",
            contactInfo: "Informations de contact",
            connectWithMe: "Retrouvez-moi",
        },
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I'm",
            subtitle: "CS Student - Interested in Development, Cybersecurity & AI.",
            cta: "View my projects",
        },
        about: {
            title1: "About",
            title2: "Me",
            subtitle: "CS Student & Future Engineer",
            desc1: "18-year-old computer science student, currently in my second year of studies",
            desc2: "Passionate about development with hands-on experience across multiple programming languages",
            getInTouch: "Get in Touch",
            downloadCV: "Download CV",
            card1Title: "Applications & Full-Stack Development",
            card1Desc: "Building robust applications and modern web solutions",
            card2Title: "Strong Team Collaboration",
            card2Desc: "Effective communication and teamwork skills",
            card3Title: "Computer Science Degree (BUT Informatique)",
            card3Desc: "2nd year - Université de Caen, France",
        },
        skills: {
            title1: "My",
            title2: "Skills",
            categories: {
                Web: "Web",
                Software: "Software",
                Tools: "Tools",
                Cybersecurity: "Cybersecurity",
            },
        },
        projects: {
            title1: "Featured",
            title2: "Projects",
            subtitle: "A selection of projects showcasing my skills and experience in web & software development.",
            descriptions: {
                1: "A web application for handling orienteering inscriptions",
                2: "Application similar to Paint that handles various drawing tools",
                3: "Personal project that generates looped videos from YouTube in CLI",
            },
            checkGithub: "Check My Github",
        },
        contact: {
            title1: "Get In",
            title2: "Touch",
            subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me using the contact information below.",
            contactInfo: "Contact Information",
            connectWithMe: "Connect With Me",
        },
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const next = prev === "fr" ? "en" : "fr";
            localStorage.setItem("language", next);
            return next;
        });
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
