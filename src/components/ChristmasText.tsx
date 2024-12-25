import { motion } from 'framer-motion';

const letterVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            type: "spring",
            stiffness: 120,
            damping: 12
        }
    })
};

export const ChristmasText = () => {
    const text = "Joyeux Noël !";

    return (
        <motion.h1 className="text-6xl md:text-8xl font-bold text-white text-center mb-12 relative">
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    className="inline-block relative"
                    whileHover={{
                        scale: 1.2,
                        rotate: [-5, 5],
                        transition: { duration: 0.2 }
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
};