import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">Last updated: August 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
          <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-600">
            Welcome to Not Alone. By using our application and website, you agree to comply with and be bound by the following Terms of Service.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Not Alone mobile application or website, you agree to these Terms. Not Alone is designed solely for open, respectful human conversations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Community Standards & Conduct</h2>
            <p>
              Users are expected to treat all community members with dignity and respect. Harassment, abusive language, hate speech, or deceptive behavior will lead to account suspension.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Coin Economy & In-App Items</h2>
            <p>
              Not Alone incorporates a coin system for initiating conversations. Coins are non-refundable and subject to application operational terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Disclaimer</h2>
            <p>
              Not Alone is a communication platform. Not Alone is not a provider of medical advice, therapy, crisis intervention, or romantic matching services.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
