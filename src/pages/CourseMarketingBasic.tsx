/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Clock, Globe, Target } from "lucide-react";

export default function CourseMarketingBasic() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 mb-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 gradient-bg opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 lg:w-2/3">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-600 text-xs font-bold uppercase tracking-widest mb-6">Beginner Friendly</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Marketing <br /> Basic Course</h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed text-balance">
            The perfect starting point for your freelancing career. Learn the fundamentals of digital presence and how to manage social media for international brands.
          </p>
          <div className="flex flex-wrap gap-6 mb-10 opacity-80">
            <div className="flex items-center gap-2"><Clock size={18} /> 3 Months</div>
            <div className="flex items-center gap-2"><Globe size={18} /> Online & Offline</div>
            <div className="flex items-center gap-2"><Target size={18} /> 10+ Projects</div>
          </div>
          <button className="px-10 py-4 gradient-bg rounded-2xl font-bold shadow-xl shadow-primary-600/30 hover:scale-105 transition-transform">
            Enroll Now - ৳ 4,500
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 italic underline decoration-primary-500 underline-offset-8">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Facebook Page Management",
                "Basic Content Creation",
                "Instagram Marketing",
                "Intro to Freelance Platforms",
                "Winning Client Proposals",
                "Basic Canva Design",
                "Engagement Strategies",
                "Market Research Basics"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {[
                "Week 1-2: Foundations of Digital Marketing",
                "Week 3-4: Mastering Social Media Platforms",
                "Week 5-6: Content Strategy & Planning",
                "Week 7-8: Intro to Fiverr & Upwork",
                "Week 9-12: Live Projects & Certification"
              ].map((week, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-primary-200 transition-colors">
                  <span className="font-bold text-slate-800">{week}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors italic">0{i+1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold mb-6">Instructor</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=instructor" alt="Instructor" />
              </div>
              <div>
                <p className="font-bold text-slate-900">S.M. Ashikur Rahman</p>
                <p className="text-sm text-slate-500">Expert Freelancer & CEO</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed italic border-l-2 border-slate-100 pl-4">
              "My mission is to transform the youth of Bangladesh into digital assets. This course is your first step."
            </p>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Lectures</span>
                <span className="font-bold">24+ Sessions</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Live Projects</span>
                <span className="font-bold">03 Projects</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Certificate</span>
                <span className="font-bold text-green-600">Yes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
