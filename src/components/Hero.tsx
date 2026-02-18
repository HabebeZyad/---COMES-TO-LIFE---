import { ChevronDown, Play } from 'lucide-react';
import heroBg from '../assets/hero-tomb.jpg';

export const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-5xl mx-auto flex flex-col items-center animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">

                {/* Eye of Horus Icon - Clean, Gold, No Glow */}
                <div className="mb-6 opacity-0 animate-in fade-in slide-in-from-top-5 duration-1000 delay-300 fill-mode-forwards">
                    <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-24 md:h-24 text-[#D4AF37]">
                        <path
                            fill="currentColor"
                            d="M12,4.5C7,4.5,2.73,7.61,1,12c1.73,4.39,6,7.5,11,7.5s9.27-3.11,11-7.5C21.27,7.61,17,4.5,12,4.5z M12,17 c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z M12,9c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,9,12,9z"
                        />
                        {/* Adding the 'markings' of the Eye of Horus for better accuracy if sticking to one icon */}
                        <path fill="currentColor" d="M22.5 12C20.8 7.2 16.7 4 12 4C7.3 4 3.2 7.2 1.5 12C3.2 16.8 7.3 20 12 20C16.7 20 20.8 16.8 22.5 12Z" opacity="0.1" />
                    </svg>
                </div>

                <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] mb-4 tracking-wider leading-tight">
                    COMES TO LIFE
                </h1>

                <p className="font-lato text-lg md:text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed tracking-wide shadow-black drop-shadow-md">
                    An interactive journey through ancient Egypt where history breathes, stories<br className="hidden md:block" /> branch, and mysteries await your discovery.
                </p>

                <div className="text-stone-400 text-xs md:text-sm tracking-[0.2em] mb-12 uppercase font-lato">
                    Digital Humanities • Interactive Storytelling • Cultural Heritage
                </div>

                <button className="group relative px-8 py-3 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0f0a00] font-cinzel font-bold text-lg tracking-[0.15em] rounded-[2px] transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-3">
                        <Play className="w-4 h-4 fill-black" />
                        BEGIN YOUR JOURNEY
                    </span>
                </button>
            </div>

            {/* Scroll indicator - Simple text */}
            <div className="absolute bottom-10 z-20 flex flex-col items-center text-stone-400 hover:text-white transition-colors cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-cinzel">Explore</span>
                <ChevronDown className="w-5 h-5" />
            </div>
        </div>
    );
};
