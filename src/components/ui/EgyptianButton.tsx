import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface EgyptianButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const EgyptianButton = forwardRef<HTMLButtonElement, EgyptianButtonProps>(
    ({ className, variant = 'default', size = 'default', ...props }, ref) => {
        const variants = {
            default: "bg-[#D4AF37] text-black hover:bg-[#C5A028] shadow-[0_0_15px_rgba(212,175,55,0.2)]",
            outline: "border border-[#D4AF37]/50 bg-transparent hover:bg-[#D4AF37]/10 text-[#D4AF37]",
            ghost: "hover:bg-white/5 text-[#D4AF37]/80 hover:text-[#D4AF37]",
        };

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 px-4 text-xs",
            lg: "h-14 px-10 text-lg",
            icon: "h-10 w-10",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm font-cinzel font-bold tracking-[0.1em] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...(props as any)}
            >
                {props.children}
            </motion.button>
        );
    }
);

EgyptianButton.displayName = "EgyptianButton";

export { EgyptianButton };
