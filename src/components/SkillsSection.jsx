import { useState } from "react";
import {cn} from "@/lib/utils";
import { ScrollArrow } from "./ScrollArrow";
import { useLanguage } from "../context/LanguageContext";

const skills = [
    {name: "HTML/CSS", category: "Web"},
    {name: "JavaScript", category: "Web"},
    {name: "PHP", category: "Web"},
    {name: "MySQL", category: "Web"},
    {name: "React", category: "Web"},
    {name: "Laravel", category: "Web"},

    {name: "Java", category: "Software"},
    {name: "C", category: "Software"},
    {name: "Python", category: "Software"},
    {name: "JavaFX", category: "Software"},
    {name: "Kotlin", category: "Software"},

    {name: "Git", category: "Tools"},
    {name: "Docker", category: "Tools"},
    
    {name: "Wireshark", category: "Cybersecurity"},
    {name: "HashCat", category: "Cybersecurity"},
    {name: "Nmap", category: "Cybersecurity"},    
]

const categories = ["Web", "Software", "Tools", "Cybersecurity"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Web"); 
    const { t } = useLanguage();
      return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.skills.title1} <span className="text-primary"> {t.skills.title2}</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {t.skills.categories[category]}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.filter(skill => skill.category === activeCategory).map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-center">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow targetId="projects" />
        </section>
    );
};