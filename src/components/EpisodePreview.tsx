import { BookOpen } from 'lucide-react';
import tombImg from '../assets/hero-tomb.jpg'; // Using tomb image for now

export const EpisodePreview = () => {
    return (
        <section className="py-24 px-6 bg-[#0f1522] relative overflow-hidden text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Text Content */}
                <div className="flex-1 space-y-8 animate-in slide-in-from-left-10 duration-1000">
                    <div className="text-cyan-500 font-bold tracking-[0.2em] text-xs uppercase mb-2">Now Available</div>

                    <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-[#D4AF37] leading-tight">
                        EPISODE 3: THE SCRIBE WHO LIED
                    </h2>

                    <p className="font-lato text-gray-300 leading-relaxed text-lg max-w-xl">
                        In the sacred House of Life, where all knowledge is preserved, young scribe Kiya discovers that her mentor has been falsifying royal records for decades. The truth about the Battle of Kadesh—and the fate of Egypt—lies in her hands.
                    </p>

                    <ul className="space-y-4 font-lato text-gray-400 pt-4">
                        {[
                            "10 illustrated manga panels with cinematic visuals",
                            "Branching moral choices that affect gameplay",
                            "New characters and deep lore connections",
                            "Multiple endings based on your choices"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                                <span className="text-gold mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                                <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 px-8 py-3 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0f1522] font-cinzel font-bold tracking-[0.15em] rounded-[2px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center gap-3">
                        <BookOpen className="w-5 h-5" />
                        READ EPISODE 3
                    </button>
                </div>

                {/* Visual Content */}
                <div className="flex-1 relative group w-full">
                    <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/20 shadow-xl transition-shadow duration-500">
                        <div className="aspect-video w-full relative overflow-hidden">
                            <img
                                src={tombImg}
                                alt="Episode 3 Preview"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1522] via-transparent to-transparent opacity-90" />
                        </div>

                        {/* Quote Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 text-center">
                            <div className="h-px w-20 bg-[#D4AF37]/50 mx-auto mb-6" />
                            <p className="font-cinzel text-xl md:text-2xl text-[#E6C288] italic tracking-wide">
                                "SOME TRUTHS ARE BURIED DEEPER THAN PHARAOHS"
                            </p>
                        </div>
                    </div>
                    {/* Decorative Elements around image */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-3xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-3xl -z-10" />
                </div>
            </div>
        </section>
    )
}
