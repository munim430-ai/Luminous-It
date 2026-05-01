/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mic2, MessageSquare, Globe, Briefcase, CheckCircle2, Video, Headset } from "lucide-react";

export default function CourseEnglish() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold uppercase tracking-widest mb-8">
            <Globe size={14} /> Global Communication
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">English for <br /><span className="text-primary-600">Freelancers</span></h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Don't let language be a barrier to your success. Learn how to communicate confidently with international clients, write professional proposals, and close high-ticket deals.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-3">
              <Mic2 className="text-primary-500" />
              <span className="font-bold text-slate-700">Speaking</span>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-3">
              <MessageSquare className="text-blue-500" />
              <span className="font-bold text-slate-700">Writing</span>
            </div>
          </div>
          <button className="px-10 py-5 gradient-bg text-white font-bold rounded-2xl shadow-xl shadow-primary-500/30">
            Start Learning - ৳ 2,500
          </button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-slate-900 rounded-[4rem] p-10 text-white shadow-2xl relative z-10">
            <h3 className="text-2xl font-bold mb-8 italic">Course Preview</h3>
            <div className="space-y-6">
              {[
                { title: "Module 1", label: "Client Greeting & Pitching", icon: <Briefcase /> },
                { title: "Module 2", label: "Professional Proposal Writing", icon: <MessageSquare /> },
                { title: "Module 3", label: "Voice/Video Call Confidence", icon: <Video /> },
                { title: "Module 4", label: "Interview Preparation", icon: <Headset /> },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">{m.icon}</div>
                    <div>
                      <p className="text-xs opacity-60 uppercase font-bold">{m.title}</p>
                      <p className="font-bold text-sm">{m.label}</p>
                    </div>
                  </div>
                  <CheckCircle2 size={18} className="text-green-500 opacity-50" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full -z-10" />
        </div>
      </div>

      <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 border border-slate-100">
        <h2 className="text-3xl font-bold mb-16 text-center">Core <span className="text-primary-600">Learning Pillars</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center mx-auto mb-8 text-primary-600"><Mic2 size={40} /></div>
            <h4 className="text-xl font-bold mb-4 italic">Fluency & Pronunciation</h4>
            <p className="text-slate-500 text-sm leading-relaxed text-balance">Work on your accent and neutral tone to sound professional on global calls.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center mx-auto mb-8 text-primary-600"><MessageSquare size={40} /></div>
            <h4 className="text-xl font-bold mb-4 italic">Grammar & Structure</h4>
            <p className="text-slate-500 text-sm leading-relaxed text-balance">Master the essential grammar needed for formal business emails and chats.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center mx-auto mb-8 text-primary-600"><Briefcase size={40} /></div>
            <h4 className="text-xl font-bold mb-4 italic">Business Negotiation</h4>
            <p className="text-slate-500 text-sm leading-relaxed text-balance">Learn the art of closing high-value deals with confidence and clarity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
