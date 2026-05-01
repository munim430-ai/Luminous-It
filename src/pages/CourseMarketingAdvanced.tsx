/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Rocket, 
  BarChart3, 
  Search, 
  Mail, 
  Layout, 
  Users, 
  CheckCircle2, 
  Clock, 
  Trophy 
} from "lucide-react";

export default function CourseMarketingAdvanced() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-slate-900">
      <div className="bg-linear-to-br from-indigo-900 via-slate-900 to-slate-950 rounded-[3rem] p-8 md:p-16 mb-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 animate-pulse" />
        
        <div className="relative z-10 lg:w-3/4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
            <Rocket size={14} />
            Professional Level
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Digital Marketing <br /> <span className="text-blue-400">Advanced Masterclass</span></h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Scale your freelancing business to the next level. Master advanced analytics, paid advertising, and global market strategies used by top-tier agencies.
          </p>
          <div className="flex flex-wrap gap-8 mb-12">
            <div className="flex items-center gap-2 text-slate-300"><Clock size={20} className="text-blue-400" /> 6 Months</div>
            <div className="flex items-center gap-2 text-slate-300"><Trophy size={20} className="text-blue-400" /> Advanced Certification</div>
            <div className="flex items-center gap-2 text-slate-300"><Layout size={20} className="text-blue-400" /> Lifetime Support</div>
          </div>
          <button className="px-12 py-5 bg-blue-600 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 transition-all">
            Apply Now - ৳ 9,500
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Course Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Advanced SEO & SEM", icon: <Search className="text-blue-500" />, desc: "Technical SEO, site audits, and search engine mechanics." },
                { title: "Google & Meta Ads", icon: <BarChart3 className="text-blue-500" />, desc: "High-level ad targeting, pixel setup, and conversion tracking." },
                { title: "Email Marketing Automation", icon: <Mail className="text-blue-500" />, desc: "Sales funnels, drip campaigns, and CRM integration." },
                { title: "Personal Branding", icon: <Users className="text-blue-500" />, desc: "Establishing yourself as an authority in the global marketplace." }
              ].map((module, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{module.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
            <h2 className="text-3xl font-bold mb-10">Why This Course?</h2>
            <div className="space-y-6">
              {[
                "100% Practical project-based learning model",
                "Direct mentorship from Top-Rated freelancers",
                "Advanced bidding strategies for high-budget clients",
                "Luminous Job Placement support after graduation",
                "Weekly live Q&A sessions with industry leaders"
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={16} className="text-green-600" />
                  </div>
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold mb-6 relative">Prerequisites</h3>
              <ul className="space-y-4 relative">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Basic Digital Marketing Knowledge
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Proficiency in Computer Operations
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Commitment to 12+ hours/week
                </li>
              </ul>
              
              <div className="mt-10 pt-8 border-t border-slate-50">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Admissions Open</p>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-green-600 uppercase">12 Seats Remaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
