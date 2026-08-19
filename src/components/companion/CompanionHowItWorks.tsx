"use client";

import React from "react";
import { UserCheck, ShieldCheck, ToggleRight, Coins } from "lucide-react";

export const CompanionHowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Apply",
      description: "Submit your basic information and create your Companion profile.",
      icon: UserCheck,
      color: "from-rose-500 to-pink-500",
    },
    {
      step: "02",
      title: "Get Approved",
      description: "Complete the required onboarding and verification process.",
      icon: ShieldCheck,
      color: "from-blue-500 to-indigo-500",
    },
    {
      step: "03",
      title: "Go Available",
      description: "Choose when you're available to receive conversations.",
      icon: ToggleRight,
      color: "from-purple-500 to-indigo-500",
    },
    {
      step: "04",
      title: "Talk & Earn",
      description: "Have conversations through Not Alone and earn according to the platform's current Companion earning system.",
      icon: Coins,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-100/60 px-3.5 py-1 rounded-full border border-rose-200">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From application to your first payout, getting started as a Not Alone Companion is straightforward.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Large Number Watermark */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-slate-200 tracking-tighter font-mono">
                    {s.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#FF3B7B] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>Step {s.step} of 04</span>
                  <span className="text-[#FF3B7B]">Not Alone Onboarding</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
