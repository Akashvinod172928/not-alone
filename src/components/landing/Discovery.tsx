"use client";

import React from "react";
import { MessageCircle, Globe2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

interface DiscoveryProps {
  onTalkClick: () => void;
}

export const Discovery: React.FC<DiscoveryProps> = ({ onTalkClick }) => {
  const downloadUrl = siteConfig.appDownloadUrl || siteConfig.downloadUrls.apk;

  const profiles = [
    {
      id: "1",
      name: "Rohan",
      age: 25,
      languages: "English • Hindi",
      bio: "Up for a casual chat about movies, music, or how your day is going.",
      avatarBg: "from-blue-500 to-indigo-600",
      initials: "R",
      isOnline: true,
      tag: "Ready to talk",
    },
    {
      id: "2",
      name: "Ananya",
      age: 23,
      languages: "English • Tamil",
      bio: "Just finished work and looking to talk about good books and travel stories.",
      avatarBg: "from-rose-400 to-[#FF3B7B]",
      initials: "A",
      isOnline: true,
      tag: "Online",
    },
    {
      id: "3",
      name: "Kabir",
      age: 27,
      languages: "English • Marathi",
      bio: "Passionate about photography and tech. Happy to connect and share experiences.",
      avatarBg: "from-teal-500 to-emerald-600",
      initials: "K",
      isOnline: true,
      tag: "Active now",
    },
    {
      id: "4",
      name: "Sneha",
      age: 24,
      languages: "English • Hindi",
      bio: "Taking a quiet coffee break. Always down for an honest, friendly conversation.",
      avatarBg: "from-amber-400 to-orange-500",
      initials: "S",
      isOnline: true,
      tag: "Available",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-slate-50/70 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Someone new is just a <span className="text-[#2563EB]">conversation away.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Browse real people who are online, available, and open to a simple conversation.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header: Avatar + Online Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${profile.avatarBg} text-white font-bold text-xl flex items-center justify-center shadow-sm`}>
                      {profile.initials}
                    </div>
                    {profile.isOnline && (
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {profile.tag}
                  </span>
                </div>

                {/* Name & Age */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {profile.name}, {profile.age}
                </h3>

                {/* Language */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 mb-3">
                  <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.languages}</span>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-6">
                  &ldquo;{profile.bio}&rdquo;
                </p>
              </div>

              {/* Talk CTA */}
              <a
                href={downloadUrl || undefined}
                download={downloadUrl ? "not-alone.apk" : undefined}
                onClick={!downloadUrl ? onTalkClick : undefined}
                className="w-full h-11 rounded-2xl bg-slate-900 group-hover:bg-[#FF3B7B] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-slate-400">
          * Profiles on Not Alone are dedicated strictly to open, respectful human conversations.
        </div>

      </div>
    </section>
  );
};
