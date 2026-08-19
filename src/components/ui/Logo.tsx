import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-lg gap-2",
    md: "text-xl gap-2.5",
    lg: "text-2xl gap-3",
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center font-bold tracking-tight text-slate-900 group transition-opacity hover:opacity-90 ${sizeClasses[size]} ${className}`}
    >
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF3B7B] to-[#2563EB] p-[2px] shadow-sm transition-transform duration-300 group-hover:scale-105 ${iconSizes[size]}`}>
        <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle dual bubble logo mark */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF3B7B] -translate-x-1 translate-y-0.5 opacity-90"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB] translate-x-1 -translate-y-0.5 opacity-85 mix-blend-multiply"></div>
        </div>
      </div>
      <span className="font-extrabold tracking-tight">
        Not<span className="text-[#FF3B7B]">Alone</span>
      </span>
    </Link>
  );
};
