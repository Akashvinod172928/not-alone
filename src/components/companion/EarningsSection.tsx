"use client";

import React from "react";
import { companionEarningConfig } from "@/config/companionConfig";
import { Wallet, TrendingUp, ShieldCheck, CreditCard, ChevronRight, Info } from "lucide-react";

export const EarningsSection: React.FC = () => {
  const { isConfigured, earningRateDisplay, coinShareDisplay, minimumWithdrawalDisplay, payoutMethodDisplay } = companionEarningConfig;

  return (
    <section id="earnings" className="py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/30 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B7B] bg-rose-100/70 px-3.5 py-1 rounded-full border border-rose-200">
            Companion Earnings
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your conversations have value.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Transparent earning rates, instant payouts, and zero hidden deductions.
          </p>
        </div>

        {/* Earning Rate Display Cards */}
        {isConfigured ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Earning Rate */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#FF3B7B] flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Earn based on your conversations
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {earningRateDisplay}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {coinShareDisplay}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verified per-minute tracking</span>
              </div>
            </div>

            {/* Card 2: Payout Info */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Your earnings
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Direct Payouts
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {payoutMethodDisplay}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>No middleman fees</span>
              </div>
            </div>

            {/* Card 3: Minimum Withdrawal */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <Wallet className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Minimum withdrawal
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {minimumWithdrawalDisplay}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Withdraw your accrued earnings as soon as you hit the threshold.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Processed within 24 hours</span>
              </div>
            </div>

          </div>
        ) : (
          <div className="mt-12 p-8 rounded-3xl bg-amber-50 border border-amber-200 text-center max-w-2xl mx-auto space-y-3">
            <Info className="w-8 h-8 text-amber-600 mx-auto" />
            <h3 className="text-xl font-bold text-amber-900">Earnings details will be available during Companion onboarding.</h3>
            <p className="text-sm text-amber-800">
              Specific coin conversion rates and payout terms are communicated clearly upon profile approval.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
