import { useState, useEffect } from 'react';
import { Eye, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Manga', href: '#manga' },
    { name: 'Stories', href: '#stories' },
    { name: 'Games', href: '#games' },
    { name: 'Period Maps', href: '#maps' },
    { name: 'Scanner', href: '#scanner' },
    { name: 'Profile', href: '#profile' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 py-4",
            scrolled
                ? "bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30 py-3"
                : "bg-gradient-to-b from-black/80 to-transparent py-5"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand Logo */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 text-[#D4AF37] hover:text-[#E6C288] transition-colors cursor-pointer group"
                >
                    <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-cinzel font-bold text-sm tracking-[0.25em]">
                        COMES TO LIFE
                    </span>
                </motion.div>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <div className="hidden lg:flex items-center gap-8 text-stone-400 text-[10px] uppercase tracking-[0.2em] font-cinzel">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-[#D4AF37] transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-[#D4AF37]/20 hidden lg:block" />

                    {/* Audio Toggle */}
                    <button
                        onClick={() => setAudioEnabled(!audioEnabled)}
                        className="text-stone-400 hover:text-[#D4AF37] transition-all duration-300 p-2 hover:bg-white/5 rounded-full"
                        aria-label={audioEnabled ? "Disable Audio" : "Enable Audio"}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={audioEnabled ? "on" : "off"}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </nav>
    );
}
