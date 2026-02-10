import { Briefcase, Code, User } from "lucide-react";
import { ScrollArrow } from "./ScrollArrow";
import { useLanguage } from "../context/LanguageContext";

export const AboutSection = () => {
  const { t, language } = useLanguage();
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.about.title1} <span className="text-primary"> {t.about.title2}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t.about.subtitle}</h3>
            <p className="text-muted-foreground">{t.about.desc1}</p>
            <p className="text-muted-foreground">{t.about.desc2}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center">
              <a href="#contact" className="cosmic-button">
                {t.about.getInTouch}
              </a>
              <a href={language === "fr" ? "/CV_FR_JABET_Marin.pdf" : "/CV_EN_JABET_Marin.pdf"} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download>
                {t.about.downloadCV}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-8 card-hover">
              <div className="flex items-center gap-4 -ml-2">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Code className="h-6 w-6 text-primary"/>              
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-base">{t.about.card1Title}</h4>
                  <p className="text-muted-foreground text-sm">{t.about.card1Desc}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-8 card-hover">
              <div className="flex items-center gap-4 -ml-2">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <User className="h-6 w-6 text-primary"/>             
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-base">{t.about.card2Title}</h4>
                  <p className="text-muted-foreground text-sm">{t.about.card2Desc}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-8 card-hover">
              <div className="flex items-center gap-4 -ml-2">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary"/>              
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-base">{t.about.card3Title}</h4>
                  <p className="text-muted-foreground text-sm">{t.about.card3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollArrow targetId="skills" />
    </section>
  );
};