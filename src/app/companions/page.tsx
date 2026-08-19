"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { DownloadModal } from "@/components/ui/DownloadModal";
import { siteConfig, GOOGLE_FORM_URL, GOOGLE_FORM_FIELDS } from "@/config/site";
import { 
  CheckCircle2, 
  Sparkles, 
  MessageCircle,
  Clock,
  Coins,
  User,
  Calendar,
  Phone,
  MessageSquare,
  MapPin
} from "lucide-react";

export default function CompanionJoinPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Female",
    phone: "",
    whatsApp: "",
    sameAsPhone: true,
    location: "",
    languages: ["English", "Hindi"],
    whyJoin: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDownloadAction = () => {
    const apkUrl = siteConfig.downloadUrls.apk;
    if (apkUrl && apkUrl.trim() !== "") {
      window.location.href = apkUrl;
    } else {
      setIsModalOpen(true);
    }
  };

  const languageOptions = [
    "English", "Hindi", "Malayalam", "Tamil", "Telugu", "Kannada", "Bengali", "Marathi", "Gujarati"
  ];

  const handlePhoneChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: val,
      whatsApp: prev.sameAsPhone ? val : prev.whatsApp,
    }));
  };

  const handleSameAsPhoneToggle = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      sameAsPhone: checked,
      whatsApp: checked ? prev.phone : prev.whatsApp,
    }));
  };

  const handleLanguageToggle = (lang: string) => {
    setFormData((prev) => {
      const exists = prev.languages.includes(lang);
      if (exists) {
        if (prev.languages.length === 1) return prev;
        return { ...prev, languages: prev.languages.filter((l) => l !== lang) };
      } else {
        return { ...prev, languages: [...prev.languages, lang] };
      }
    });
  };

  const [errorMessage, setErrorMessage] = useState("");

  const submitToIframe = (data: Record<string, string>) => {
    try {
      let iframe = document.getElementById("gform_iframe") as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "gform_iframe";
        iframe.name = "gform_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = GOOGLE_FORM_URL;
      form.target = "gform_iframe";

      const entries: Record<string, string> = {
        [GOOGLE_FORM_FIELDS.name]: data.name || "",
        [GOOGLE_FORM_FIELDS.age]: data.age || "",
        [GOOGLE_FORM_FIELDS.gender]: data.gender || "Female",
        [GOOGLE_FORM_FIELDS.phone]: data.phone || "",
        [GOOGLE_FORM_FIELDS.whatsapp]: data.whatsapp || data.phone || "",
        [GOOGLE_FORM_FIELDS.location]: data.location || "",
        [GOOGLE_FORM_FIELDS.languages]: data.languages || "",
        [GOOGLE_FORM_FIELDS.about]: data.whyJoin || "",
        [GOOGLE_FORM_FIELDS.whyJoin]: data.whyJoin || "",
      };

      Object.entries(entries).forEach(([key, val]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = val;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 1000);
    } catch (err) {
      console.warn("Iframe form submission helper:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const languagesFormatted = Array.isArray(formData.languages)
      ? formData.languages.join(", ")
      : formData.languages;

    const values = {
      name: formData.name.trim(),
      age: String(formData.age),
      gender: formData.gender,
      phone: formData.phone.trim(),
      whatsapp: formData.sameAsPhone ? formData.phone.trim() : formData.whatsApp.trim(),
      location: formData.location.trim(),
      languages: languagesFormatted,
      whyJoin: formData.whyJoin.trim(),
    };

    const resetForm = () => {
      setFormData({
        name: "",
        age: "",
        gender: "Female",
        phone: "",
        whatsApp: "",
        sameAsPhone: true,
        location: "",
        languages: ["English", "Hindi"],
        whyJoin: "",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    try {
      // Single Server-Side POST to /api/companion (forwards to Google Form formResponse)
      const res = await fetch("/api/companion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const resData = await res.json();

      if (res.ok && resData && resData.success === true) {
        resetForm();
        return;
      }

      // Fallback ONLY if server route returns non-success
      submitToIframe(values);
      resetForm();
    } catch (err) {
      console.warn("Server route exception, using single fallback submit:", err);
      submitToIframe(values);
      resetForm();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#FF3B7B]/15 selection:text-[#FF3B7B]">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-rose-50/60 via-pink-50/20 to-transparent pointer-events-none -z-10" />

      {/* Main Website App Bar (Exact Same Navbar) */}
      <Navbar onDownloadClick={handleDownloadAction} />

      {/* Main Container with pt-32 for navbar spacing */}
      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto space-y-12">
          
          {/* HERO SECTION */}
          <div className="text-center space-y-4">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-[#FF3B7B] border border-rose-100/80 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NOT ALONE COMPANIONS</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Be someone <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3B7B] via-rose-500 to-[#2563EB]">
                worth talking to.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-lg mx-auto">
              Join Not Alone as a Companion and get paid to have conversations with people who want someone to talk to.
            </p>

            {/* Human-focused line */}
            <p className="text-xs sm:text-sm font-semibold text-[#FF3B7B] pt-1 tracking-wide">
              Your time. Your conversations. Your choice.
            </p>

          </div>

          {/* APPLICATION CARD OR SUCCESS STATE */}
          {!isSubmitted ? (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card space-y-6 relative overflow-hidden">
              
              {/* Form Heading */}
              <div className="space-y-1 text-left border-b border-slate-100 pb-5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Interested? Let&apos;s talk.
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Tell us a little about yourself and we&apos;ll get in touch.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF3B7B]/30 focus:border-[#FF3B7B] text-sm text-slate-900 font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Age */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Age *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="number"
                        min="18"
                        max="99"
                        required
                        placeholder="e.g. 24"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF3B7B]/30 focus:border-[#FF3B7B] text-sm text-slate-900 font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Gender *
                    </label>
                    <div className="flex items-center gap-2 pt-0.5">
                      {["Female", "Male", "Other"].map((g) => (
                        <label
                          key={g}
                          className={`flex-1 py-2.5 px-2 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                            formData.gender === g
                              ? "bg-rose-50 border-[#FF3B7B] text-[#FF3B7B]"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={formData.gender === g}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            className="sr-only"
                          />
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF3B7B]/30 focus:border-[#FF3B7B] text-sm text-slate-900 font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        WhatsApp Number *
                      </label>
                      <label className="flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sameAsPhone}
                          onChange={(e) => handleSameAsPhoneToggle(e.target.checked)}
                          className="w-3.5 h-3.5 text-[#FF3B7B] rounded focus:ring-[#FF3B7B]"
                        />
                        Same as phone
                      </label>
                    </div>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        disabled={formData.sameAsPhone}
                        placeholder="+91 98765 43210"
                        value={formData.sameAsPhone ? formData.phone : formData.whatsApp}
                        onChange={(e) => setFormData({ ...formData, whatsApp: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF3B7B]/30 focus:border-[#FF3B7B] text-sm text-slate-900 font-medium disabled:bg-slate-50 disabled:text-slate-500 transition-all"
                      />
                    </div>
                  </div>

                </div>

                {/* City / Location */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kochi, Kerala or Bengaluru, Karnataka"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF3B7B]/30 focus:border-[#FF3B7B] text-sm text-slate-900 font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Languages You Speak */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Languages You Speak *
                  </label>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {languageOptions.map((lang) => {
                      const isSelected = formData.languages.includes(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => handleLanguageToggle(lang)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                            isSelected
                              ? "bg-[#FF3B7B] text-white border-[#FF3B7B] shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {lang} {isSelected && "✓"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Why do you want to become a Companion? */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Why do you want to become a Companion? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us why you'd like to join Not Alone as a Companion..."
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF3B7B]/30 focus:border-[#FF3B7B] text-sm text-slate-900 font-medium transition-all"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold text-center animate-fadeIn">
                    {errorMessage}
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-2 space-y-2.5 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#FF3B7B] hover:bg-[#E02E69] text-white font-extrabold text-base shadow-lg shadow-rose-500/20 transition-all disabled:opacity-50 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      "Become a Companion"
                    )}
                  </button>

                  <p className="text-xs text-slate-500 font-medium">
                    We&apos;ll review your details and contact you on WhatsApp.
                  </p>
                </div>

              </form>

            </div>
          ) : (
            /* SUCCESS CONFIRMATION STATE */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xl text-center space-y-6 animate-scaleUp">
              
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-extrabold text-slate-900">
                  You&apos;re in! 🎉
                </h2>

                <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed">
                  Thanks for your interest in becoming a Not Alone Companion. We&apos;ll contact you soon.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                >
                  Submit Another Response
                </button>
                <Link
                  href="/"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Return to Home
                </Link>
              </div>

            </div>
          )}

          {/* SMALL BENEFITS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#FF3B7B] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">💬 Talk</h3>
              <p className="text-xs text-slate-600 leading-snug">
                Have conversations with people from anywhere.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">⏰ Your Time</h3>
              <p className="text-xs text-slate-600 leading-snug">
                Choose when you&apos;re available.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">💰 Earn</h3>
              <p className="text-xs text-slate-600 leading-snug">
                Get rewarded for eligible conversations.
              </p>
            </div>

          </div>

          {/* HOW IT WORKS SECTION */}
          <div className="pt-6 border-t border-slate-100 space-y-6">
            <div className="text-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                How It Works
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-[#FF3B7B]">01</span>
                <h4 className="text-sm font-bold text-slate-900">Apply</h4>
                <p className="text-xs text-slate-500">Fill in your details.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-blue-600">02</span>
                <h4 className="text-sm font-bold text-slate-900">Connect</h4>
                <p className="text-xs text-slate-500">Our team contacts you.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-emerald-600">03</span>
                <h4 className="text-sm font-bold text-slate-900">Start</h4>
                <p className="text-xs text-slate-500">Complete onboarding and start talking.</p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Main Website Footer */}
      <Footer onDownloadClick={handleDownloadAction} />

      {/* Download Modal */}
      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
