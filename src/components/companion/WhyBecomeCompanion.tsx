"use client";

import React from "react";
import { Coins, Clock, Users, Smartphone, UserCircle } from "lucide-react";

export const WhyBecomeCompanion: React.FC = () => {
  const benefits = [
    {
      icon: Coins,
      title: "Earn from conversations",
      description: "Get rewarded for the conversations you have through Not Alone.",
      accentBg: "bg-rose-50 text-[#FF3B7B]",
    },
    {
      icon: Clock,
      title: "Choose your availability",
      description: "Be available when it works for you.",
      accentBg: "bg-blue-50 text-blue-600",
    },
    {
      icon: Users,
      title: "Meet new people",
      description: "Every conversation is different.",
      accentBg: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Work from your phone",
      description: "Everything happens through the Not Alone app.",
      accentBg: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: UserCircle,
      title: "Build your own presence",
      description: "Create a Companion profile people can recognize and return to.",
      accentBg: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Why Join Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            More than a side hustle.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Your time can be valuable to someone else.
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col space-y-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${b.accentBg} flex items-center justify-center`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
