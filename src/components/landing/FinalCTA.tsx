"use client";

import React from "react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/config/site";
import { Smartphone, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onDownloadClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onDownloadClick }) => {
  const downloadUrl = siteConfig.appDownloadUrl || siteConfig.downloadUrls.apk;

  return (
    <section className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#FF3B7B]/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#2563EB]/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FF3B7B] text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-[#FF3B7B]" />
          <span>Get Started Today</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Ready to talk?
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
          Download Not Alone and start your next conversation.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              showDownloadIcon
              showArrow
              href={downloadUrl || undefined}
              download={downloadUrl ? "not-alone.apk" : undefined}
              onClick={!downloadUrl ? onDownloadClick : undefined}
              className="w-full sm:w-auto shadow-2xl shadow-[#FF3B7B]/40"
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

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/15 text-xs font-semibold text-slate-300">
            <Smartphone className="w-4 h-4 text-[#2563EB]" />
            <span>Android APK • Free to download</span>
          </div>
        </div>

      </div>
    </section>
  );
};
