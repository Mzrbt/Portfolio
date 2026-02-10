import { useLanguage } from "../context/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "px-2 py-1 rounded-full transition-colors duration-300 hover:bg-primary/10",
                "focus:outline-hidden text-sm font-bold cursor-pointer whitespace-nowrap"
            )}
        >
            <span className={language === "fr" ? "text-primary" : "text-foreground/60"}>FR</span>
            <span className="text-foreground/40"> | </span>
            <span className={language === "en" ? "text-primary" : "text-foreground/60"}>EN</span>
        </button>
    );
};
