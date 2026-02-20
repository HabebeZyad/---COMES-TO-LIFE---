import { BookOpen, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import tombImg from '../assets/hero-tomb.jpg';
import { EgyptianButton } from './ui/EgyptianButton';

export const EpisodePreview = () => {
    return (
        <section id="episode" className="py-32 px-6 bg-[#050505] relative overflow-hidden text-white border-y border-[#B8860B]/20">
            {/* Background Texture */}
            <div className="absolute inset-0 hieroglyph-pattern opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 space-y-10"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-[#B8860B]" />
                        <div className="text-[#B8860B] font-bold tracking-[0.5em] text-[10px] uppercase">
                            New Chapter Unveiled
                        </div>
                    </div>

                    <h2 className="font-cinzel text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                        EPISODE 3:<br />
                        <span className="text-gold-gradient">THE SCRIBE WHO LIED</span>
                    </h2>

                    <p className="font-body text-stone-300 leading-relaxed text-xl max-w-2xl opacity-80">
                        In the sacred House of Life, where all knowledge is preserved, young scribe Kiya discovers that her mentor has been falsifying royal records for decades. The truth about the Battle of Kadesh—and the fate of Egypt—lies in her hands.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        {[
                            "10 Illustrated Panels",
                            "Branching Moral Choices",
                            "Cinematic Visual Lore",
                            "Multiple Secret Endings"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="flex items-center gap-4 group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    className="flex-shrink-0 w-8 h-8 rounded-full border border-[#B8860B]/30 flex items-center justify-center bg-[#B8860B]/5 group-hover:bg-[#B8860B]/20 transition-colors"
                                >
                                    <Check className="w-4 h-4 text-[#B8860B]" />
                                </motion.div>
                                <span className="font-body text-stone-400 group-hover:text-white transition-colors text-lg">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <EgyptianButton
                        variant="gold"
                        size="lg"
                        showShimmer
                        className="mt-6"
                    >
                        <BookOpen className="w-5 h-5" />
                        READ EPISODE 3
                    </EgyptianButton>
                </motion.div>

                {/* Visual Content - Enhanced Frame */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 2 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 relative group w-full"
                >
                    {/* Decorative Frame Elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#B8860B] z-20 pointer-events-none" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#B8860B] z-20 pointer-events-none" />
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#B8860B]/20 z-20" />
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#B8860B]/20 z-20" />

                    <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-[#B8860B]/40 transition-all duration-1000">
                        <div className="aspect-[4/5] md:aspect-video w-full relative overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 1.5 }}
                                src={tombImg}
                                alt="Episode 3 Preview"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Cinematic Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_100%)] opacity-60" />
                        </div>

                        {/* Quote Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 1 }}
                                className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mb-8"
                            />
                            <p className="font-cinzel text-2xl md:text-3xl text-white italic tracking-[0.05em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-4 group-hover:translate-y-0 transition-transform">
                                "Some truths are buried deeper than Pharaohs"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
