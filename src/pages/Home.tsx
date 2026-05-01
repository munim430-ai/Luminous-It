/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "../components/Hero";
import SuccessStories from "../components/SuccessStories";
import Dashboard from "../components/Dashboard";
import { motion } from "motion/react";
import { MessageCircle, Sparkles, Globe, BookOpen, Trophy, Users, Star, CheckCircle } from "lucide-react";

const MESSENGER_URL = "https://m.me/luminousitinstituteofficialonline1";

const COURSES = [
  { title: "গ্রাফিক ডিজাইন", desc: "Photoshop, Illustrator দিয়ে প্রফেশনাল ডিজাইনার হন", icon: "🎨", badge: "সবচেয়ে জনপ্রিয়" },
  { title: "ডিজিটাল মার্কেটিং", desc: "Facebook, Google Ads, SEO — সব কিছু শিখুন একসাথে", icon: "📣", badge: "হট কোর্স" },
  { title: "ওয়েব ডিজাইন", desc: "HTML, CSS, WordPress দিয়ে প্রফেশনাল ওয়েবসাইট তৈরি", icon: "💻", badge: "" },
  { title: "ভিডিও এডিটিং", desc: "YouTube ও Social Media-র জন্য প্রফেশনাল ভিডিও তৈরি", icon: "🎬", badge: "নতুন" },
  { title: "ইংরেজি দক্ষতা", desc: "Freelancing-এর জন্য প্রফেশনাল Communication শিখুন", icon: "🌍", badge: "" },
  { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "International Marketplace-এ সহজেই কাজ পান", icon: "📱", badge: "" },
];

const WHY_US = [
  { icon: <Trophy size={22} className="text-brand-orange" />, title: "অভিজ্ঞ প্রশিক্ষক", desc: "বাস্তব অভিজ্ঞতাসম্পন্ন ফ্রিল্যান্সার প্রশিক্ষকদের কাছ থেকে শিখুন" },
  { icon: <Users size={22} className="text-brand-pink" />, title: "লাইফটাইম সাপোর্ট", desc: "কোর্স শেষেও ২৪/৭ মেন্টর সাপোর্ট পাবেন — বিনামূল্যে" },
  { icon: <Globe size={22} className="text-brand-orange" />, title: "ইন্টারন্যাশনাল মার্কেটপ্লেস", desc: "Fiverr, Upwork, Freelancer.com-এ কাজ পাওয়ার গ্যারান্টি" },
  { icon: <BookOpen size={22} className="text-brand-pink" />, title: "সার্টিফিকেট", desc: "সরকার-স্বীকৃত সার্টিফিকেট যা আপনার ক্যারিয়ার বদলে দেবে" },
  { icon: <CheckCircle size={22} className="text-brand-orange" />, title: "বাস্তবমুখী প্রশিক্ষণ", desc: "শুধু তত্ত্ব নয়, রিয়েল প্রজেক্টে কাজ করার সুযোগ" },
  { icon: <Star size={22} className="text-brand-pink" />, title: "সাফল্যের রেকর্ড", desc: "৫০,০০০+ শিক্ষার্থী আজ সফল ফ্রিল্যান্সার — এটাই আমাদের গর্ব" },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest border-l-2 border-brand-orange pl-3 mb-5">
              <Sparkles size={14} /> কেন Luminous IT বেছে নেবেন?
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              আমরা শুধু শেখাই না,{" "}
              <span className="gradient-text">সফল করি।</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              বাংলাদেশের সেরা IT প্রশিক্ষণ কেন্দ্র হিসেবে আমরা হাজারো তরুণের স্বপ্নকে বাস্তবে রূপ দিয়েছি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Globe size={500} className="absolute -right-1/4 -top-1/4 text-brand-orange animate-spin-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest border-l-2 border-brand-orange pl-3 mb-5">
              <BookOpen size={14} /> আমাদের কোর্সসমূহ
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              আপনার পছন্দের{" "}
              <span className="gradient-text">ক্যারিয়ার</span> বেছে নিন
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              International Marketplace-এর চাহিদা অনুযায়ী তৈরি করা প্রতিটি কোর্স।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-brand-pink/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{course.icon}</span>
                  {course.badge && (
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full gradient-bg text-white uppercase tracking-wide">
                      {course.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{course.desc}</p>
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-brand-pink font-bold text-sm hover:gap-3 transition-all"
                >
                  <MessageCircle size={15} /> এই কোর্সে ভর্তি হন →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] gradient-bg p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-brand-pink/20"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Globe size={600} className="absolute -right-1/4 -top-1/4 animate-spin-slow" />
            </div>
            <div className="relative z-10">
              <span className="inline-block text-white/70 font-bold text-xs uppercase tracking-widest mb-4">আমাদের লক্ষ্য</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                বাংলাদেশ থেকে <br />
                <span className="text-yellow-300">৳১০০ কোটি+</span> আয়ের স্বপ্ন
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                আমাদের শিক্ষার্থীরা শুধু ফ্রিল্যান্সার নয় — তারা বাংলাদেশের ডিজিটাল ভবিষ্যতের নির্মাতা।
                Vision 2026-এ আমরা একসাথে গড়ব এক নতুন বাংলাদেশ।
              </p>
              <div className="flex flex-wrap justify-center gap-12 mb-12">
                <div>
                  <p className="text-3xl font-extrabold text-yellow-300 mb-1">৫০,০০০+</p>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">সফল শিক্ষার্থী</p>
                </div>
                <div className="w-px bg-white/20 hidden md:block" />
                <div>
                  <p className="text-3xl font-extrabold text-yellow-300 mb-1">৳২.৫ কোটি+</p>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">মোট আয়</p>
                </div>
                <div className="w-px bg-white/20 hidden md:block" />
                <div>
                  <p className="text-3xl font-extrabold text-yellow-300 mb-1">২০২৬</p>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Vision Year</p>
                </div>
              </div>
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-pink font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl text-sm"
              >
                <MessageCircle size={18} />
                এখনই যোগ দিন
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SuccessStories />
      <Dashboard />

      {/* Final CTA */}
      <section className="py-32 bg-white px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100 shadow-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} /> আজই শুরু করুন
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              দেরি না করে এখনই{" "}
              <span className="gradient-text">স্বপ্নের পথে</span> হাঁটুন
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              ফ্রিল্যান্সিং শিখুন, আন্তর্জাতিক আয় করুন। Messenger-এ মেসেজ করুন — আমরা সাথে আছি।
            </p>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl gradient-bg text-white font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-pink/20"
            >
              <MessageCircle size={22} />
              Messenger-এ ভর্তির তথ্য পান
            </a>
            <p className="text-slate-400 text-xs mt-5">বিনামূল্যে পরামর্শ · তাৎক্ষণিক সাড়া</p>
          </motion.div>
        </div>
      </section>

      {/* Floating Messenger Button */}
      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full gradient-bg text-white font-bold text-sm shadow-2xl shadow-brand-pink/40 hover:scale-105 active:scale-95 transition-all animate-bounce-slow"
        aria-label="Message on Messenger"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">Messenger-এ কথা বলুন</span>
      </a>
    </div>
  );
}
