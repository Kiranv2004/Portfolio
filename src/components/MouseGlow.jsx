import { useEffect, useRef } from 'react';

const MouseGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, rgba(123,47,247,0.03) 40%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1,
                willChange: 'transform',
                transform: 'translate(-50%, -50%)', // Centering default
            }}
        />
    );
};

export default MouseGlow;
