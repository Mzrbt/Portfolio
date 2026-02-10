import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollArrow } from '../context/ScrollArrowContext';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToogle } from './ThemeToogle';
import { LanguageToggle } from './LanguageToggle';

const navKeys = ['home', 'about', 'skills', 'projects', 'contact'];
const navHrefs = ['#hero', '#about', '#skills', '#projects', '#contact'];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { reactivateArrows } = useScrollArrow();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        reactivateArrows();
        setIsMenuOpen(false);
        
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
            )} 
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Mzrbt </span>Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8 items-center">
                    {navKeys.map((key, i) => (
                        <a key={key} href={navHrefs[i]} onClick={(e) => handleNavClick(e, navHrefs[i])} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {t.nav[key]}
                        </a>
                    ))}
                    <LanguageToggle />
                    <ThemeToogle />
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <LanguageToggle />
                    <ThemeToogle />
                    <button 
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      className="p-2 text-foreground z-50"
                      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navKeys.map((key, i) => (
                            <a key={key} href={navHrefs[i]} onClick={(e) => handleNavClick(e, navHrefs[i])} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {t.nav[key]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};