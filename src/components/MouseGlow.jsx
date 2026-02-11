import { useEffect, useState } from 'react';

const MouseGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y - 200,
                left: position.x - 200,
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, rgba(123,47,247,0.03) 40%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1,
                transition: 'top 0.1s ease-out, left 0.1s ease-out',
            }}
        />
    );
};

export default MouseGlow;
