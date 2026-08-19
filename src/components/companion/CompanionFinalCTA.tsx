"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Sparkles, ArrowRight, Shield } from "lucide-react";

export const CompanionFinalCTA: React.FC = () => {
  return (
    <section className="relative">
      
      {/* Upper Primary Application Card */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-rose-500 via-[#FF3B7B] to-rose-600 p-8 sm:p-14 text-white text-center shadow-floating overflow-hidden">
            
            {/* Background Decorative Graphic */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Onboarding Open</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to become someone&apos;s next conversation?
              </h2>

              <p className="text-lg text-rose-50 font-medium">
                Join Not Alone as a Companion.
              </p>

              <div className="pt-4 flex flex-col items-center space-y-3">
                <Button
                  variant="secondary"
                  size="lg"
                  href="/companions/apply"
                  className="bg-white text-[#FF3B7B] hover:bg-slate-50 font-extrabold text-base px-10 py-4 shadow-xl hover:scale-[1.02] transition-all"
                >
                  Become a Companion
                  <ArrowRight className="w-5 h-5 ml-2 text-[#FF3B7B]" />
                </Button>

                <p className="text-xs text-rose-100 font-medium">
                  Apply in a few minutes.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Full-width Final Ending Banner */}
      <div className="bg-slate-950 py-20 border-t border-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300">
              Someone is looking for a conversation.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-[#FF3B7B] to-blue-400">
              You could be the person they talk to.
            </p>
          </div>

          <div>
            <Button
              variant="primary"
              size="lg"
              href="/companions/apply"
              className="bg-[#FF3B7B] hover:bg-[#E02E69] text-white font-bold text-base px-10 py-4 shadow-lg shadow-rose-500/25"
            >
              Become a Companion
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-2">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span>Subject to Not Alone&apos;s eligibility and community guidelines.</span>
          </div>

        </div>
      </div>

    </section>
  );
};
