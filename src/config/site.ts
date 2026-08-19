export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  description: string;
  url: string;
  appDownloadUrl: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  downloadUrls: {
    apk: string;
    googlePlay: string;
    appStore: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
  legal: Array<{
    name: string;
    href: string;
  }>;
  screenshots: {
    home: string;
    discovery: string;
    chat: string;
    profile: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Not Alone",
  tagline: "A simple place to talk.",
  headline: "You're never too far from someone to talk to.",
  description: "Find someone new to talk to. Start a conversation. You're Not Alone.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://notalone.app",
  
  // Central Production APK Download Configuration
  appDownloadUrl: "/downloads/not-alone.apk",

  // Future App Store and Google Play Links
  googlePlayUrl: "",
  appStoreUrl: "",

  downloadUrls: {
    apk: "/downloads/not-alone.apk",
    googlePlay: "",
    appStore: "",
  },

  navigation: [
    { name: "How it works", href: "#how-it-works" },
    { name: "Experience", href: "#experience" },
    { name: "Safety", href: "#safety" },
  ],

  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],

  screenshots: {
    home: "/images/home.png",
    discovery: "/images/discovery.png",
    chat: "/images/chat.png",
    profile: "/images/profile.png",
  },
};
