import { Eye, Instagram, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-[#B8860B]/20 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B8860B]/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Column 1: Brand & Social */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-[#B8860B]/30 flex items-center justify-center group-hover:bg-[#B8860B]/10 transition-all duration-500">
                                <Eye className="w-6 h-6 text-[#B8860B]" />
                            </div>
                            <span className="font-cinzel font-bold text-lg tracking-[0.2em] text-[#B8860B]">
                                COMES TO LIFE
                            </span>
                        </div>
                        <p className="font-body text-stone-400 leading-relaxed text-sm max-w-xs">
                            An interactive journey through digital humanities and ancient narratives, reimagining cultural heritage through modern technology and storytelling.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-[#B8860B] hover:border-[#B8860B]/40 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Knowledge */}
                    <div className="space-y-8">
                        <h4 className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase">Knowledge</h4>
                        <ul className="space-y-4">
                            {['Interactive Manga', 'Historical Stories', 'Period Maps', 'AR Scanner', 'Cultural Heritage'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="font-body text-stone-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm">
                                        <div className="w-1 h-1 rounded-full bg-[#B8860B] scale-0 group-hover:scale-100 transition-transform" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Foundation */}
                    <div className="space-y-8">
                        <h4 className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase">Foundation</h4>
                        <ul className="space-y-4">
                            {['About Project', 'Contributors', 'Methodology', 'Education', 'Privacy Policy'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="font-body text-stone-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm">
                                        <div className="w-1 h-1 rounded-full bg-[#B8860B] scale-0 group-hover:scale-100 transition-transform" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-8">
                        <h4 className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase">Newsletter</h4>
                        <p className="font-body text-stone-400 text-sm leading-relaxed">
                            Subscribe to receive updates on new chapters and historical insights.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm font-body focus:outline-none focus:border-[#B8860B]/40 transition-all"
                            />
                            <button
                                aria-label="Subscribe to newsletter"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#B8860B] flex items-center justify-center text-black hover:bg-[#E6C288] transition-colors"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="text-stone-600 text-[10px] uppercase tracking-[0.3em] font-cinzel">
                        © {new Date().getFullYear()} COMES TO LIFE. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-cinzel text-stone-600">
                        <a href="#" className="hover:text-[#B8860B] transition-colors">Documentation</a>
                        <a href="#" className="hover:text-[#B8860B] transition-colors">Contact</a>
                        <a href="#" className="hover:text-[#B8860B] transition-colors">Licensing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
