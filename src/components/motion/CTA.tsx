import { forwardRef,type ReactNode } from "react";

/**
 * Stable, premium CTA button.
 * - No infinite, looping, pulsing, or auto color animations.
 * - Animates ONLY on hover/active.
 * - Transform + opacity only. 250ms ease-out.
 */

type Variant = "primary" | "ghost";

interface CTAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium select-none " +
  "transition-[transform,box-shadow] duration-[250ms] ease-out will-change-transform " +
  "hover:scale-[1.035] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "text-primary-foreground shadow-[0_8px_24px_-12px_hsl(235_85%_55%/0.6)] " +
    "hover:shadow-[0_14px_36px_-12px_hsl(270_90%_60%/0.7)] " +
    "[background:var(--gradient-brand)]",
  ghost:
    "text-foreground hairline glass hover:bg-white/[0.04]",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export const CTA = forwardRef<HTMLAnchorElement, CTAProps>(
  ({ children, variant = "primary", size = "lg", className = "", ...rest }, ref) => {
    return (
      <a
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  },
);
CTA.displayName = "CTA";
