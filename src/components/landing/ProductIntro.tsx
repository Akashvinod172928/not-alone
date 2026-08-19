"use client";

import React from "react";

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 border-y border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Subtle Brand Accent Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider uppercase shadow-xs">
          <span>Human Connection</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Sometimes, you just need <br className="hidden sm:block" />
          <span className="text-[#FF3B7B]">someone to talk to.</span>
        </h2>

        {/* Editorial Body */}
        <p className="text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
          Not Alone is built around simple human conversations. No complicated expectations. Just find someone and start talking.
        </p>

        {/* Spacious Divider Accent */}
        <div className="pt-6 flex justify-center">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#FF3B7B] to-[#2563EB] opacity-70"></div>
        </div>

      </div>
    </section>
  );
};
