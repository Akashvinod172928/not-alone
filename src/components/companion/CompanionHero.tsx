"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowDown, MessageCircle, ShieldCheck, HeartHandshake, Sparkles, Clock, Wallet } from "lucide-react";

export const CompanionHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-white">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF3B7B]/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-pink-100/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-[#FF3B7B] border border-rose-200/80 shadow-xs font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FF3B7B]" />
              <span>NOT ALONE COMPANIONS</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Be someone <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3B7B] via-rose-500 to-[#2563EB]">
                  worth talking to.
                </span>
              </h1>

              {/* Supporting headline */}
              <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-snug">
                Turn conversations into connections — and earn while you&apos;re at it.
              </p>

              {/* Supporting paragraph */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Become a Not Alone Companion and make yourself available for people who simply want someone to talk to.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/companions/apply"
                className="w-full sm:w-auto text-base font-bold shadow-lg shadow-rose-500/20 px-8 py-4 bg-[#FF3B7B] hover:bg-[#E02E69] text-white"
              >
                Become a Companion
              </Button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors border border-slate-200 hover:border-slate-300 rounded-full bg-white shadow-xs"
              >
                How it works
                <ArrowDown className="w-4 h-4 text-[#FF3B7B] animate-bounce" />
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">Your Schedule</p>
                  <p className="text-[11px] text-slate-500">Log on anytime</p>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Wallet className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">Earn per Minute</p>
                  <p className="text-[11px] text-slate-500">Direct payouts</p>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-[#FF3B7B] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">Safe Space</p>
                  <p className="text-[11px] text-slate-500">Strict rules</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Warm Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5]">
                {/* Indian natural conversational photography */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                  alt="Not Alone Companion having a friendly phone conversation"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating Glassmorphism Badge: Live Companion Status */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Companions Online</p>
                    <p className="text-[10px] font-medium text-slate-500">Ready to converse</p>
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-[#FF3B7B]">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                        alt="Companion profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-900 truncate">Ananya, 24</p>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                          Available
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 truncate mt-0.5">
                        &ldquo;Love books, cinema & meaningful conversations.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Secondary Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 items-center gap-3 max-w-xs z-10">
                <div className="w-10 h-10 rounded-xl bg-[#FF3B7B]/20 text-[#FF3B7B] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Genuine Connection</p>
                  <p className="text-[11px] text-slate-400">Pure human conversation</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
