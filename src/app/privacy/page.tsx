import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="border-b border-slate-100 py-5 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Logo size="md" />
          <Link href="/" className="text-sm font-semibold text-[#FF3B7B] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B7B]">
            Legal Information
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: August 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
          <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-600">
            Not Alone is committed to respecting your privacy and protecting your personal information. This Privacy Policy outline describes our general approach to data protection for the Not Alone platform.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you create an account on Not Alone, we collect minimal information necessary to facilitate simple human conversations, such as basic account credentials, language preferences, and essential profile metadata.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Information</h2>
            <p>
              We use your information strictly to operate and deliver the Not Alone service, including profile discovery, chat message routing, and maintaining community standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Safety & User Control</h2>
            <p>
              Not Alone provides built-in tools allowing you to block users and report inappropriate behavior. We do not sell or monetize personal user conversation data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact our support team at support@notalone.app.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
