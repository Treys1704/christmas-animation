import { motion } from 'framer-motion';
import { TreePine } from 'lucide-react';

export const Loader = () => {
    return (
        <div className="relative">
            <motion.div
                className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.6, 0.01, -0.05, 0.95]
                }}
                className="relative text-green-400"
            >
                <TreePine size={64} />
            </motion.div>
        </div>
    );
};