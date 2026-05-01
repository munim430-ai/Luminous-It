/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Gift, Share2, Copy, Check, Award, DollarSign, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

export default function ReferralSystem() {
  const [copied, setCopied] = useState(false);
  const referralCode = "ELITE-REF-2024";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border border-slate-200 shadow-2xl">
          <div className="lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-10 shadow-xl shadow-brand-orange/5">
              <Gift size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-slate-900 text-left">
              Grow Together, <br />
              <span className="gradient-text not-italic font-bold uppercase transition-all">Earn Rewards</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Share the vision! Refer a student and both rewards are yours to explore. Get credits for certifications or specialized training.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center justify-between">
                <span className="font-mono font-bold text-xl text-slate-800 tracking-widest">{referralCode}</span>
                <button 
                  onClick={handleCopy}
                  className="p-3 hover:bg-slate-100 rounded-xl transition-all text-slate-400 hover:text-brand-pink active:scale-95"
                >
                  {copied ? <Check className="text-brand-pink" /> : <Copy size={20} />}
                </button>
              </div>
              <button className="w-full sm:w-auto px-10 py-5 gradient-bg text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-2xl shadow-brand-pink/30 hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-widest">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-50 p-10 md:p-20 border-l border-slate-100">
            <div className="grid grid-cols-2 gap-6 h-full">
              {[
                { label: "Community", value: "24", icon: <Users size={20} /> },
                { label: "Credit", value: "৳15K", icon: <DollarSign size={20} /> },
                { label: "Success", value: "85%", icon: <TrendingUp size={20} /> },
                { label: "Tier", value: "Diamond", icon: <Award size={20} /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 text-center flex flex-col justify-center items-center hover:border-brand-orange/30 transition-all duration-300 shadow-sm"
                >
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-4 tracking-[0.2em]">{stat.label}</p>
                  <p className="text-3xl font-serif italic text-slate-900 mb-2">{stat.value}</p>
                  <div className="text-brand-pink opacity-40">{stat.icon}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
