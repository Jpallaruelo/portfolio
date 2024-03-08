// Linterna.js
import React, { useState, useEffect } from 'react';
import '../Linterna.css';

const Linterna = () => {
    const [linternaPosition, setLinternaPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setLinternaPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="linterna" style={{ left: linternaPosition.x, top: linternaPosition.y }}></div>
    );
};

export default Linterna;
