import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white py-16 border-t border-white/5 relative z-10">
            <div className="max-w-4xl mx-auto text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center gap-2 mb-6"
                >
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                </motion.div>

                <h3 className="font-cinzel text-xl font-bold tracking-[0.3em] text-[#D4AF37] mb-8">
                    COMES TO LIFE
                </h3>

                <p className="font-lato text-stone-400 text-sm mb-4 max-w-lg mx-auto leading-relaxed">
                    An interactive journey through digital humanities and ancient narratives,
                    reimagining cultural heritage through modern technology.
                </p>

                <div className="h-px w-16 bg-[#D4AF37]/20 mx-auto mb-8" />

                <div className="text-stone-600 text-[10px] uppercase tracking-[0.2em] font-cinzel">
                    © {new Date().getFullYear()} COMES TO LIFE. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
};
