import { useState, useEffect } from 'react';
import {
    Eye,
    Volume2,
    VolumeX,
    Menu,
    X,
    BookOpen,
    ScrollText,
    Gamepad2,
    Map,
    ScanLine,
    User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Manga', href: '#manga', icon: BookOpen },
    { name: 'Stories', href: '#stories', icon: ScrollText },
    { name: 'Games', href: '#games', icon: Gamepad2 },
    { name: 'Period Maps', href: '#maps', icon: Map },
    { name: 'Scanner', href: '#scanner', icon: ScanLine },
    { name: 'Profile', href: '#profile', icon: User },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const containerVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            x: '100%',
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 }
    };

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-6 md:px-10 py-4",
                scrolled
                    ? "bg-black/90 backdrop-blur-md border-b border-[#B8860B]/30 py-3"
                    : "bg-gradient-to-b from-black/80 to-transparent py-5"
            )}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Brand Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 text-[#B8860B] hover:text-[#E6C288] transition-colors cursor-pointer group"
                    >
                        <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-cinzel font-bold text-sm tracking-[0.25em]">
                            COMES TO LIFE
                        </span>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-2 text-stone-300 hover:text-[#B8860B] transition-colors duration-300 relative group text-xs uppercase tracking-[0.2em] font-cinzel"
                                >
                                    <link.icon className="w-3.5 h-3.5" />
                                    <span className="hidden xl:inline">{link.name}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <div className="h-4 w-px bg-[#B8860B]/20 hidden lg:block" />

                        <div className="flex items-center gap-2">
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

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden text-stone-400 hover:text-[#D4AF37] transition-all duration-300 p-2 hover:bg-white/5 rounded-full"
                                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isMobileMenuOpen ? "close" : "open"}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                    </motion.div>
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0A] border-l border-[#D4AF37]/20 z-[80] lg:hidden flex flex-col pt-24 px-8"
                        >
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        variants={itemVariants}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-4 text-stone-400 hover:text-[#D4AF37] transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all">
                                            <link.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-cinzel text-xs uppercase tracking-[0.2em]">
                                            {link.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-auto mb-12 pt-8 border-t border-[#D4AF37]/10"
                            >
                                <p className="text-[10px] text-stone-500 font-cinzel tracking-widest text-center uppercase">
                                    Ancient Egypt Revisited
                                </p>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
