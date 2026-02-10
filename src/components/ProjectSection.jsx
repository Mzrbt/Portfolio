import { ArrowRight, Github } from "lucide-react";
import { ScrollArrow } from "./ScrollArrow";
import { useLanguage } from "../context/LanguageContext";

const projects = [
    {
        id: 1,
        title: "ReadyMapèo Web App",
        image: "/projects/readymapeo.png",
        tags: ["Laravel", "React", "TailwindCSS"],
        link: "https://github.com/Infuseting/SAE301"
    },
    {
        id: 2,
        title: "Gribouille",
        image: "/projects/gribouille.png",
        tags: ["Java", "JavaFX"],
        link: "https://github.com/Mzrbt/Gribouille"
    },
    {
        id: 3,
        title: "YT-HourGen",
        image: "/projects/ythourgen.png",
        tags: ["Python", "Docker"],
        link: "https://github.com/Mzrbt/YT-HourGen"
    }
]

export const ProjectSection = () => {
    const { t } = useLanguage();
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t.projects.title1} <span className="text-primary"> {t.projects.title2} </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t.projects.subtitle}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {t.projects.descriptions[project.id]}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/mzrbt">
                        {t.projects.checkGithub} <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
            <ScrollArrow targetId="contact" />
        </section>    
    );
}