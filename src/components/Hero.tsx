/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Sparkles, TrendingUp, Users, Star } from "lucide-react";
import Hero3D from "./three/Hero3D";

const MESSENGER_URL = "https://m.me/luminousitinstituteofficialonline1";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 lg:pt-0 flex items-center overflow-hidden bg-[#fff5f7]">
      {/* Decorative bg blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/8 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-12 lg:py-0">

          {/* Left: Text */}
          <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-3/5">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold mb-6 lg:mb-8"
            >
              <Sparkles size={14} />
              <span>🇧🇩 বাংলাদেশের #১ ফ্রিল্যান্সিং প্রশিক্ষণ কেন্দ্র</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 lg:mb-7 text-slate-900"
            >
              <span className="block text-slate-800">আপনার স্বপ্নের</span>
              <span className="block gradient-text italic font-extrabold">ক্যারিয়ার শুরু</span>
              <span className="block text-slate-800">হোক আজই।</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-slate-500 mb-8 lg:mb-10 max-w-xl leading-relaxed"
            >
              Fiverr, Upwork, ও International Marketplace-এ সফলতার পথে{" "}
              <strong className="text-slate-700">৫০,০০০+ শিক্ষার্থী</strong>-কে আমরা নিয়ে গেছি।
              পেশাদার প্রশিক্ষণ, লাইফটাইম সাপোর্ট — এখনই যোগ দিন।
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl gradient-bg text-white font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-pink/30"
              >
                <MessageCircle size={20} />
                Messenger-এ ভর্তি হন
              </a>
              <a
                href="https://www.facebook.com/luminousitinstituteofficialonline1"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-sm hover:border-brand-pink/40 hover:bg-brand-pink/5 transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <Star size={16} className="text-brand-orange" />
                সাফল্যের গল্প দেখুন
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mt-6"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?u=hero${i}`} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                <span className="font-bold text-slate-800">৫০,০০০+</span> শিক্ষার্থী এরই মধ্যে যোগ দিয়েছেন
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-12 pt-8 border-t border-slate-100 w-full">
              {[
                { icon: <Users size={16} />, value: "৫০K+", label: "সফল শিক্ষার্থী" },
                { icon: <TrendingUp size={16} />, value: "৳২.৫ কোটি+", label: "আয়ের রেকর্ড" },
                { icon: <Sparkles size={16} />, value: "৩০০০+", label: "ক্যারিয়ার গড়া" },
                { icon: <Star size={16} />, value: "৳১০০ কোটি+", label: "Vision 2026" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-orange">
                    {stat.icon}
                    <span className="text-lg lg:text-xl font-extrabold text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-[9px] lg:text-[10px] uppercase tracking-wide font-bold text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D visual */}
          <div className="relative h-[280px] md:h-[380px] lg:h-[580px] w-full lg:w-2/5 flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/20 via-transparent to-transparent opacity-30 blur-3xl" />
            <div className="w-full h-full relative z-10">
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
