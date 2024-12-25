import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const StarField = () => {
    const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

    useEffect(() => {
        const starArray = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 1,
        }));
        setStars(starArray);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: star.size,
                        height: star.size,
                        left: star.x,
                        top: star.y,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};