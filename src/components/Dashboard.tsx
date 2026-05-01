/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BarChart3, 
  DollarSign, 
  LayoutDashboard, 
  PieChart, 
  ShieldCheck, 
  Wallet,
  ArrowUpRight,
  Target
} from "lucide-react";

import Logo from "./Logo";

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none text-brand-pink">
        <LayoutDashboard size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-mono text-sm uppercase tracking-widest border-l-2 border-brand-orange pl-3 mb-6 inline-block">Learning Platform</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-slate-900">Your Progress <br /><span className="gradient-text not-italic font-bold uppercase transition-all">Control Center</span></h2>
            <p className="text-slate-500 mb-12 leading-relaxed text-lg max-w-xl">
              Every Luminous student gets access to a professional dashboard to track milestones, manage certifications, and forecast international earning potential.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: <Target className="text-brand-orange" />, text: "Daily Tracking" },
                { icon: <Wallet className="text-brand-pink" />, text: "Income Forecast" },
                { icon: <ShieldCheck className="text-brand-orange" />, text: "Verified Certificates" },
                { icon: <PieChart className="text-brand-pink" />, text: "Market Analysis" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl group-hover:bg-brand-orange/5 group-hover:border-brand-orange/30 transition-all shadow-sm">{item.icon}</div>
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-600">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-5 gradient-bg text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-pink/20">
              Demo Portal
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <BarChart3 size={120} className="text-slate-900" />
              </div>

              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                  <Logo size={64} />
                  <div>
                    <h4 className="text-slate-900 font-serif italic text-xl">Student Dashboard</h4>
                    <p className="text-brand-pink text-[10px] font-bold uppercase tracking-widest">Active Enrollment</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Course Milestone</p>
                  <h3 className="text-3xl text-slate-900 font-serif tracking-tight mb-2">৳45,000 Target</h3>
                  <p className="text-brand-pink text-[10px] font-bold">+15% progress</p>
                </div>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Overall Grade</p>
                  <h3 className="text-3xl text-slate-900 font-serif tracking-tight mb-4">Grade A+</h3>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg w-[92%]" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Upcoming Tasks</h4>
                  <span className="text-brand-orange text-[10px] font-bold tracking-widest group cursor-pointer hover:underline">Full Curriculum</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Market Research", status: "Due Today", color: "bg-brand-orange" },
                    { label: "Final Project Submission", status: "Next Week", color: "bg-white/20" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${item.color} ${item.status === 'Due Today' ? 'animate-pulse' : ''}`} />
                        <span className="text-slate-700 text-sm font-bold tracking-tight">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
