"use client";

import React from "react";
import { Headphones, MessageSquare, Sparkles } from "lucide-react";

export const WhatIsCompanion: React.FC = () => {
  const points = [
    {
      icon: Headphones,
      title: "Listen",
      description: "Sometimes people just want someone who listens.",
      accent: "from-rose-500 to-pink-500",
      bgLight: "bg-rose-50 text-[#FF3B7B]",
      borderColor: "border-rose-100",
    },
    {
      icon: MessageSquare,
      title: "Talk",
      description: "Have genuine, respectful conversations.",
      accent: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50 text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      icon: Sparkles,
      title: "Connect",
      description: "Give someone a reason to keep the conversation going.",
      accent: "from-purple-500 to-rose-500",
      bgLight: "bg-purple-50 text-purple-600",
      borderColor: "border-purple-100",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Definition & Role
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What&apos;s a Companion?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            A Not Alone Companion is a person who makes themselves available to talk. Someone might want to share their day, meet someone new, have a casual conversation, or simply spend a few minutes talking.
          </p>
        </div>

        {/* 3 Visual Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className={`relative group p-8 rounded-3xl bg-white border ${pt.borderColor} shadow-subtle hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center`}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl ${pt.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
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
