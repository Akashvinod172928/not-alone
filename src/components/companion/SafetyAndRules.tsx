"use client";

import React from "react";
import { ShieldCheck, UserX, Flag, HeartHandshake, FileText, Check } from "lucide-react";

export const SafetyAndRules: React.FC = () => {
  const safetyPillars = [
    {
      icon: HeartHandshake,
      title: "Respect",
      description: "Treat every person with warmth, consideration, and dignity.",
    },
    {
      icon: ShieldCheck,
      title: "Boundaries",
      description: "Respect personal boundaries and conversation limits at all times.",
    },
    {
      icon: Flag,
      title: "Report",
      description: "Inappropriate behaviour can be reported instantly for fast review.",
    },
    {
      icon: UserX,
      title: "Block",
      description: "Either party can leave or block conversations whenever necessary.",
    },
    {
      icon: FileText,
      title: "Community rules",
      description: "Companions must follow Not Alone's established community standards.",
    },
  ];

  const expectations = [
    "Be respectful in tone, words, and listening posture.",
    "Don't harass or intimidate users under any circumstances.",
    "Don't pressure users for personal favors, external contact, or extra coins.",
    "Don't request inappropriate payments or money transfers outside the platform.",
    "Don't share private information unnecessarily (yours or theirs).",
    "Don't misrepresent yourself, your identity, or your location.",
    "Don't use Not Alone for illegal, harmful, or prohibited activities.",
    "Follow the official Not Alone Community Guidelines at all times.",
  ];

  return (
    <section id="safety" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Safety Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-100/70 px-3.5 py-1 rounded-full border border-rose-200">
            Safety & Governance
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Good conversations need good boundaries.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Safety and mutual respect are foundational to every interaction on Not Alone.
          </p>
        </div>

        {/* Safety 5 Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {safetyPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#FF3B7B] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Companion Expectations Rules Block */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
          <div className="max-w-2xl space-y-2 mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">
              What we expect from Companions
            </h3>
            <p className="text-slate-600 text-sm">
              Standard rules every Companion agrees to uphold upon joining the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expectations.map((exp, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-6 h-6 rounded-full bg-rose-100 text-[#FF3B7B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                  {exp}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
