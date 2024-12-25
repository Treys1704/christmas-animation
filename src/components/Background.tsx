import { motion } from 'framer-motion';

export const Background = () => {
    return (
        <motion.div
            className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700"
            animate={{
                background: [
                    'linear-gradient(to bottom, rgb(30,58,138), rgb(29,78,216), rgb(30,64,175))',
                    'linear-gradient(to bottom, rgb(30,64,175), rgb(29,78,216), rgb(30,58,138))',
                ],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        />
    );
};