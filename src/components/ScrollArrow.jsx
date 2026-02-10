import { ArrowDown } from "lucide-react";
import { useScrollArrow } from "../context/ScrollArrowContext";

export const ScrollArrow = ({ targetId }) => {
    const { arrowsVisible, triggerAutoScroll } = useScrollArrow();

    const handleClick = () => {
        triggerAutoScroll();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!arrowsVisible) {
        return null;
    }

    return (
        <button
            onClick={handleClick}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer hover:scale-110 transition-transform"
            aria-label={`Scroll to ${targetId}`}
        >
            <ArrowDown className="h-6 w-6 text-primary" />
        </button>
    );
};
