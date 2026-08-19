"use client";

import React, { useState } from "react";
import { PhoneMockup } from "../ui/PhoneMockup";
import { siteConfig } from "@/config/site";
import { Home as HomeIcon, Search, MessageSquare, User } from "lucide-react";

export const AppPreviewShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"home" | "discovery" | "chat" | "profile">("home");

  const tabs = [
    { id: "home", label: "Home Screen", icon: HomeIcon, image: siteConfig.screenshots.home },
    { id: "discovery", label: "Discovery", icon: Search, image: siteConfig.screenshots.discovery },
    { id: "chat", label: "Chat Experience", icon: MessageSquare, image: siteConfig.screenshots.chat },
    { id: "profile", label: "Profile & Settings", icon: User, image: siteConfig.screenshots.profile },
  ] as const;

  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B7B]">
            App Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed for <span className="text-[#FF3B7B]">effortless interaction.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Take a look inside the application screens built with clarity and simplicity in mind.
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF3B7B] text-white shadow-md shadow-[#FF3B7B]/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Screen Showcase */}
        <div className="flex justify-center items-center">
          <PhoneMockup imageSrc={tabs.find(t => t.id === activeTab)?.image} alt={`Not Alone ${activeTab} screen`}>
            
            {/* Fallback React rendering for tabs if images aren't present */}
            <div className="h-full flex flex-col justify-between bg-slate-50 p-4 font-sans text-left">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="font-extrabold text-sm text-slate-900 capitalize">
                  {activeTab} Overview
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FF3B7B]"></span>
              </div>

              {/* Tab Specific High Fidelity Previews */}
              <div className="my-auto space-y-3">
                {activeTab === "home" && (
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                      <p className="text-xs font-bold text-slate-900 mb-1">Welcome back</p>
                      <p className="text-[11px] text-slate-500">Ready for a warm conversation today?</p>
                    </div>
                    <div className="bg-[#FFF0F5] p-4 rounded-2xl border border-[#FF3B7B]/20 text-center">
                      <p className="text-xs font-bold text-[#FF3B7B]">Start Quick Chat</p>
                      <p className="text-[10px] text-slate-600">Connects you with an available member</p>
                    </div>
                  </div>
                )}

                {activeTab === "discovery" && (
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-xs flex items-center justify-center">R</div>
                        <div>
                          <p className="text-xs font-bold">Rohan, 25</p>
                          <p className="text-[10px] text-slate-400">Hindi • English</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#FF3B7B] bg-[#FFF0F5] px-2 py-0.5 rounded-full font-semibold">Talk</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-pink-500 text-white font-bold text-xs flex items-center justify-center">A</div>
                        <div>
                          <p className="text-xs font-bold">Ananya, 23</p>
                          <p className="text-[10px] text-slate-400">Tamil • English</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#FF3B7B] bg-[#FFF0F5] px-2 py-0.5 rounded-full font-semibold">Talk</span>
                    </div>
                  </div>
                )}

                {activeTab === "chat" && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                      &ldquo;Hey! Good evening.&rdquo;
                    </div>
                    <div className="bg-[#FF3B7B] text-white p-2.5 rounded-xl ml-auto max-w-[80%]">
                      &ldquo;Good evening! How was your day?&rdquo;
                    </div>
                  </div>
                )}

                {activeTab === "profile" && (
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                        U
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Your Account</p>
                        <p className="text-[10px] text-slate-500">50 Coins Available</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] text-slate-600">
                      <span>Safety Preferences</span>
                      <span className="text-[#2563EB]">Manage</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Nav */}
              <div className="bg-white p-2 rounded-xl border border-slate-200 flex justify-around text-[10px] text-slate-400">
                <span className={activeTab === "home" ? "text-[#FF3B7B] font-bold" : ""}>Home</span>
                <span className={activeTab === "discovery" ? "text-[#FF3B7B] font-bold" : ""}>Discover</span>
                <span className={activeTab === "chat" ? "text-[#FF3B7B] font-bold" : ""}>Chat</span>
                <span className={activeTab === "profile" ? "text-[#FF3B7B] font-bold" : ""}>Profile</span>
              </div>

            </div>
          </PhoneMockup>
        </div>

      </div>
    </section>
  );
};
