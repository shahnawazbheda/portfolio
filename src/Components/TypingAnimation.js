import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts }) => {
    const [text, setText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let interval;
        if (typing) {
            interval = setInterval(() => {
                setText((prevText) => texts[currentTextIndex].slice(0, currentIndex + 1));
                setCurrentIndex((prevIndex) =>
                    prevIndex < texts[currentTextIndex].length - 1 ? prevIndex + 1 : prevIndex
                );
            }, 100);

            return () => clearInterval(interval);
        }
    }, [typing, texts, currentTextIndex, currentIndex]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTyping(false);
            setTimeout(() => {
                setCurrentIndex(0);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setTyping(true);
            }, 2000);
        }, texts[currentTextIndex].length * 100 + 2000);

        return () => clearTimeout(timeout);
    }, [texts, currentTextIndex]);

    return (
        <div className="animate-typing text-blue-600 font-bold overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  ">
            {text}
        </div>
    );
};

export default TypingAnimation;

