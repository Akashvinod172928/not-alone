"use client";

import React, { useState } from "react";
import { X, Smartphone, Bell, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  message = "Android download is temporarily unavailable.",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF0F5] to-[#EFF6FF] border border-[#FF3B7B]/20 flex items-center justify-center mb-5 text-[#FF3B7B]">
          <Smartphone className="w-7 h-7" />
        </div>

        {!isSubmitted ? (
          <>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F5] text-[#FF3B7B] text-xs font-semibold mb-3">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Download Notice</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              {message}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We are updating the APK download package. Leave your email below and we will notify you immediately once the direct link is updated.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF3B7B] focus:ring-2 focus:ring-[#FF3B7B]/20 text-slate-900 text-sm transition-all"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full text-sm h-12">
                <Bell className="w-4 h-4 mr-2 inline" />
                Notify Me
              </Button>
            </form>
            <p className="text-xs text-slate-400 text-center mt-4">
              No spam. Only download status updates for Not Alone.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">You&apos;re on the list!</h3>
            <p className="text-slate-600 text-sm mb-6">
              We will email <span className="font-semibold text-slate-900">{email}</span> as soon as the download link is updated.
            </p>
            <Button variant="secondary" onClick={onClose} className="w-full text-sm h-11">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
