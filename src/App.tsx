import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Snowfall } from './components/Snowfall';
import { Gift, TreePine, Sparkles } from 'lucide-react';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 relative overflow-hidden">
            <Snowfall />

            <AnimatePresence mode={"wait"}>
                {isLoading ? (
                    <motion.div
                        className="min-h-screen flex items-center justify-center"
                        exit={{ opacity: 0 }}
                    >
                        <Loader />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="min-h-screen flex flex-col items-center justify-center px-4"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mb-8"
                        >
                            <TreePine size={64} className="text-green-400" />
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white text-center mb-8"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            Joyeux Noël !
                        </motion.h1>

                        <motion.div
                            className="flex gap-6 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="text-red-400"
                            >
                                <Gift size={32} />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -10 }}
                                className="text-yellow-400"
                            >
                                <Sparkles size={32} />
                            </motion.div>
                        </motion.div>

                        <motion.p
                            className="text-xl text-white text-center max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Que cette période des fêtes soit remplie de joie,
                            de bonheur et de moments magiques avec vos proches !
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;