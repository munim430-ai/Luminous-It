/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SuccessStory {
  name: string;
  amount: string;
  role: string;
  image: string;
  achievement?: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "লিজা আক্তার",
    amount: "৳৫,১০,০০০+",
    role: "গৃহিণী হয়েও ফ্রিল্যান্সিং করে Top #৬ অর্জন করেছেন — লুমিনাস আইটির পক্ষ থেকে আন্তরিক অভিনন্দন!",
    achievement: "Top Earner #6",
    image: "/success-liza.jpg",
  },
  {
    name: "মোঃ সুমন হাসান",
    amount: "৳১১,৯০,০০০",
    role: "Fiverr Marketplace-এ Level 2 Seller অর্জন করেছেন। আগামীর জন্য আরও বড় সাফল্য কামনা করছি।",
    achievement: "Fiverr Level 2",
    image: "/success-sumon.jpg",
  },
  {
    name: "মোহাম্মদ জায়েদ",
    amount: "৳১,২৫,০০০+",
    role: "International Marketplace-এ Social Media Manager হিসেবে সফলভাবে কাজ করছেন।",
    achievement: "International Seller",
    image: "/success-zayed.jpg",
  },
  {
    name: "প্রিয়ন্তী দত্ত",
    amount: "৳১,৪০,০০০",
    role: "গৃহিণী হয়েও Fiverr-এ Level 1 Seller অর্জন করেছেন। ইচ্ছা থাকলে উপায় হয়!",
    achievement: "Fiverr Level 1",
    image: "/success-priyonti.jpg",
  },
];

export const COLORS = {
  primary: "#ec4899", // Pink
  secondary: "#f97316", // Orange
  accent: "#fbbf24", // Yellow/Amber
};
