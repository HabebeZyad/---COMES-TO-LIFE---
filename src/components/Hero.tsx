import { ChevronDown, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-tomb.jpg';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background with optimized overlays */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
            </div>

            {/* Main Content Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center"
            >
                {/* Eye of Horus Icon - Golden & Precise */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    className="mb-8"
                >
                    <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-28 md:h-28 text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        <path
                            fill="currentColor"
                            d="M12,4.5C7,4.5,2.73,7.61,1,12c1.73,4.39,6,7.5,11,7.5s9.27-3.11,11-7.5C21.27,7.61,17,4.5,12,4.5z M12,17 c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z M12,9c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,9,12,9z"
                        />
                        <path fill="currentColor" d="M22.5 12C20.8 7.2 16.7 4 12 4C7.3 4 3.2 7.2 1.5 12C3.2 16.8 7.3 20 12 20C16.7 20 20.8 16.8 22.5 12Z" opacity="0.1" />
                    </svg>
                </motion.div>

                <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] mb-6 tracking-wider leading-tight">
                    COMES TO LIFE
                </h1>

                <p className="font-lato text-lg md:text-xl text-stone-200 mb-10 max-w-3xl leading-relaxed tracking-wide drop-shadow-lg">
                    An interactive journey through ancient Egypt where history breathes, stories<br className="hidden md:block" /> branch, and mysteries await your discovery.
                </p>

                <div className="text-stone-400 text-xs md:text-sm tracking-[0.25em] mb-12 uppercase font-lato space-x-2">
                    <span>Digital Humanities</span> • <span>Interactive Storytelling</span> • <span>Cultural Heritage</span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-black font-cinzel font-bold text-lg tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <Play className="w-4 h-4 fill-current" />
                        BEGIN YOUR JOURNEY
                    </span>
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 z-20 flex flex-col items-center text-stone-400 hover:text-[#D4AF37] transition-colors cursor-pointer group"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] mb-3 font-cinzel">Explore</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
};
