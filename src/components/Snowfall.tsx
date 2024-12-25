import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number; x: number }>>([]);

    useEffect(() => {
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{ x: flake.x, y: -10 }}
                    animate={{
                        y: window.innerHeight,
                        x: flake.x + Math.sin(flake.id) * 100,
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};