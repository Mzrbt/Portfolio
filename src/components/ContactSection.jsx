import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ContactSection = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    {t.contact.title1} <span className="text-primary"> {t.contact.title2}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-24 max-w-2xl mx-auto">
                    {t.contact.subtitle}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-6 text-center"> {t.contact.contactInfo}</h3>
                        <div className="space-y-6 flex flex-col items-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <a href="mailto:jabetmarin07@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        jabetmarin07@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Caen, France
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-6 text-center"> {t.contact.connectWithMe}</h3>
                        <div className="flex space-x-6 justify-center">
                            <a href="https://www.linkedin.com/in/marin-jabet-49980534b/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                <Linkedin className="h-7 w-7 text-primary"/>
                            </a>
                            <a href="https://github.com/mzrbt" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                <Github className="h-7 w-7 text-primary"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}