import { Eye } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10 relative z-10">
            <div className="max-w-4xl mx-auto text-center px-4">
                <div className="flex justify-center items-center gap-2 mb-4 animate-in fade-in zoom-in duration-700">
                    <Eye className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <h3 className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#D4AF37] mb-6">
                    COMES TO LIFE
                </h3>

                <p className="font-lato text-stone-500 text-sm mb-2">
                    An innovative fusion of digital humanities, interactive storytelling, game design, and cultural heritage preservation.
                </p>

                <p className="font-lato text-stone-600 text-xs mt-4">
                    Designed for academic presentation, research dissemination, and graduate showcase.
                </p>

                <div className="mt-8 text-stone-700 text-[10px] uppercase tracking-widest">
                    © 2026 CONSTANTINE. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
