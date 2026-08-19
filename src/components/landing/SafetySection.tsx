"use client";

import React from "react";
import { UserCheck, ShieldAlert, Flag } from "lucide-react";

export const SafetySection: React.FC = () => {
  const principles = [
    {
      title: "Your choice",
      description: "You decide who you talk to. Take control of your interactions at every step.",
      icon: UserCheck,
      color: "text-[#2563EB] bg-[#EFF6FF]",
    },
    {
      title: "Block",
      description: "Leave conversations that don't feel right instantly with a single tap.",
      icon: ShieldAlert,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Report",
      description: "Report inappropriate behavior to help maintain a respectful community environment.",
      icon: Flag,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <section id="safety" className="py-24 sm:py-32 bg-slate-50/70 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Safety & Control
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Talk on <span className="text-[#2563EB]">your terms.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Not Alone equips you with clear, powerful controls to manage your safety and comfort.
          </p>
        </div>

        {/* 3 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Responsible Safety Note */}
        <div className="mt-12 max-w-2xl mx-auto bg-white p-4 rounded-2xl border border-slate-200/80 text-center text-xs text-slate-500">
          We encourage all members to maintain respectful standards. Built-in blocking and reporting tools ensure you remain in complete control of your experience.
        </div>

      </div>
    </section>
  );
};
