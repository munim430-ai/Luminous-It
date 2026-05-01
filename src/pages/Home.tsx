/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "../components/Hero";
import SuccessStories from "../components/SuccessStories";
import Dashboard from "../components/Dashboard";
import ReferralSystem from "../components/ReferralSystem";
import { motion } from "motion/react";
import { Sparkles, Globe, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Vision Statement Section */}
      <section className="py-24 border-y border-slate-100 bg-linear-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Globe size={600} className="absolute -right-1/4 -top-1/4 text-brand-orange animate-spin-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 text-brand-orange mb-8">
              <Sparkles size={20} />
              <span className="font-bold uppercase tracking-[0.4em] text-[10px]">The Future of Bangladesh</span>
           </div>
           <h2 className="text-4xl md:text-7xl font-serif italic mb-12 text-slate-900">Building a <br /><span className="gradient-text not-italic font-bold">$1B Revenue</span> Bridge</h2>
           <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mb-16">
              Our graduates aren't just freelancers; they are the new digital architects of Bangladesh. We handle the training, the mentorship, and the global scaling. You bring the ambition.
           </p>
           <div className="flex justify-center gap-12">
              <div className="text-left">
                 <p className="text-brand-pink font-bold text-3xl mb-1">৳1B+</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Vision 2026</p>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block" />
              <div className="text-left">
                 <p className="text-brand-pink font-bold text-3xl mb-1">50K+</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Success Network</p>
              </div>
           </div>
        </div>
      </section>

      <SuccessStories />
      <Dashboard />
      <ReferralSystem />

      {/* Featured CTA Section */}
      <section className="py-40 bg-white px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center glass rounded-[4rem] p-12 md:p-24 border border-brand-orange/10 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-slate-900">Ready to join the <br /><span className="gradient-text not-italic font-bold uppercase transition-all">Elite?</span></h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
            Stop dreaming about foreign income. Start building the skills that command 5-figure payouts in dollars.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 rounded-2xl gradient-bg text-white font-bold uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-pink/20">
              Apply For Admission
            </button>
            <a 
              href="https://m.me/luminousitinstitute"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 rounded-2xl glass hover:bg-slate-50 text-slate-900 font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 border border-slate-200"
            >
              <MessageCircle size={18} />
              Instant Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
