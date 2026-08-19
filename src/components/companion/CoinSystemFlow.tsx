"use client";

import React from "react";
import { User, Coins, MessageSquare, UserCheck, Wallet, ArrowRight } from "lucide-react";

export const CoinSystemFlow: React.FC = () => {
  const steps = [
    {
      label: "User",
      sub: "Wants to talk",
      icon: User,
      bg: "bg-slate-100 text-slate-700",
    },
    {
      label: "Coins",
      sub: "Unlocks call",
      icon: Coins,
      bg: "bg-amber-100 text-amber-600",
    },
    {
      label: "Conversation",
      sub: "Meaningful connection",
      icon: MessageSquare,
      bg: "bg-rose-100 text-[#FF3B7B]",
    },
    {
      label: "Companion",
      sub: "Available & engaging",
      icon: UserCheck,
      bg: "bg-blue-100 text-blue-600",
    },
    {
      label: "Earnings",
      sub: "Direct cash payout",
      icon: Wallet,
      bg: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How the Not Alone Economy Works
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            People use Coins to start conversations. Companions earn from eligible conversations.
          </p>
        </div>

        {/* Visual Horizontal Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <React.Fragment key={s.label}>
                {/* Step Node */}
                <div className="w-full lg:w-48 p-5 rounded-2xl bg-slate-50 border border-slate-200/70 text-center flex lg:flex-col items-center justify-between lg:justify-center gap-4 hover:border-slate-300 transition-colors">
                  <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left lg:text-center flex-1">
                    <p className="text-base font-bold text-slate-900">{s.label}</p>
                    <p className="text-xs text-slate-500">{s.sub}</p>
                  </div>
                </div>

                {/* Arrow Divider */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-5 h-5 text-[#FF3B7B]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};
