/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  BarChart3,
  LayoutDashboard,
  PieChart,
  ShieldCheck,
  Wallet,
  Target,
  MessageCircle,
} from "lucide-react";
import Logo from "./Logo";

const MESSENGER_URL = "https://m.me/luminousitinstituteofficialonline1";

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none text-brand-pink">
        <LayoutDashboard size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest border-l-2 border-brand-orange pl-3 mb-6 inline-block">
              লার্নিং প্ল্যাটফর্ম
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              আপনার অগ্রগতি{" "}
              <span className="gradient-text">ট্র্যাক করুন</span>
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-xl">
              প্রতিটি Luminous IT শিক্ষার্থী একটি প্রফেশনাল ড্যাশবোর্ড পান — যেখানে কোর্সের অগ্রগতি,
              সার্টিফিকেট, এবং আয়ের পূর্বাভাস সব একজায়গায়।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Target className="text-brand-orange" />, text: "প্রতিদিনের লক্ষ্য ট্র্যাকিং" },
                { icon: <Wallet className="text-brand-pink" />, text: "আয়ের পূর্বাভাস" },
                { icon: <ShieldCheck className="text-brand-orange" />, text: "ভেরিফাইড সার্টিফিকেট" },
                { icon: <PieChart className="text-brand-pink" />, text: "মার্কেট বিশ্লেষণ" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl group-hover:border-brand-orange/30 transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 gradient-bg text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-pink/20 text-sm"
            >
              <MessageCircle size={18} />
              ভর্তির তথ্য জানুন
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 size={100} className="text-slate-900" />
              </div>

              <div className="flex items-center gap-5 mb-10">
                <Logo size={56} />
                <div>
                  <h4 className="text-slate-900 font-extrabold text-lg">Student Dashboard</h4>
                  <p className="text-brand-pink text-xs font-bold uppercase tracking-widest">Active Enrollment</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <motion.div
                  whileHover={{ y: -4, borderColor: "#f97316" }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-colors"
                >
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">কোর্স মাইলস্টোন</p>
                  <h3 className="text-2xl text-slate-900 font-extrabold mb-1">৳৪৫,০০০ লক্ষ্য</h3>
                  <p className="text-brand-pink text-xs font-bold">+১৫% অগ্রগতি</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, borderColor: "#ec4899" }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-colors"
                >
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">সামগ্রিক গ্রেড</p>
                  <h3 className="text-2xl text-slate-900 font-extrabold mb-3">Grade A+</h3>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg w-[92%]" />
                  </div>
                </motion.div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest">আসন্ন কাজ</h4>
                  <span className="text-brand-orange text-xs font-bold cursor-pointer hover:underline">সম্পূর্ণ কারিকুলাম</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "মার্কেট রিসার্চ অ্যাসাইনমেন্ট", status: "আজকেই শেষ", color: "bg-brand-orange" },
                    { label: "ফাইনাল প্রজেক্ট সাবমিশন", status: "আগামী সপ্তাহ", color: "bg-slate-300" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color} ${item.status === "আজকেই শেষ" ? "animate-pulse" : ""}`} />
                        <span className="text-slate-700 text-sm font-semibold">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{item.status}</span>
                    </motion.div>
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
