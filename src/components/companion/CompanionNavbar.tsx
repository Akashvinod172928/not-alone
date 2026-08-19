"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { siteConfig } from "@/config/site";
import { Menu, X, Sparkles, PhoneCall } from "lucide-react";

interface CompanionNavbarProps {
  onDownloadClick?: () => void;
}

export const CompanionNavbar: React.FC<CompanionNavbarProps> = ({ onDownloadClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const downloadUrl = siteConfig.appDownloadUrl || siteConfig.downloadUrls.apk;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Earnings", href: "#earnings" },
    { name: "Profiles", href: "#profiles" },
    { name: "Safety & Rules", href: "#safety" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5"
          : "bg-white/70 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Companion Tag */}
        <div className="flex items-center gap-3">
          <Logo size="md" />
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-[#FF3B7B] border border-rose-100">
            <Sparkles className="w-3 h-3 text-[#FF3B7B]" />
            Companions
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-[#FF3B7B] focus:outline-none focus:text-[#FF3B7B]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Dual CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Consumer App Download Link */}
          <Button
            variant="outline"
            size="sm"
            href={downloadUrl || undefined}
            download={downloadUrl ? "not-alone.apk" : undefined}
            onClick={!downloadUrl ? onDownloadClick : undefined}
            className="text-xs font-medium border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
            Download App
          </Button>

          {/* Become a Companion CTA */}
          <Button
            variant="primary"
            size="sm"
            href="/companions/apply"
            className="shadow-sm font-semibold bg-[#FF3B7B] hover:bg-[#E02E69] text-white"
          >
            Become a Companion
          </Button>
        </div>

        {/* Mobile Action & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="primary"
            size="sm"
            href="/companions/apply"
            className="h-9 px-3.5 text-xs font-semibold"
          >
            Apply Now
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Not Alone Companions
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-[#FF3B7B]">
              Onboarding Open
            </span>
          </div>

          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#FF3B7B] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              variant="primary"
              size="md"
              href="/companions/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-sm font-semibold justify-center"
            >
              Become a Companion
            </Button>

            <Button
              variant="outline"
              size="md"
              href={downloadUrl || undefined}
              download={downloadUrl ? "not-alone.apk" : undefined}
              onClick={() => {
                setMobileMenuOpen(false);
                if (!downloadUrl && onDownloadClick) onDownloadClick();
              }}
              className="w-full text-sm font-medium justify-center text-slate-700"
            >
              Download Main User App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
