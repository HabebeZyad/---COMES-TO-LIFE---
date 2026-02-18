import { useState, useEffect } from 'react';
import { Eye, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Manga', href: '#manga' },
        { name: 'Stories', href: '#stories' },
        { name: 'Games', href: '#games' },
        { name: 'Period Maps', href: '#maps' },
        { name: 'Scanner', href: '#scanner' },
        { name: 'Profile', href: '#profile' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4",
            scrolled ? "bg-[#050505]/95 backdrop-blur-lg border-b border-[#D4AF37]/20" : "bg-gradient-to-b from-black/80 to-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3 text-[#D4AF37] hover:text-white transition-colors cursor-pointer">
                    <Eye className="w-5 h-5" />
                    <span className="font-cinzel font-bold text-sm tracking-[0.2em]">
                        COMES TO LIFE
                    </span>
                </div>

                {/* Links Section - Simple Clean Layout */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-6 text-stone-400 text-xs uppercase tracking-wider font-cinzel">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-[#D4AF37] transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-white/10 hidden lg:block" />

                    <button
                        onClick={() => setAudioEnabled(!audioEnabled)}
                        className="text-stone-400 hover:text-[#D4AF37] transition-colors"
                        aria-label="Toggle Audio"
                    >
                        {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
