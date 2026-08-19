"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { siteConfig } from "@/config/site";

export const CompanionFooter: React.FC = () => {
  const downloadUrl = siteConfig.appDownloadUrl || siteConfig.downloadUrls.apk;

  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-100">
          
          {/* Logo & Tagline */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Logo size="md" />
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-[#FF3B7B] border border-rose-100">
                Companions
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              &ldquo;{siteConfig.headline}&rdquo;
            </p>
          </div>

          {/* Nav & Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-[#FF3B7B] transition-colors">
              Main Site
            </Link>
            <a href="#how-it-works" className="hover:text-[#FF3B7B] transition-colors">
              How it works
            </a>
            <a href="#earnings" className="hover:text-[#FF3B7B] transition-colors">
              Earnings
            </a>
            <a href="#safety" className="hover:text-[#FF3B7B] transition-colors">
              Safety
            </a>
            <Link href="/privacy" className="hover:text-[#FF3B7B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FF3B7B] transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/companions/apply"
              className="text-[#FF3B7B] font-bold hover:underline"
            >
              Become a Companion
            </Link>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Not Alone. All rights reserved.</p>
          <p>Not Alone Companions — Platform for human conversations.</p>
        </div>

      </div>
    </footer>
  );
};
