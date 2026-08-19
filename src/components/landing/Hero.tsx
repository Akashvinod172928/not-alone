"use client";

import React from "react";
import { Button } from "../ui/Button";
import { PhoneMockup } from "../ui/PhoneMockup";
import { siteConfig } from "@/config/site";
import { Sparkles, MessageCircle, Users, ShieldCheck, Smartphone } from "lucide-react";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const downloadUrl = siteConfig.appDownloadUrl || siteConfig.downloadUrls.apk;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#FFF0F5] via-white to-[#EFF6FF] blur-3xl opacity-70 -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F5] border border-[#FF3B7B]/15 text-[#FF3B7B] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF3B7B]" />
              <span>A simple place to talk.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              You&apos;re never too far from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B7B] via-[#E02E69] to-[#2563EB]">someone to talk to.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Find someone new to talk to. Start a conversation. You&apos;re Not Alone.
            </p>

            {/* Primary CTA Block */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  showDownloadIcon
                  showArrow
                  href={downloadUrl || undefined}
                  download={downloadUrl ? "not-alone.apk" : undefined}
                  onClick={!downloadUrl ? onDownloadClick : undefined}
                  className="w-full sm:w-auto shadow-floating"
                >
                  Download the App
                </Button>

                {siteConfig.googlePlayUrl && (
                  <Button variant="secondary" size="lg" href={siteConfig.googlePlayUrl} target="_blank">
                    Google Play
                  </Button>
                )}

                {siteConfig.appStoreUrl && (
                  <Button variant="secondary" size="lg" href={siteConfig.appStoreUrl} target="_blank">
                    App Store
                  </Button>
                )}
              </div>

              {/* Supporting Text */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-1">
                <Smartphone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Android APK • Free to download</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>

            {/* Micro Highlights Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-medium">
                <MessageCircle className="w-4 h-4 text-[#FF3B7B]" />
                <span>Instant Chat</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-medium">
                <Users className="w-4 h-4 text-[#2563EB]" />
                <span>Real People</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your Privacy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Mobile Phone Preview */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Subtle floating badge 1 */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-20 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 animate-float">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                Online
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Available now</p>
                <p className="text-[11px] text-slate-500">Ready for a chat</p>
              </div>
            </div>

            {/* Subtle floating badge 2 */}
            <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-9 h-9 rounded-full bg-[#FFF0F5] flex items-center justify-center text-[#FF3B7B]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Simple hello</p>
                <p className="text-[11px] text-slate-500">No expectations</p>
              </div>
            </div>

            {/* Phone Mockup with High-Fidelity UI Fallback */}
            <PhoneMockup imageSrc={siteConfig.screenshots.home} alt="Not Alone Mobile App Home Screen">
              <div className="h-full flex flex-col justify-between bg-slate-50 p-4 font-sans text-left">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FF3B7B] flex items-center justify-center text-white font-black text-xs">
                      NA
                    </div>
                    <span className="font-extrabold text-sm text-slate-900">Not Alone</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-semibold border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online Space
                  </span>
                </div>

                {/* Main Card preview */}
                <div className="my-auto space-y-3.5">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 to-rose-300 flex items-center justify-center text-white font-bold text-base shadow-sm">
                          A
                        </div>
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Aarav, 24</h4>
                        <p className="text-xs text-slate-500">English • Hindi</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      &ldquo;Looking for a quick friendly chat about books & tech.&rdquo;
                    </p>
                    <a
                      href={downloadUrl || undefined}
                      download={downloadUrl ? "not-alone.apk" : undefined}
                      onClick={!downloadUrl ? onDownloadClick : undefined}
                      className="w-full h-9 rounded-xl bg-[#FF3B7B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Talk Now
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-300 flex items-center justify-center text-white font-bold text-sm">
                        P
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Priya, 22</h4>
                        <p className="text-[11px] text-slate-400">Available to talk</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-lg">
                      Connect
                    </span>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="pt-2 bg-white rounded-2xl p-2 border border-slate-200/80 flex items-center justify-around text-[10px] text-slate-400">
                  <div className="flex flex-col items-center gap-0.5 text-[#FF3B7B] font-semibold">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B7B]"></div>
                    Home
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    Discover
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    Chat
                  </div>
                </div>

              </div>
            </PhoneMockup>

          </div>

        </div>
      </div>
    </section>
  );
};
