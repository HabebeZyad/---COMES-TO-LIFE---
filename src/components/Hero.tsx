import { ChevronDown, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-tomb.jpg';
import { AnkhEye } from './ui/AnkhEye';
import { EgyptianButton } from './ui/EgyptianButton';

const Particle = ({ i }: { i: number }) => (
    <motion.div
        initial={{
            x: Math.random() * 100 + "%",
            y: "110%",
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
        }}
        animate={{
            y: "-10%",
            opacity: [0, 0.4, 0],
            x: (Math.random() * 100 - 10) + "%"
        }}
        transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear"
        }}
        className="absolute w-1 h-1 bg-[#B8860B] rounded-full blur-[1px]"
    />
);

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center bg-black">
            {/* Background with optimized overlays */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />
            </div>

            {/* Particles System */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <Particle key={i} i={i} />
                ))}
            </div>

            {/* Light Rays Overlay */}
            <div className="absolute inset-0 z-[2] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_0%,transparent_0%,rgba(184,134,11,0.1)_25%,transparent_50%,rgba(184,134,11,0.1)_75%,transparent_100%)] animate-rotate-slow" />
            </div>

            {/* Main Content Area */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center"
            >
                {/* Custom Ankh Eye Icon */}
                <div className="mb-12">
                    <AnkhEye className="w-32 h-32 md:w-44 md:h-44" />
                </div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-cinzel text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#B8860B] mb-8 tracking-[0.2em] leading-tight drop-shadow-[0_0_30px_rgba(184,134,11,0.3)] animate-gradient-shift bg-gradient-to-r from-[#B8860B] via-[#E6C288] to-[#B8860B] bg-clip-text text-transparent"
                >
                    COMES TO LIFE
                </motion.h1>

                <p
                    className="font-body text-lg md:text-2xl mb-12 max-w-4xl leading-relaxed tracking-wider drop-shadow-lg opacity-90"
                    style={{ color: 'var(--hero-subtitle)' }}
                >
                    An interactive journey through ancient Egypt where history breathes,<br className="hidden md:block" />
                    stories branch, and mysteries await your discovery.
                </p>

                <div
                    className="flex flex-wrap justify-center gap-4 text-[10px] md:text-xs tracking-[0.4em] mb-14 uppercase font-cinzel"
                    style={{ color: 'var(--hero-tags)' }}
                >
                    <span className="px-3 py-1 border border-[#B8860B]/20 rounded-full hover:bg-[#B8860B]/5 transition-colors">Digital Humanities</span>
                    <span className="px-3 py-1 border border-[#B8860B]/20 rounded-full hover:bg-[#B8860B]/5 transition-colors">Interactive Storytelling</span>
                    <span className="px-3 py-1 border border-[#B8860B]/20 rounded-full hover:bg-[#B8860B]/5 transition-colors">Cultural Heritage</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                    <EgyptianButton
                        variant="gold"
                        size="lg"
                        showShimmer
                        className="min-w-[280px]"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        BEGIN YOUR JOURNEY
                    </EgyptianButton>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-12 z-20 flex flex-col items-center text-[#B8860B]/60 hover:text-[#B8860B] transition-colors cursor-pointer group"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.6em] mb-4 font-cinzel">Descend</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </motion.div>
        </section>
    );
};
