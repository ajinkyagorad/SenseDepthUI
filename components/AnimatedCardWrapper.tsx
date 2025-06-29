import React, { useState, useRef, useEffect, ReactNode } from 'react';

const useScrollTransform = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({
        opacity: 0,
        transform: 'scale(0.4) rotateX(60deg)', // Sensible initial state
    });

    useEffect(() => {
        const onScroll = () => {
            if (!ref.current) return;

            const { top } = ref.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Define the focal point on the screen (e.g., 85% down the viewport)
            const focalPointY = viewportHeight * 0.85;
            
            // Calculate distance of the element's top from the focal point.
            // This is negative when the element is above the focal point.
            const yDistanceFromFocal = top - focalPointY;

            // Normalize the distance. At the top of the screen, ratio is approx -1. At the focal point, it's 0.
            const distanceRatio = yDistanceFromFocal / focalPointY;

            // --- CALCULATE TRANSFORMATIONS ---

            // SCALE: Should be 1 at the focal point and smaller further away, as requested.
            // Clamping the minimum scale to 0.4.
            const scale = Math.max(0.4, 1 - Math.abs(distanceRatio) * 0.6);

            // ROTATION: Max rotation when far away (top of screen), 0 at focal point.
            // This creates the trapezoid effect of an object lying on a road.
            const maxRotation = 60; // deg
            const rotationX = -distanceRatio * maxRotation;

            // OPACITY: Fade in as the card approaches the focal point.
            // Fully opaque (1) near the focal point.
            const opacity = Math.max(0.1, 1 - Math.abs(distanceRatio) * 1.2);
            
            setStyle({
                transform: `scale(${scale}) rotateX(${rotationX}deg)`,
                opacity: `${opacity}`,
                transformOrigin: 'center bottom', // Pivot from the bottom for a more natural tilt
            });
        };
        
        const scrollListener = () => window.requestAnimationFrame(onScroll);

        scrollListener(); // Run on initial render
        window.addEventListener('scroll', scrollListener, { passive: true });
        
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    return { ref, style };
};

const AnimatedCardWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { ref, style } = useScrollTransform();
    
    return (
        <div ref={ref} style={{...style, transition: 'transform 20ms linear, opacity 50ms linear'}}>
            {children}
        </div>
    );
};

export default AnimatedCardWrapper;
