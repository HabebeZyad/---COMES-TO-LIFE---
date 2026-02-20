import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface EgyptianButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'gold';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    showShimmer?: boolean;
}

const EgyptianButton = forwardRef<HTMLButtonElement, EgyptianButtonProps>(
    ({ className, variant = 'default', size = 'default', showShimmer = false, ...buttonProps }, ref) => {
        const variants = {
            default: "bg-[#B8860B] text-black hover:bg-[#966F09] shadow-gold-sm hover:shadow-gold-md",
            gold: "bg-[var(--egyptian-gold)] text-black shadow-[0_4px_30px_var(--egyptian-gold-glow),0_0_50px_rgba(189,144,36,0.4)] hover:bg-[var(--egyptian-gold-hover)] hover:shadow-[0_8px_40px_rgba(189,144,36,0.9)] border border-white/20",
            outline: "border border-[#B8860B]/50 bg-transparent hover:bg-[#B8860B]/10 text-[#B8860B]",
            ghost: "hover:bg-white/5 text-[#B8860B]/80 hover:text-[#B8860B]",
        };

        const sizes = {
            default: "h-12 px-8 py-3 text-sm",
            sm: "h-9 px-4 text-xs",
            lg: "h-14 px-12 text-lg",
            icon: "h-10 w-10",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-cinzel font-bold tracking-[0.2em] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 disabled:opacity-50 disabled:pointer-events-none uppercase relative overflow-hidden group",
                    variants[variant as keyof typeof variants],
                    sizes[size],
                    showShimmer && "shimmer-effect",
                    className
                )}
                {...(buttonProps as any)}
            >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                    {buttonProps.children}
                </span>

                {/* Corner Accents - subtle glow */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 rounded-tl-full" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 rounded-br-full" />
            </motion.button>
        );
    }
);

EgyptianButton.displayName = "EgyptianButton";

export { EgyptianButton };
