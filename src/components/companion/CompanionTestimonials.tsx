"use client";

import React from "react";
import { companionTestimonials } from "@/config/companionConfig";
import { Quote, Sparkles } from "lucide-react";

export const CompanionTestimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
            Companion Perspectives
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear from active Companions
          </h2>

          <p className="text-slate-600 text-base">
            Real stories from people who turn their conversations into value on Not Alone.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {companionTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-subtle flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#FF3B7B]/40" />
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.companionSince}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
