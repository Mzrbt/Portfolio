import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { ScrollArrowProvider } from "../context/ScrollArrowContext";
import { LanguageProvider } from "../context/LanguageContext";

export const Home = () => {
    return (
        <LanguageProvider>
            <ScrollArrowProvider>
                <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                    <StarBackground />
                    <Navbar />
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <SkillsSection />
                        <ProjectSection />
                        <ContactSection />
                    </main>
                </div>
            </ScrollArrowProvider>
        </LanguageProvider>
    );
};