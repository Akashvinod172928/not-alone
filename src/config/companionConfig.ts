export interface CompanionEarningConfig {
  earningRateDisplay: string;
  coinShareDisplay: string;
  minimumWithdrawalDisplay: string;
  payoutMethodDisplay: string;
  isConfigured: boolean;
}

export const companionEarningConfig: CompanionEarningConfig = {
  earningRateDisplay: "Earn up to ₹300 – ₹600 / hour of active talk time",
  coinShareDisplay: "70% Coin Share per eligible conversation",
  minimumWithdrawalDisplay: "₹500 instant threshold",
  payoutMethodDisplay: "UPI (Google Pay, PhonePe, Paytm) & Direct Bank Transfer",
  isConfigured: true,
};

export interface CompanionProfileMock {
  id: string;
  name: string;
  age: number;
  location: string;
  languages: string[];
  intro: string;
  avatarUrl: string;
  isAvailable: boolean;
  rating: number;
  totalConversations: number;
}

export const companionMockProfiles: CompanionProfileMock[] = [
  {
    id: "comp-1",
    name: "Ananya",
    age: 24,
    location: "Kochi, Kerala",
    languages: ["Malayalam", "English", "Hindi"],
    intro: "Love conversations, movies and discovering new perspectives. Always down for a warm, thoughtful chat.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    rating: 4.9,
    totalConversations: 340,
  },
  {
    id: "comp-2",
    name: "Rohan",
    age: 26,
    location: "Bengaluru, Karnataka",
    languages: ["Hindi", "English", "Kannada"],
    intro: "Avid reader, football fan, and startup designer. I enjoy listening to stories and sharing lighthearted moments.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    rating: 4.95,
    totalConversations: 512,
  },
  {
    id: "comp-3",
    name: "Priya",
    age: 23,
    location: "Chennai, Tamil Nadu",
    languages: ["Tamil", "English", "Hindi"],
    intro: "Music enthusiast and indie podcast lover. Great listener who enjoys meaningful late night conversations.",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    rating: 4.88,
    totalConversations: 280,
  },
  {
    id: "comp-4",
    name: "Arjun",
    age: 25,
    location: "Hyderabad, Telangana",
    languages: ["Telugu", "English", "Hindi"],
    intro: "Tech worker by day, storyteller by night. Always open to talking about life, travel, or just venting about the daily grind.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    isAvailable: false,
    rating: 4.92,
    totalConversations: 415,
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  companionSince: string;
  quote: string;
  avatarUrl: string;
  location: string;
}

export const companionTestimonials: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Meera S.",
    companionSince: "Companion since Jan 2026",
    quote: "Not Alone gives me a simple, flexible way to meet different people while earning from my spare time after college hours.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    location: "Kochi",
  },
  {
    id: "t-2",
    name: "Vikram R.",
    companionSince: "Companion since Nov 2025",
    quote: "I love that I can set my own availability. Whether I have 30 minutes or 2 hours, I log in, talk to people, and turn my conversations into income.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    location: "Bengaluru",
  },
  {
    id: "t-3",
    name: "Divya K.",
    companionSince: "Companion since Feb 2026",
    quote: "The community standards and clear boundaries make me feel safe. Every conversation is unique, respectful, and fulfilling.",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    location: "Mumbai",
  },
];

export const companionFaqs = [
  {
    question: "What is a Not Alone Companion?",
    answer: "A Not Alone Companion is a verified user who makes themselves available to talk on the platform. Companions engage in friendly, respectful, non-therapeutic, non-romantic conversations with people looking for someone to talk to."
  },
  {
    question: "How do I become a Companion?",
    answer: "Click on 'Become a Companion', fill out the application form with your basic details and profile preference, complete our simple identity verification process, and once approved, set your availability to start talking."
  },
  {
    question: "How does earning work?",
    answer: "Users consume Coins to initiate and continue conversations with Companions. Eligible conversations yield Coin earnings for the Companion based on the platform's current earning model and coin share structure."
  },
  {
    question: "When can I be available?",
    answer: "Whenever you want. You have 100% control over your schedule. Toggle your status to 'Available' in the app when you're free, and toggle it off whenever you need a break."
  },
  {
    question: "Do I need previous experience?",
    answer: "No prior professional experience is required! You don't need to be a counselor or expert — you just need to be a good listener, empathetic, respectful, and comfortable conversing with new people."
  },
  {
    question: "How do payouts work?",
    answer: "Payouts are transferred directly to your bank account or UPI ID (Google Pay, PhonePe, Paytm). Once you reach the minimum withdrawal threshold, you can request a payout at any time."
  },
  {
    question: "Can I stop being available?",
    answer: "Yes, instantly. There are no fixed contracts or mandatory working hours. You can pause or stop your availability at any time with a single tap inside the app."
  },
  {
    question: "What happens if someone behaves inappropriately?",
    answer: "Your safety and peace of mind are paramount. You can immediately end any call, block any user, or submit an in-app report. Our moderation team reviews reports promptly to enforce community guidelines."
  },
  {
    question: "What are the Companion rules?",
    answer: "Companions must maintain respectful boundaries, never engage in harassment, harassment of payments outside the app, misrepresentation, or prohibited activities. Detailed rules are reviewed during onboarding."
  }
];
