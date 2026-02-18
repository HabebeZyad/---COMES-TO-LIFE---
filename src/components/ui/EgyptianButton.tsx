import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-[#D4AF37] text-black hover:bg-[#C5A028] shadow-sm",
                outline: "border border-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/10 text-[#D4AF37]",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface EgyptianButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const EgyptianButton = forwardRef<HTMLButtonElement, EgyptianButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        // Integrating motion for interaction
        const MotionButton = motion.button;

        return (
            <MotionButton
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                {...(props as HTMLMotionProps<"button">)}
            >
                {props.children}
            </MotionButton>
        );
    }
);
EgyptianButton.displayName = "EgyptianButton";

export { EgyptianButton, buttonVariants };
