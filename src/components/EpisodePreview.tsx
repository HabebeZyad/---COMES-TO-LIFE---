import { BookOpen, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import tombImg from '../assets/hero-tomb.jpg';

export const EpisodePreview = () => {
    return (
        <section id="episode" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden text-white border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 space-y-8"
                >
                    <div className="text-[#D4AF37] font-bold tracking-[0.3em] text-[10px] uppercase mb-2 ml-1">
                        Latest Release
                    </div>

                    <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                        EPISODE 3:<br />
                        <span className="text-[#D4AF37]">THE SCRIBE WHO LIED</span>
                    </h2>

                    <p className="font-lato text-stone-300 leading-relaxed text-lg max-w-xl">
                        In the sacred House of Life, where all knowledge is preserved, young scribe Kiya discovers that her mentor has been falsifying royal records for decades. The truth about the Battle of Kadesh—and the fate of Egypt—lies in her hands.
                    </p>

                    <div className="space-y-4 pt-2">
                        {[
                            "10 illustrated manga panels with cinematic visuals",
                            "Branching moral choices that affect gameplay",
                            "New characters and deep lore connections",
                            "Multiple endings based on your choices"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="flex items-center gap-4 group"
                            >
                                <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                                    <Check className="w-3 h-3 text-[#D4AF37]" />
                                </span>
                                <span className="font-lato text-stone-400 group-hover:text-stone-200 transition-colors text-base">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-8 px-8 py-4 bg-[#D4AF37] hover:bg-[#E6C288] text-black font-cinzel font-bold tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center gap-3"
                    >
                        <BookOpen className="w-5 h-5" />
                        READ EPISODE 3
                    </motion.button>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative group w-full"
                >
                    <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-[#D4AF37]/40">
                        <div className="aspect-[4/3] md:aspect-video w-full relative overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 10, ease: "linear" }}
                                src={tombImg}
                                alt="Episode 3 Preview"
                                className="w-full h-full object-cover"
                            />
                            {/* Cinematic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                        </div>

                        {/* Quote Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-10 text-center">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 1 }}
                                className="h-px w-24 bg-[#D4AF37]/60 mx-auto mb-6 origin-center"
                            />
                            <p className="font-cinzel text-xl md:text-2xl text-[#E6C288] italic tracking-[0.05em] drop-shadow-md">
                                "Some truths are buried deeper than Pharaohs"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
