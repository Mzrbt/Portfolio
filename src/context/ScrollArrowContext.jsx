import { createContext, useContext, useEffect, useState } from 'react';

const ScrollArrowContext = createContext();

export const useScrollArrow = () => {
    const context = useContext(ScrollArrowContext);
    if (!context) {
        throw new Error('useScrollArrow must be used within ScrollArrowProvider');
    }
    return context;
};

export const ScrollArrowProvider = ({ children }) => {
    const [arrowsVisible, setArrowsVisible] = useState(true);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            if (isAutoScrolling) {
                return;
            }

            setArrowsVisible(false);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [isAutoScrolling]);

    const triggerAutoScroll = () => {
        setIsAutoScrolling(true);
        setTimeout(() => {
            setIsAutoScrolling(false);
        }, 1000);
    };

    const reactivateArrows = () => {
        setArrowsVisible(true);
        triggerAutoScroll();
    };

    return (
        <ScrollArrowContext.Provider value={{ arrowsVisible, triggerAutoScroll, reactivateArrows }}>
            {children}
        </ScrollArrowContext.Provider>
    );
};
