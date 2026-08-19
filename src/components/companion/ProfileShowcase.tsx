"use client";

import React from "react";
import { companionMockProfiles } from "@/config/companionConfig";
import { Globe2, MessageCircle, Star, Sparkles } from "lucide-react";

export const ProfileShowcase: React.FC = () => {
  return (
    <section id="profiles" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-100/70 px-3.5 py-1 rounded-full border border-rose-200">
            Companion Profile Preview
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How you appear on Not Alone
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Clean, respectful conversation cards designed to highlight your personality, languages, and availability.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companionMockProfiles.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Profile Card Header with Avatar */}
              <div className="p-6 space-y-4">
                
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={p.avatarUrl}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                    {p.isAvailable ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-700">Available</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        <span className="text-slate-600">Offline</span>
                      </>
                    )}
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{p.rating}</span>
                  </div>
                </div>

                {/* Info Block */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      {p.name}, <span className="text-slate-500 font-normal">{p.age}</span>
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {p.location}
                  </p>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-1.5 flex-wrap text-xs text-slate-600">
                  <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{p.languages.join(" · ")}</span>
                </div>

                {/* Short Introduction */}
                <p className="text-xs text-slate-600 line-clamp-3 italic leading-relaxed pt-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  &ldquo;{p.intro}&rdquo;
                </p>

              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  type="button"
                  disabled
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 cursor-default group-hover:bg-[#FF3B7B] group-hover:border-[#FF3B7B] group-hover:text-white transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Conversation Focus */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Not Alone companion profiles focus strictly on genuine conversation and human interest.
          </p>
        </div>

      </div>
    </section>
  );
};
