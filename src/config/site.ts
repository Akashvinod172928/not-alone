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
    { name: "How it works", href: "/#how-it-works" },
    { name: "Experience", href: "/#experience" },
    { name: "Safety", href: "/#safety" },
    { name: "Become a Companion", href: "/companions" },
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

export const COMPANION_FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxdSVO-VQ8BqZJRKtnpMbo99fZYFQZNG1ApJ-dG9cmlLIeG5o07C9uq9KP4Loq2QH1K/exec";

export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfndDsShWEYyC5mjJWvNts8_GZAvugTi6HEA4go734Ttzgh9Q/formResponse";

export const GOOGLE_FORM_FIELDS = {
  name: "entry.912432740",
  age: "entry.1648296502",
  gender: "entry.247414453",
  phone: "entry.1774629330",
  whatsapp: "entry.434956791",
  location: "entry.1553605767",
  languages: "entry.1817478219",
  about: "entry.1353896086",
  whyJoin: "entry.1646326285",
};
