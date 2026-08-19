"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-sm py-3.5"
          : "bg-white/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors focus:outline-none ${
                item.href === "/companions"
                  ? "text-[#FF3B7B] font-semibold hover:text-[#E02E69]"
                  : "hover:text-[#FF3B7B] focus:text-[#FF3B7B]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="primary"
            size="sm"
            href={downloadUrl || undefined}
            download={downloadUrl ? "not-alone.apk" : undefined}
            onClick={!downloadUrl ? onDownloadClick : undefined}
            className="shadow-sm"
          >
            Download App
          </Button>
        </div>

        {/* Mobile Action & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="primary"
            size="sm"
            href={downloadUrl || undefined}
            download={downloadUrl ? "not-alone.apk" : undefined}
            onClick={!downloadUrl ? onDownloadClick : undefined}
            className="h-9 px-3.5 text-xs font-semibold"
          >
            Download
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
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  item.href === "/companions"
                    ? "bg-rose-50 text-[#FF3B7B] font-semibold"
                    : "hover:bg-slate-50 hover:text-[#FF3B7B]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              href={downloadUrl || undefined}
              download={downloadUrl ? "not-alone.apk" : undefined}
              onClick={() => {
                setMobileMenuOpen(false);
                if (!downloadUrl) onDownloadClick();
              }}
              className="w-full text-sm"
            >
              Download App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
