import { BookOpen, ScrollText, Globe2, ScanLine } from 'lucide-react';

export const Features = () => {
    const features = [
        {
            title: "Interactive Manga",
            subtitle: "Episode 3: The Scribe Who Lied",
            description: "Experience branching narratives where your choices shape history itself. Discover secrets, confront lies, and determine the fate of ancient Egypt.",
            icon: BookOpen,
            iconColor: "text-amber-400",
            BgColor: "bg-amber-400/10"
        },
        {
            title: "Literature & Stories",
            subtitle: "Bring History to Life",
            description: "Explore historical tales from the Old Kingdom to the Second Intermediate Period with realistic illustrations and interactive storytelling.",
            icon: ScrollText,
            iconColor: "text-[#E6C288]", // Beige/Papyrus
            BgColor: "bg-[#E6C288]/10"
        },
        {
            title: "Interactive Period Maps",
            subtitle: "Four Eras of Egypt",
            description: "Navigate through Old Kingdom, First Intermediate, Middle Kingdom, and Second Intermediate periods with interactive maps, timelines, and key historical figures.",
            icon: Globe2,
            iconColor: "text-cyan-400",
            BgColor: "bg-cyan-400/10"
        },
        {
            title: "AR Hieroglyph Scanner",
            subtitle: "Decode the Ancient Language",
            description: "Point your camera at hieroglyphs to translate, animate, and unlock hidden lore. Discover the stories carved in stone by the ancients.",
            icon: ScanLine,
            iconColor: "text-emerald-400",
            BgColor: "bg-emerald-400/10"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <h2 className="font-cinzel text-3xl md:text-5xl text-[#D4AF37] mb-6 tracking-[0.1em]">
                        DISCOVER THE EXPERIENCE
                    </h2>
                    <p className="font-lato text-stone-400 max-w-2xl mx-auto leading-relaxed text-lg">
                        Four interconnected modes that bring ancient Egypt to life through interactive storytelling, cooperative gameplay, and immersive technology.
                    </p>
                    <div className="mt-4 text-gold/30 text-2xl animate-bounce">⌄</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold/30 overflow-hidden"
                        >
                            <div className={`mb-6 inline-flex p-4 rounded-xl ${feature.BgColor} transition-colors duration-500 group-hover:scale-110`}>
                                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                            </div>

                            <h3 className="font-cinzel text-2xl text-white mb-2 uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <div className={`text-xs font-bold ${feature.iconColor} mb-6 uppercase tracking-[0.15em] opacity-80`}>
                                {feature.subtitle}
                            </div>

                            <p className="font-lato text-stone-400 leading-relaxed text-base group-hover:text-stone-300 transition-colors">
                                {feature.description}
                            </p>

                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
