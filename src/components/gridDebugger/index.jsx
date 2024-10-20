import './style.scss';
import cn from 'clsx'

import { useState, useEffect } from 'react';

export default function GridDebugger() {
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    const [isGridVisible, setIsGridVisible] = useState(() => {
        return localStorage.getItem("isGridShow") === 'true';
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.shiftKey && event.key === 'G') {
                setIsGridVisible(prev => {
                    const newValue = !prev;
                    localStorage.setItem("isGridShow", newValue);
                    return newValue;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={cn('testplace', isGridVisible ? 'visible' : 'hidden')}>
            <div className="container grid">
                {Array.from({ length: 16 }).map((__, index) =>
                    <div key={index} className="testplace-col"></div>
                )}
            </div>
        </div>
    )
}