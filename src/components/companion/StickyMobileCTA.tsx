"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (300px)
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40 animate-slideUp">
      <div className="bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-2xl flex items-center justify-between gap-3">
        <div className="pl-2">
          <p className="text-xs font-bold text-white flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#FF3B7B]" />
            Join Not Alone
          </p>
          <p className="text-[10px] text-slate-400">Earn from conversations</p>
        </div>

        <Link
          href="/companions/apply"
          className="py-2.5 px-5 rounded-xl bg-[#FF3B7B] hover:bg-[#E02E69] text-white text-xs font-extrabold shadow-md shrink-0 transition-transform active:scale-95"
        >
          Become a Companion
        </Link>
      </div>
    </div>
  );
};
