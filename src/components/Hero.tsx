/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import Hero3D from "./three/Hero3D";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 lg:pt-0 flex items-center overflow-hidden bg-[#fff5f7]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-orange/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-12 lg:py-0">
          <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest mb-6 lg:mb-8"
            >
              <Sparkles size={16} />
              <span>Leading IT Institute in Bangladesh</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] mb-6 lg:mb-8 text-slate-900"
            >
              Empowering <span className="italic gradient-text font-semibold">Futures</span> <br />
              With IT Mastery.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-slate-500 mb-8 lg:mb-12 max-w-xl leading-relaxed"
            >
              Join Bangladesh's premier IT training platform. 
              Turning thousands of students into global freelance success stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full sm:w-auto"
            >
              <Link 
                to="/dashboard"
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 rounded-2xl gradient-bg text-white font-bold uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-pink/20"
              >
                Join Admission
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/stories"
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 rounded-2xl glass hover:bg-slate-50 text-slate-900 font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 border border-slate-100"
              >
                Success Stories
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-24 pt-8 lg:pt-12 border-t border-slate-100 w-full">
               {[
                 { icon: <Users size={18} />, value: "50K+", label: "Mentored" },
                 { icon: <TrendingUp size={18} />, value: "৳25M+", label: "Success" },
                 { icon: <Sparkles size={18} />, value: "3000+", label: "Career Path" },
                 { icon: <Users size={18} />, value: "৳1B+", label: "Vision 2026" },
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center lg:items-start space-y-1">
                   <div className="flex items-center gap-2 text-brand-orange">
                     {stat.icon}
                     <span className="text-lg lg:text-2xl font-display font-bold text-slate-900">{stat.value}</span>
                   </div>
                   <p className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-slate-400">{stat.label}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full lg:w-2/5 flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/20 via-transparent to-transparent opacity-30 blur-3xl" />
            <div className="w-full h-full relative z-10 scale-90 md:scale-100">
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
