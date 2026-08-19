"use client";

import React from "react";
import { Clock, UserPlus, Sparkles } from "lucide-react";

export const WhyNotAlone: React.FC = () => {
  const points = [
    {
      title: "Talk when you want.",
      description: "Whether it is late at night or during a busy afternoon, find people available when you are.",
      icon: Clock,
      color: "text-[#FF3B7B] bg-[#FFF0F5]",
    },
    {
      title: "Meet someone new.",
      description: "Break out of your usual loop and connect with people from different walks of life.",
      icon: UserPlus,
      color: "text-[#2563EB] bg-[#EFF6FF]",
    },
    {
      title: "Start with a simple message.",
      description: "No complex prompts, algorithm tests, or forced profiles. Just say hello.",
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/50 border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B7B]">
            Why Not Alone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conversation doesn&apos;t need a reason.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            We built Not Alone for straightforward, authentic human interactions.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${pt.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
