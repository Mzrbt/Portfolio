import { ScrollArrow } from "./ScrollArrow";
import { useLanguage } from "../context/LanguageContext";

export const HeroSection = () => {
    const { t } = useLanguage();
    return (
        <section    
          id="hero" 
          className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> {t.hero.greeting}</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Marin</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Jabet</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        {t.hero.subtitle}
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            {t.hero.cta}
                        </a>
                    </div>
                </div>
            </div>
            <ScrollArrow targetId="about" />
        </section>
    );
};