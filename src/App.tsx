import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Snowfall } from './components/Snowfall';
import { Background } from './components/Background';
import { StarField } from './components/StarField';
import { ChristmasText } from './components/ChristmasText';
import { Gift, TreePine, Sparkles, Music, Heart } from 'lucide-react';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const icons = [
        { Icon: Gift, color: "text-red-400" },
        { Icon: Sparkles, color: "text-yellow-400" },
        { Icon: Music, color: "text-purple-400" },
        { Icon: Heart, color: "text-pink-400" }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <Background />
            <StarField />
            <Snowfall />

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        className="min-h-screen flex items-center justify-center"
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Loader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mb-12"
                        >
                            <TreePine size={80} className="text-green-400" />
                        </motion.div>

                        <ChristmasText />

                        <motion.div
                            className="flex gap-8 mb-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {icons.map(({ Icon, color }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className={color}
                                >
                                    <Icon size={36} />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            className="text-2xl text-white text-center max-w-2xl leading-relaxed"
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