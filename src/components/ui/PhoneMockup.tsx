"use client";

import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  imageSrc?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageSrc,
  alt = "Not Alone Mobile App",
  children,
  className = "",
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={`relative mx-auto w-full max-w-[310px] sm:max-w-[330px] rounded-[48px] bg-slate-900 p-3.5 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-800/80 transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Side buttons mockup */}
      <div className="absolute -left-2 top-24 h-10 w-1 rounded-l-md bg-slate-700"></div>
      <div className="absolute -left-2 top-38 h-12 w-1 rounded-l-md bg-slate-700"></div>
      <div className="absolute -right-2 top-28 h-16 w-1 rounded-r-md bg-slate-700"></div>

      {/* Screen container */}
      <div className="relative w-full overflow-hidden rounded-[38px] bg-white text-slate-900 border border-slate-100 flex flex-col h-[620px] sm:h-[650px] shadow-inner">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-0 inset-x-0 z-30 flex justify-center pt-3 pb-2 bg-gradient-to-b from-white/90 to-transparent backdrop-blur-[2px] pointer-events-none">
          <div className="h-4 w-24 rounded-full bg-slate-950 flex items-center justify-between px-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500/80"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full h-full pt-8 pb-4 flex flex-col">
          {imageSrc && !imageError ? (
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover object-top"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            children
          )}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 inset-x-0 z-30 flex justify-center pointer-events-none">
          <div className="h-1 w-32 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};
