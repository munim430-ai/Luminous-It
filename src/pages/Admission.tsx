/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { UserPlus, Send, Mail, CheckCircle2 } from "lucide-react";

export default function AdmissionPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-emerald font-mono text-sm uppercase tracking-widest border-l-2 border-brand-emerald pl-3 mb-6 block">Join the Elite</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 italic">Enroll <span className="not-italic text-brand-emerald font-bold">Today</span></h1>
          <p className="text-white/60">Fill out the quick form below and our counselor will reach out within 24 hours.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[3rem] p-8 md:p-16 border border-white/10"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-emerald/50 outline-hidden transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-emerald/50 outline-hidden transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Course of Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-emerald/50 outline-hidden transition-all appearance-none">
                <option className="bg-brand-dark">Digital Marketing Basic</option>
                <option className="bg-brand-dark">Digital Marketing Advanced</option>
                <option className="bg-brand-dark">English Communication</option>
                <option className="bg-brand-dark">Web Development</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Your Background (Optional)</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-emerald/50 outline-hidden transition-all" />
            </div>

            <button type="submit" className="w-full py-5 gradient-bg text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
              <Send size={20} />
              Submit Application
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-xs font-bold text-white/40 uppercase">
              <CheckCircle2 size={16} className="text-brand-emerald" /> Verified Training
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-white/40 uppercase">
              <CheckCircle2 size={16} className="text-brand-emerald" /> 24/7 Support
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-white/40 uppercase">
              <CheckCircle2 size={16} className="text-brand-emerald" /> Job Placement
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
