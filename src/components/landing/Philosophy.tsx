"use client";

import React from "react";

export const Philosophy: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-gradient-to-b from-white via-[#FFF0F5]/30 to-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B7B]">
          Product Philosophy
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Not every connection <br className="hidden sm:block" />
          <span className="text-[#FF3B7B]">needs a label.</span>
        </h2>

        <p className="text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
          Friendship. Conversation. A few minutes of your day. Not Alone doesn&apos;t tell you what a conversation has to become. It simply gives you a place to start one.
        </p>

        {/* Minimal Editorial Card */}
        <div className="pt-6">
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3B7B]"></span>
              No Pressure
            </span>
            <span className="w-px h-4 bg-slate-200"></span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
              Pure Conversation
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
