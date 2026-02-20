import { BookOpen, ScrollText, Globe2, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Interactive Manga",
        subtitle: "Episode 3: The Scribe Who Lied",
        description: "Experience branching narratives where your choices shape history itself. Discover secrets, confront lies, and determine the fate of ancient Egypt.",
        icon: BookOpen,
        iconColor: "text-amber-500",
        BgColor: "bg-amber-500/10"
    },
    {
        title: "Literature & Stories",
        subtitle: "Bring History to Life",
        description: "Explore historical tales from the Old Kingdom to the Second Intermediate Period with realistic illustrations and interactive storytelling.",
        icon: ScrollText,
        iconColor: "text-[#B8860B]",
        BgColor: "bg-[#B8860B]/10"
    },
    {
        title: "Interactive Period Maps",
        subtitle: "Four Eras of Egypt",
        description: "Navigate through Old Kingdom, First Intermediate, Middle Kingdom, and Second Intermediate periods with interactive maps, timelines, and key historical figures.",
        icon: Globe2,
        iconColor: "text-cyan-500",
        BgColor: "bg-cyan-500/10"
    },
    {
        title: "AR Hieroglyph Scanner",
        subtitle: "Decode the Ancient Language",
        description: "Point your camera at hieroglyphs to translate, animate, and unlock hidden lore. Discover the stories carved in stone by the ancients.",
        icon: ScanLine,
        iconColor: "text-emerald-500",
        BgColor: "bg-emerald-500/10"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Decorative Patterns */}
            <div className="absolute inset-0 hieroglyph-pattern opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B8860B]/5 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B8860B]/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <div className="text-[#B8860B] font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Core Experiences</div>
                    <h2 className="font-cinzel text-4xl md:text-6xl text-white mb-8 tracking-[0.2em] leading-tight">
                        DISCOVER THE <span className="text-gold-gradient">ANCIENT WORLD</span>
                    </h2>
                    <p className="font-body text-stone-400 max-w-3xl mx-auto leading-relaxed text-xl opacity-80">
                        Four interconnected modes that bring ancient Egypt to life through interactive storytelling, cooperative gameplay, and immersive technology.
                    </p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mt-8 text-[#B8860B]/20 text-3xl font-cinzel"
                    >
                        ⌄
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 rounded-2xl glass-morphism hover:border-[#B8860B]/40 transition-all duration-700 overflow-hidden"
                        >
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B8860B]/0 group-hover:border-[#B8860B]/40 transition-all duration-500 rounded-tl-xl" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B8860B]/0 group-hover:border-[#B8860B]/40 transition-all duration-500 rounded-br-xl" />

                            <div className={`mb-8 inline-flex p-5 rounded-2xl ${feature.BgColor} transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(184,134,11,0.2)]`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconColor} group-hover:animate-pulse`} />
                            </div>

                            <h3 className="font-cinzel text-3xl text-white mb-3 uppercase tracking-wider group-hover:text-[#B8860B] transition-colors duration-500">
                                {feature.title}
                            </h3>
                            <div className={`text-[11px] font-bold ${feature.iconColor} mb-8 uppercase tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-opacity`}>
                                {feature.subtitle}
                            </div>

                            <p className="font-body text-stone-400 leading-relaxed text-lg group-hover:text-stone-200 transition-colors duration-500">
                                {feature.description}
                            </p>

                            {/* Shine Sweep Animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#B8860B] to-transparent group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
