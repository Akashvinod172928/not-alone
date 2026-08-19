"use client";

import React from "react";
import { Sparkles, Calendar, MessageCircleHeart, Coins } from "lucide-react";

export const BigValueProp: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Art */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/40 via-slate-900 to-slate-950 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Icon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-rose-300 border border-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Not Alone Promise</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.15] text-white">
          Your time. <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-[#FF3B7B] to-blue-400">
            Your conversations.
          </span>{" "}
          Your choice.
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
          Not Alone gives you a simple way to be available for conversations. Choose when you&apos;re available, meet people through conversation, and earn for the time you spend talking.
        </p>

        {/* 3 Spacious Key Pillers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B7B]/20 text-[#FF3B7B] flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Total Flexibility</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No shift commitments or mandatory hours. Be available whenever you feel like having a conversation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <MessageCircleHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Human Connection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engage with diverse individuals looking for a welcoming voice, a good listener, or a fresh perspective.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fair Compensation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Turn your conversational skills and spare time into real financial earnings with direct payouts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
