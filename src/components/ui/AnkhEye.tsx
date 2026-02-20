import { motion } from 'framer-motion';

export const AnkhEye = ({ className = "" }: { className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`relative flex items-center justify-center ${className}`}
        >
            {/* Pulsing Outer Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-full h-full bg-[#B8860B]/20 rounded-full blur-3xl"
            />

            <svg viewBox="0 0 100 100" className="w-full h-full text-[#B8860B] drop-shadow-[0_0_20px_rgba(184,134,11,0.6)]">
                {/* Detailed Eye of Horus (𓂀) Reconstructed Path */}
                {/* Eye and Pupil */}
                <path
                    fill="currentColor"
                    d="M15,45 Q50,15 85,45 Q50,75 15,45 M42,45 A8,8 0 1,1 58,45 A8,8 0 1,1 42,45"
                />
                {/* Eyebrow */}
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    d="M25,25 Q50,10 75,25"
                />
                {/* Teardrop markings */}
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    d="M45,60 L45,90"
                />
                {/* Spiral tail part */}
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    d="M55,60 Q85,60 85,80 T65,100"
                />

                {/* Subtle Ankh integration (loop at top, bar middle) */}
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    className="opacity-20"
                    d="M50,10 Q65,10 65,25 Q65,40 50,40 Q35,40 35,25 Q35,10 50,10 M30,50 L70,50"
                />
            </svg>

            {/* Light Rays Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: i * 60 }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            scale: [1, 1.5, 1],
                            rotate: i * 60 + 20
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                        className="absolute top-1/2 left-1/2 w-1 h-[200%] bg-gradient-to-b from-[#B8860B]/40 to-transparent origin-top -translate-x-1/2 -translate-y-1/2 blur-[2px]"
                    />
                ))}
            </div>
        </motion.div>
    );
};
