/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Laptop, CheckCircle, Globe, DollarSign } from "lucide-react";

export default function EarningGuide() {
  const steps = [
    { title: "Choose Skill", desc: "Digital Marketing or English Communication.", icon: <Laptop /> },
    { title: "Get Certified", desc: "Complete Luminous intensive training.", icon: <CheckCircle /> },
    { title: "Go Global", desc: "Set up Fiverr/Upwork profiles.", icon: <Globe /> },
    { title: "Earn Income", desc: "Cash out via bKash or Bank.", icon: <DollarSign /> },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-12">The <span className="not-italic font-bold text-brand-emerald">Blueprint</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="glass rounded-3xl p-8">
              <div className="text-brand-emerald mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
