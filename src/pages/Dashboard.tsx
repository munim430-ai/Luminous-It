/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BarChart3, 
  Target,
  ArrowUpRight,
  ShieldCheck,
  LayoutDashboard
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-brand-emerald font-mono text-sm uppercase tracking-widest border-l-2 border-brand-emerald pl-3 mb-4 block">Personal Hub</span>
            <h1 className="text-4xl md:text-6xl font-serif italic text-white">Growth <span className="not-italic text-brand-emerald font-bold uppercase">Analytics</span></h1>
          </div>
          <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4">
             <div className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse" />
             <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Market Live: Optimal</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none text-white">
                <LayoutDashboard size={200} />
              </div>

              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-brand-emerald flex items-center justify-center text-black font-bold text-2xl">R</div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Rahat Chowdhury</h3>
                    <p className="text-brand-emerald text-sm font-bold uppercase tracking-widest">Elite Tier</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Revenue</p>
                  <h3 className="text-4xl text-white font-serif tracking-tight mb-2">৳12,840.00</h3>
                  <p className="text-brand-emerald text-xs font-bold">+12% this week</p>
                </div>
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Tier Progress</p>
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-4xl text-white font-serif tracking-tight">84%</h3>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg w-[84%]" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Active Modules</h4>
                <div className="space-y-4">
                  {["Advanced SEO", "Global Outreach"].map((m, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl">
                      <span className="text-white/80 font-bold text-sm tracking-wide">{m}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-emerald">In Progress</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="glass-emerald rounded-[2.5rem] p-8">
              <h4 className="text-brand-emerald font-bold uppercase tracking-widest text-xs mb-4">Payout</h4>
              <button className="w-full py-4 bg-brand-emerald text-black font-bold uppercase tracking-widest text-xs rounded-2xl">Withdraw Now</button>
            </div>
            <div className="glass rounded-[2.5rem] p-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Certifications</h4>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <ShieldCheck className="text-brand-emerald" size={24} />
                <p className="text-white font-bold text-xs uppercase">Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
