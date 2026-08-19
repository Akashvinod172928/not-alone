"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProductIntro } from "@/components/landing/ProductIntro";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Discovery } from "@/components/landing/Discovery";
import { ChatPreview } from "@/components/landing/ChatPreview";
import { WhyNotAlone } from "@/components/landing/WhyNotAlone";
import { Philosophy } from "@/components/landing/Philosophy";
import { CoinsSection } from "@/components/landing/CoinsSection";
import { SafetySection } from "@/components/landing/SafetySection";
import { AppPreviewShowcase } from "@/components/landing/AppPreviewShowcase";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { DownloadModal } from "@/components/ui/DownloadModal";
import { siteConfig } from "@/config/site";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadAction = () => {
    const apkUrl = siteConfig.downloadUrls.apk;
    if (apkUrl && apkUrl.trim() !== "") {
      window.location.href = apkUrl;
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onDownloadClick={handleDownloadAction} />

      {/* Hero Section */}
      <Hero onDownloadClick={handleDownloadAction} />

      {/* Product Introduction */}
      <ProductIntro />

      {/* How It Works */}
      <HowItWorks />

      {/* Discovery Showcase */}
      <Discovery onTalkClick={handleDownloadAction} />

      {/* Chat Experience */}
      <ChatPreview />

      {/* Why Not Alone */}
      <WhyNotAlone />

      {/* Product Philosophy */}
      <Philosophy />

      {/* Coins & Product Economics */}
      <CoinsSection />

      {/* Safety & Control */}
      <SafetySection />

      {/* App Showcase */}
      <AppPreviewShowcase />

      {/* Final Download CTA */}
      <FinalCTA onDownloadClick={handleDownloadAction} />

      {/* Minimal Footer */}
      <Footer onDownloadClick={handleDownloadAction} />

      {/* Interactive Download Release Modal */}
      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
