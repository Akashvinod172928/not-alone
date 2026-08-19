"use client";

import React from "react";
import { PhoneMockup } from "../ui/PhoneMockup";
import { siteConfig } from "@/config/site";
import { Send, Shield, CheckCheck } from "lucide-react";

export const ChatPreview: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B7B]">
              Chat Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Start with a <span className="text-[#FF3B7B]">simple hello.</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              You don&apos;t need a perfect opening line. Just start talking. Not Alone makes text conversation smooth, fast, and comfortable.
            </p>

            <div className="pt-4 space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#FFF0F5] text-[#FF3B7B] flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Zero Pressure</h4>
                  <p className="text-xs text-slate-500">Say whatever is on your mind without judgment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Real-Time Messaging</h4>
                  <p className="text-xs text-slate-500">Instant delivery and read status for natural flow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Phone Mockup (Chat UI) */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneMockup imageSrc={siteConfig.screenshots.chat} alt="Not Alone Chat Screen">
              
              {/* High Fidelity Chat Screen UI Fallback */}
              <div className="h-full flex flex-col justify-between bg-slate-100/70 text-left font-sans">
                
                {/* Chat Top Header */}
                <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 text-white font-bold text-sm flex items-center justify-center">
                        A
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-white rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Ananya</h4>
                      <p className="text-[10px] text-emerald-600 font-semibold">Active now</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Shield className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div className="p-4 space-y-4 overflow-y-auto my-auto text-xs">
                  
                  {/* System Date Badge */}
                  <div className="text-center">
                    <span className="px-3 py-1 rounded-full bg-slate-200/60 text-slate-500 text-[10px] font-medium">
                      Today
                    </span>
                  </div>

                  {/* Incoming Bubble */}
                  <div className="flex flex-col items-start max-w-[80%]">
                    <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200/60">
                      Hey, how are you?
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1 ml-1">10:14 AM</span>
                  </div>

                  {/* Outgoing Bubble */}
                  <div className="flex flex-col items-end max-w-[80%] ml-auto">
                    <div className="bg-[#FF3B7B] text-white p-3 rounded-2xl rounded-tr-xs shadow-sm">
                      Pretty good. How about you?
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-slate-400 mt-1 mr-1">
                      <span>10:15 AM</span>
                      <CheckCheck className="w-3 h-3 text-[#FF3B7B]" />
                    </div>
                  </div>

                  {/* Incoming Bubble */}
                  <div className="flex flex-col items-start max-w-[80%]">
                    <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200/60">
                      Much better now.
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1 ml-1">10:15 AM</span>
                  </div>

                </div>

                {/* Input Bar */}
                <div className="bg-white p-3 border-t border-slate-200 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="Say something warm..."
                    className="w-full h-9 bg-slate-100 text-slate-400 rounded-full px-4 text-xs focus:outline-none"
                  />
                  <button className="w-9 h-9 rounded-full bg-[#FF3B7B] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </PhoneMockup>
          </div>

        </div>
      </div>
    </section>
  );
};
