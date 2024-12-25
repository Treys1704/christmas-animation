import { motion } from 'framer-motion';
import { TreePine } from 'lucide-react';

export const Loader = () => {
    return (
        <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="text-green-600"
            >
                <TreePine size={48} />
            </motion.div>
        </motion.div>
    );
};