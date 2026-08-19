import React from "react";
import { ArrowRight, Download } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  showDownloadIcon?: boolean;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      showArrow = false,
      showDownloadIcon = false,
      href,
      download,
      target,
      rel,
      children,
      className = "",
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-brand transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#FF3B7B] text-white hover:bg-[#E02E69] focus:ring-[#FF3B7B] shadow-md shadow-[#FF3B7B]/20 hover:shadow-lg hover:shadow-[#FF3B7B]/30 border border-transparent",
      secondary:
        "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 focus:ring-slate-400 shadow-sm",
      outline:
        "bg-transparent text-[#2563EB] border border-[#2563EB]/30 hover:bg-[#2563EB]/5 focus:ring-[#2563EB]",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300",
    };

    const sizes = {
      sm: "h-11 px-4 text-sm gap-2",
      md: "h-[54px] px-6 text-base gap-2.5",
      lg: "h-[58px] px-8 text-lg gap-3",
    };

    const content = (
      <>
        {showDownloadIcon && <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />}
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          download={download}
          target={target}
          rel={rel}
          onClick={onClick as any}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
