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
    name: "Liza Aktar",
    amount: "৳5,10,000+",
    role: "Top #6 Earner at Luminous IT. Successfully balancing home and freelancing.",
    achievement: "Top Earner",
    image: "/artifact3.png",
  },
  {
    name: "Md. Sumon Hasan",
    amount: "৳11,90,000",
    role: "Fiverr Level 2 Seller. A dedicated student who mastered global marketplace dynamics.",
    achievement: "Level 2 Seller",
    image: "/artifact4.png",
  },
  {
    name: "Poli Khatun",
    amount: "৳2,80,000+",
    role: "Empowered housewife turned high-income freelancer. A symbol of transformation.",
    achievement: "Housewife Success",
    image: "/artifact1.png",
  },
  {
    name: "Priyonti Datta",
    amount: "৳1,40,000",
    role: "Fiverr Level 1 Seller. Balancing housewife duties with a professional IT career.",
    achievement: "Level 1 Seller",
    image: "/artifact2.png",
  },
];

export const COLORS = {
  primary: "#ec4899", // Pink
  secondary: "#f97316", // Orange
  accent: "#fbbf24", // Yellow/Amber
};
