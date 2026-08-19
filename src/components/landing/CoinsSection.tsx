"use client";

import React from "react";
import { Coins, Sparkles, Clock } from "lucide-react";

export const CoinsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B7B]">
            Simple Economics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple conversations. <span className="text-[#FF3B7B]">Simple pricing.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto">
            Transparent, straightforward coin system designed for flexible usage without long subscriptions.
          </p>
        </div>

        {/* Minimal Coin Card */}
        <div className="max-w-sm mx-auto bg-gradient-to-b from-white to-[#FFF0F5]/40 rounded-3xl p-8 border border-slate-200 shadow-lg relative overflow-hidden text-center group hover:border-[#FF3B7B]/40 transition-all">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F5] text-[#FF3B7B] text-xs font-bold mb-6">
            <Coins className="w-3.5 h-3.5" />
            <span>Current Starter Coin Package</span>
          </div>

          {/* Amount & Price */}
          <div className="space-y-2 mb-6">
            <div className="text-5xl font-black text-slate-900 tracking-tight">
              50 <span className="text-2xl font-bold text-slate-500">Coins</span>
            </div>
            <div className="text-3xl font-extrabold text-[#FF3B7B]">
              ₹25
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8 bg-white/80 p-3.5 rounded-2xl border border-slate-100">
            Use coins to start new conversations whenever you want to talk.
          </p>

          {/* Notice: Payments Coming Soon */}
          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>In-app payments coming soon</span>
          </div>

        </div>

      </div>
    </section>
  );
};
