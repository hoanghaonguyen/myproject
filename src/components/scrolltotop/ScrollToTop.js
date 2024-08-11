import React, { useState, useEffect } from 'react';
import './scrolltotop.css';
import { FaArrowUp } from 'react-icons/fa'; 
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && 
                <button 
                    onClick={scrollToTop} 
                    className="scroll-to-top-button"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="scroll-to-top-icon" />
                </button>
            }
        </div>
    );
};

export default ScrollToTop