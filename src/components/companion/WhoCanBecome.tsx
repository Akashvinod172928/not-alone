"use client";

import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const WhoCanBecome: React.FC = () => {
  const criteria = [
    "Comfortable talking with new people",
    "Respectful and patient in every conversation",
    "Good communication and active listening skills",
    "Reliable and present whenever you switch your status to available",
    "Comfortable using a smartphone app",
    "Willing to strictly follow Not Alone's community guidelines",
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3B7B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              Eligibility & Profile Fit
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              You don&apos;t need to be an expert. You just need to be good company.
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We look for authentic individuals who bring warmth, empathy, and respect to everyday conversations.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {criteria.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FF3B7B] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          {/* Official Qualification Disclaimer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 relative z-10">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Eligibility and approval are subject to Not Alone&apos;s onboarding and identity verification requirements.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
