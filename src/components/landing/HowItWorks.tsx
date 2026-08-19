"use client";

import React from "react";
import { UserPlus, Users, MessageSquare } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Open Not Alone",
      description: "Create your account and enter a space designed for simple conversations.",
      icon: UserPlus,
      accent: "from-[#FF3B7B]/10 to-[#FF3B7B]/5 text-[#FF3B7B]",
      border: "hover:border-[#FF3B7B]/30",
    },
    {
      number: "02",
      title: "Find someone",
      description: "See people who are available and ready to talk.",
      icon: Users,
      accent: "from-[#2563EB]/10 to-[#2563EB]/5 text-[#2563EB]",
      border: "hover:border-[#2563EB]/30",
    },
    {
      number: "03",
      title: "Start talking",
      description: "Send a message and let the conversation begin.",
      icon: MessageSquare,
      accent: "from-pink-500/10 to-purple-500/5 text-pink-600",
      border: "hover:border-pink-300",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B7B]">
            Three Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Not Alone Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            From opening the app to starting your first conversation, the experience is effortless.
          </p>
        </div>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-28 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#FF3B7B]/20 via-[#2563EB]/20 to-[#FF3B7B]/20 -z-0"></div>

          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className={`relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group ${step.border} flex flex-col justify-between`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-extrabold text-slate-300 group-hover:text-slate-900 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#FF3B7B] transition-colors">
                  <span>Step {step.number} of 03</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
